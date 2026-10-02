"""Bouwt index.html en product.html uit layout/, sections/, snippets/ en content/.
Template-syntax is een kleine subset van Shopify Liquid ({{ }}, {% for %}, {% if a == b %}, {% render %}),
zodat secties later bijna 1-op-1 naar een Shopify-thema kunnen. Draai: python3 build.py"""
import json, re, pathlib
ROOT = pathlib.Path(__file__).parent
load = lambda p: json.loads((ROOT / p).read_text())
settings = load('content/settings.json')
product = load('content/product-hoodie-01.json')
collections = load('content/collections.json')

def lookup(ctx, path):
    cur = ctx
    for part in path.strip().split('.'):
        if isinstance(cur, list): cur = cur[int(part)]
        elif isinstance(cur, dict): cur = cur.get(part, '')
        else: return ''
    return cur

def find(name):
    for d in ('sections', 'snippets'):
        p = ROOT / d / f'{name}.html'
        if p.exists(): return p.read_text()
    raise FileNotFoundError(name)

TOKEN = re.compile(r'({%.*?%}|{{.*?}})', re.S)
def render(tpl, ctx):
    parts = TOKEN.split(tpl); out = []; i = 0
    def block(i, end_tags):
        body = []; depth = 0
        while i < len(parts):
            t = parts[i]
            m = re.match(r'{%\s*(\w+)', t)
            if m and m.group(1) in ('for', 'if'): depth += 1
            if m and m.group(1) in end_tags and depth == 0: return ''.join(body), i
            if m and m.group(1) in ('endfor', 'endif'): depth -= 1
            body.append(t); i += 1
        raise ValueError('unclosed block')
    while i < len(parts):
        t = parts[i]
        if t.startswith('{{'):
            out.append(str(lookup(ctx, t[2:-2])))
        elif t.startswith('{%'):
            tag = t[2:-2].strip()
            if tag.startswith('for '):
                var, src = re.match(r'for (\w+) in ([\w.]+)', tag).groups()
                body, i = block(i + 1, ('endfor',))
                for item in lookup(ctx, src): out.append(render(body, {**ctx, var: item}))
            elif tag.startswith('if '):
                cond = tag[3:]
                body, i = block(i + 1, ('endif',))
                if '==' in cond:
                    a, b = [c.strip() for c in cond.split('==')]
                    ok = str(lookup(ctx, a)) == str(lookup(ctx, b))
                else: ok = bool(lookup(ctx, cond))
                if ok: out.append(render(body, ctx))
            elif tag.startswith('render'):
                out.append(render(find(re.search(r"'([\w-]+)'", tag).group(1)), ctx))
        else: out.append(t)
        i += 1
    return ''.join(out)

layout = (ROOT / 'layout/theme.html').read_text()
for name in ('index', 'product'):
    t = load(f'templates/{name}.json')
    data = load('content/' + t['content'])
    ctx = {'settings': settings, 'product': product, 'section': data, 'dots': range(36), 'collections': collections, 'first': collections['collections'][0]['id'],
           'page': {'title': t['title'], 'template': name}}
    html = ''.join(render(find(s), ctx) for s in t['sections'])
    (ROOT / f'{name}.html').write_text(render(layout, {**ctx, 'content_for_layout': html}))
    print('built', name + '.html')

# een pagina per collectie
for coll in collections['collections']:
    ctx = {'settings': settings, 'product': product, 'collections': collections, 'coll': coll,
           'page': {'title': coll['name'].title() + ' collection', 'template': 'collection'}}
    html = render(find('main-collection'), ctx)
    (ROOT / coll['url']).write_text(render(layout, {**ctx, 'content_for_layout': html}))
    print('built', coll['url'])
