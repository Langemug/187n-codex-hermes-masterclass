/* Visionair theme JS: Shopify AJAX cart, variant picker, gallery, menu, ACCESS GRANTED. */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var drawer=document.querySelector('.cart'),shade=document.querySelector('.cart-shade'),lastFocus=null,form=null;
  function money(cents){var f=(window.VS&&VS.money)||'€{{amount_with_comma_separator}}';var v=(cents/100).toFixed(2);
    return f.replace(/\{\{\s*(\w+)\s*\}\}/,function(m,k){return k==='amount_with_comma_separator'?v.replace('.',','):k==='amount_no_decimals'?Math.round(cents/100):v})}
  function announce(m){var l=document.getElementById('live');if(!l){l=document.createElement('div');l.id='live';l.className='sr';l.setAttribute('aria-live','polite');document.body.appendChild(l)}l.textContent=m}
  function esc(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML}
  function render(cart){
    var box=document.querySelector('[data-cart-items]');if(!box)return;
    box.innerHTML=cart.items.length?'':'<p class="cart-empty">&gt; NO ITEMS YET.</p>';
    cart.items.forEach(function(it,i){
      var el=document.createElement('div');el.className='line';
      el.innerHTML=(it.image?'<img alt="" src="'+esc(it.image)+'&width=160">':'<span></span>')+'<div class="t">'+esc(it.product_title)+'<small>'+esc(it.variant_title||'')+' · '+money(it.final_price)+'</small></div><div class="qty"><button type="button" aria-label="Less">−</button><span>'+it.quantity+'</span><button type="button" aria-label="More">+</button><button type="button" class="rm" aria-label="Remove">×</button></div>';
      var b=el.querySelectorAll('.qty button');
      b[0].onclick=function(){change(it.key,it.quantity-1,i,0)};b[1].onclick=function(){change(it.key,it.quantity+1,i,1)};b[2].onclick=function(){change(it.key,0,i,2)};
      box.appendChild(el);
    });
    var t=document.querySelector('[data-cart-total]');if(t)t.textContent=money(cart.total_price);
    document.querySelectorAll('[data-cart-count]').forEach(function(n){n.textContent=cart.item_count});
    document.querySelectorAll('.cart-btn').forEach(function(b){b.classList.toggle('has',cart.item_count>0)});
  }
  function refocus(i,k){var lines=document.querySelectorAll('.cart .line');var ln=lines[Math.min(i,lines.length-1)];var t=ln?ln.querySelectorAll('.qty button')[k]:null;(t||drawer.querySelector('[data-cart-close]')).focus()}
  function root(){return (window.VS&&VS.root)||'/'}
  function get(){return fetch(root()+'cart.js',{headers:{Accept:'application/json'}}).then(function(r){return r.json()}).then(render)}
  function change(key,q,i,k){fetch(root()+'cart/change.js',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({id:key,quantity:Math.max(0,q)})}).then(function(r){return r.json()}).then(function(c){render(c);refocus(i,k)})}
  function openCart(){if(!drawer)return;lastFocus=document.activeElement;drawer.hidden=false;shade.hidden=false;drawer.querySelector('[data-cart-close]').focus()}
  function closeCart(){drawer.hidden=true;shade.hidden=true;if(lastFocus)lastFocus.focus()}
  document.querySelectorAll('[data-cart-open]').forEach(function(b){b.onclick=function(){get();openCart()}});
  document.querySelectorAll('[data-cart-close]').forEach(function(b){b.onclick=closeCart});
  document.addEventListener('keydown',function(e){if(!drawer||drawer.hidden)return;if(e.key==='Escape')closeCart();
    if(e.key==='Tab'){var f=[].filter.call(drawer.querySelectorAll('button,a[href],input'),function(x){return !x.disabled});if(!f.length)return;var a=f[0],z=f[f.length-1];
      if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});

  // variant picker
  form=document.querySelector('[data-product-form]');var pj=document.querySelector('[data-product-json]');
  if(form&&pj){var product=JSON.parse(pj.textContent),idEl=form.querySelector('[data-variant-id]'),addBtn=form.querySelector('[data-add]'),label=addBtn.textContent;
    function pick(){var sel=[].map.call(form.querySelectorAll('.sizes'),function(g){var c=g.querySelector('input:checked');return c?c.value:null});
      var v=product.variants.find(function(v){return v.options.every(function(o,i){return sel[i]==null||o===sel[i]})});
      if(!v)return;idEl.value=v.id;var pr=document.querySelector('[data-price]');if(pr)pr.textContent=money(v.price);
      addBtn.disabled=!v.available;addBtn.textContent=v.available?label:'SOLD OUT';
      if(v.featured_media){var m=document.querySelector('.main-photo img');if(m&&v.featured_media.preview_image){m.src=v.featured_media.preview_image.src+'&width=1200';m.removeAttribute('srcset')}}
      if(history.replaceState){var u=new URL(location.href);u.searchParams.set('variant',v.id);history.replaceState(null,'',u)}}
    form.addEventListener('change',pick);
    form.addEventListener('submit',function(e){e.preventDefault();if(addBtn.disabled)return;
      var t=addBtn.innerHTML;addBtn.style.minWidth=addBtn.offsetWidth+'px';addBtn.textContent='> ACCESS GRANTED';addBtn.classList.add('granted');announce('Access granted. Adding to cart.');
      var fd=new FormData(form);
      Promise.all([fetch(root()+'cart/add.js',{method:'POST',headers:{Accept:'application/json'},body:fd}).then(function(r){if(!r.ok)return r.json().then(function(j){throw j});return r.json()}),new Promise(function(r){setTimeout(r,reduce?150:700)})])
        .then(function(){return get()}).then(function(){openCart();announce('Added to cart.')})
        .catch(function(err){announce((err&&err.description)||'Could not add to cart.');alertBox((err&&err.description)||'Could not add to cart.')})
        .finally(function(){addBtn.classList.remove('granted');addBtn.innerHTML=t;addBtn.style.minWidth=''});
    });
  }
  function alertBox(m){var n=form.querySelector('.form-error');if(!n){n=document.createElement('p');n.className='ph form-error';n.setAttribute('role','alert');form.appendChild(n)}n.textContent=m}

  // gallery
  var main=document.querySelector('.main-photo img');
  document.querySelectorAll('[data-thumb]').forEach(function(b,i){if(i===0)b.setAttribute('aria-current','true');
    b.onclick=function(){if(!main)return;main.src=b.dataset.thumb;main.removeAttribute('srcset');main.alt=b.dataset.alt;document.querySelectorAll('[data-thumb]').forEach(function(x){x.removeAttribute('aria-current')});b.setAttribute('aria-current','true')}});
  // menu
  document.querySelectorAll('.menu nav a').forEach(function(a){a.addEventListener('click',function(){var d=a.closest('details');if(d)d.open=false})});
})();
