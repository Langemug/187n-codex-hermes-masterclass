/* UI: ACCESS GRANTED-knop, galerij, mobiel menu en DEMO-winkelmand (alleen localStorage van deze browser). */
(function(){
  var KEY='vs-demo-cart', reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mem=null;
  function read(){try{var v=window.localStorage.getItem(KEY);if(v)return JSON.parse(v)}catch(e){}try{var n=window.name&&JSON.parse(window.name);if(n&&n[KEY])return n[KEY]}catch(e){}return mem||[]}
  function write(c){mem=c;try{window.localStorage.setItem(KEY,JSON.stringify(c));return}catch(e){}try{var o={};o[KEY]=c;window.name=JSON.stringify(o)}catch(e){}}
  var cart=read();
  function eur(n){return '€'+n.toFixed(2).replace('.',',')}
  function num(p){return parseFloat(String(p).replace(/[^0-9,]/g,'').replace(',','.'))||0}
  var drawer=document.querySelector('.cart'), shade=document.querySelector('.cart-shade');
  function renderCart(){
    var box=document.querySelector('[data-cart-items]'), total=0, count=0;
    box.innerHTML='';
    if(!cart.length){box.innerHTML='<p class="cart-empty">&gt; NO ITEMS YET. DEMO CART.</p>'}
    cart.forEach(function(it,i){
      total+=num(it.price)*it.qty;count+=it.qty;
      var el=document.createElement('div');el.className='line';
      el.innerHTML='<img alt=""><div class="t"></div><div class="qty"><button type="button" aria-label="Less">−</button><span></span><button type="button" aria-label="More">+</button><button type="button" class="rm" aria-label="Remove">×</button></div>';
      el.querySelector('img').src=it.image;
      el.querySelector('.t').textContent=it.title;
      var sm=document.createElement('small');sm.textContent='SIZE '+it.size+' · '+it.price+' · DEMO';el.querySelector('.t').appendChild(sm);
      el.querySelector('.qty span').textContent=it.qty;
      var b=el.querySelectorAll('.qty button');
      b[0].onclick=function(){it.qty--;if(it.qty<1)cart.splice(i,1);save()};
      b[1].onclick=function(){it.qty++;save()};
      b[2].onclick=function(){cart.splice(i,1);save()};
      box.appendChild(el);
    });
    document.querySelector('[data-cart-total]').textContent=eur(total);
    document.querySelectorAll('[data-cart-count]').forEach(function(n){n.textContent=count});
    document.querySelectorAll('.cart-btn').forEach(function(b){b.classList.toggle('has',count>0)});
  }
  function save(){write(cart);renderCart()}
  var lastFocus=null;
  function openCart(){lastFocus=document.activeElement;drawer.hidden=false;shade.hidden=false;drawer.querySelector('[data-cart-close]').focus()}
  function closeCart(){drawer.hidden=true;shade.hidden=true;if(lastFocus)lastFocus.focus()}
  document.querySelectorAll('[data-cart-open]').forEach(function(b){b.onclick=openCart});
  document.querySelectorAll('[data-cart-close]').forEach(function(b){b.onclick=closeCart});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!drawer.hidden)closeCart()});
  renderCart();

  function grant(btn,done){
    if(btn.classList.contains('granted'))return;
    var t=btn.innerHTML;btn.style.minWidth=btn.offsetWidth+'px';btn.textContent='> ACCESS GRANTED';btn.classList.add('granted');
    setTimeout(function(){btn.classList.remove('granted');btn.innerHTML=t;btn.style.minWidth='';done()},reduce?300:1400);
  }
  // links: JOIN THE SOCIETY -> productpagina
  document.querySelectorAll('a.btn.p').forEach(function(a){a.addEventListener('click',function(e){
    var h=a.getAttribute('href');if(!h||h.charAt(0)==='#')return;e.preventDefault();grant(a,function(){location.href=h})})});
  // productformulier -> DEMO cart
  var form=document.querySelector('[data-product-form]');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();
    var btn=form.querySelector('button[type=submit]'),size=(form.querySelector('input[name=size]:checked')||{}).value||'L';
    grant(btn,function(){
      var f=cart.find(function(x){return x.title===form.dataset.title&&x.size===size});
      if(f)f.qty++;else cart.push({title:form.dataset.title,price:form.dataset.price,image:form.dataset.image,size:size,qty:1});
      save();var cb=document.querySelector('.cart-btn');cb.classList.remove('bump');void cb.offsetWidth;cb.classList.add('bump');openCart();
    });
  })}
  // galerij
  var main=document.querySelector('[data-main]');
  document.querySelectorAll('[data-thumb]').forEach(function(b,i){
    if(i===0)b.setAttribute('aria-current','true');
    b.onclick=function(){main.src=b.dataset.thumb;main.alt=b.dataset.alt;
      document.querySelectorAll('[data-thumb]').forEach(function(x){x.removeAttribute('aria-current')});b.setAttribute('aria-current','true')}});
  // nav: huidige pagina + menu sluiten na klik
  var here=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav a,.menu nav a').forEach(function(a){if(a.getAttribute('href')===here)a.setAttribute('aria-current','page');
    a.addEventListener('click',function(){var d=a.closest('details');if(d)d.open=false})});
})();
/* collecties: drop-kaart of #c-<id> opent de juiste tab */
(function(){function pick(){var m=location.hash.match(/^#c-([\w-]+)/);if(!m)return;var r=document.getElementById('c-'+m[1]);if(r){r.checked=true;document.getElementById('collections').scrollIntoView({behavior:'smooth'})}}
addEventListener('hashchange',pick);pick();})();
