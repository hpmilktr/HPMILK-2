(function(){
'use strict';
var script=document.currentScript;
var prefix=(script&&script.src?script.src.replace(/hp-shop\.js(?:\?.*)?$/,''):'');
var cartURL=prefix+'cart.html';
var key='hpmilk_order_cart_v1';
function read(){try{return JSON.parse(localStorage.getItem(key)||'{}')||{}}catch(e){return {}}}
function count(){return Object.values(read()).reduce(function(n,p){return n+(Number(p&&p.qty)||0)},0)}
var svg={
home:'<path d="m3 10 9-7 9 7v11H3z"/><path d="M9 21v-7h6v7"/>',
products:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l3 14h12l3-10H6"/>',
contact:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.1 10a16 16 0 0 0 6.9 6.9l1.7-1.9a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2z"/>',
info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>'
};
function icon(name){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+svg[name]+'</svg>'}
function lang(){try{return localStorage.getItem('hpmilk_lang')||'en'}catch(e){return 'en'}}
function word(key){var d={home:{en:'Home',tr:'Ana Sayfa',ar:'الرئيسية',fa:'خانه'},products:{en:'Products',tr:'Ürünler',ar:'المنتجات',fa:'محصولات'},cart:{en:'Shopping Cart',tr:'Alışveriş Sepeti',ar:'سلة التسوق',fa:'سبد خرید'},contact:{en:'Contact',tr:'İletişim',ar:'اتصل بنا',fa:'تماس'},info:{en:'About us',tr:'Hakkımızda',ar:'من نحن',fa:'درباره ما'}};return (d[key]||{})[lang()]||(d[key]||{}).en||key}
function update(){document.querySelectorAll('.hp-bubble').forEach(function(el){var n=count();el.textContent=n;el.style.display=n?'block':'none';if(el.parentElement&&el.parentElement.id==='hp-desktop-cart'){el.nextSibling.textContent=n?')':'';el.previousSibling.textContent=('🛒 '+word('cart'))+(n?' (':'')}})}
function init(){
if(document.getElementById('hp-mobile-nav'))return;
var nav=document.createElement('nav');nav.id='hp-mobile-nav';nav.setAttribute('aria-label','منوی موبایل');
var items=[['home',word('home'),'index.htm'],['products',word('products'),'products.htm'],['cart',word('cart'),'cart.html'],['contact',word('contact'),'CONTACTS.htm'],['info',word('info'),'welcome.htm']];
items.forEach(function(item){var a=document.createElement('a');a.href=prefix+item[2];a.innerHTML=icon(item[0])+'<span>'+item[1]+'</span>'+(item[0]==='cart'?'<span class="hp-bubble"></span>':'');if(location.pathname.toLowerCase().endsWith('/'+item[2].toLowerCase()))a.className='hp-active';nav.appendChild(a)});
document.body.appendChild(nav);
var desktop=document.createElement('a');desktop.id='hp-desktop-cart';desktop.href=cartURL;desktop.dir='ltr';desktop.dir='ltr';desktop.textContent='🛒 '+word('cart')+' (';var badge=document.createElement('span');badge.className='hp-bubble';desktop.appendChild(badge);desktop.append(')');if(!/\/cart\.html$/i.test(location.pathname))document.body.appendChild(desktop);
update();
document.addEventListener('click',function(e){
 var b=e.target.closest('.hp-gallery-cart,#hp-detail-cart');
 if(b){e.preventDefault();e.stopImmediatePropagation();location.href=cartURL;}
},true);
window.addEventListener('storage',update);
window.addEventListener('hpmilk-cart-changed',update);
document.addEventListener('hp-gallery-add',function(){setTimeout(update,80)});
document.addEventListener('click',function(e){if(e.target.closest('#hp-detail-add,.hp-gallery-add,.hp-add-button'))setTimeout(update,120)},true);
setInterval(update,2500);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();

// HPmilk floating quick-contact button: never covers the fixed bottom navigation or quantity bar.
function addQuickContact(){
 if(document.querySelector('.hp-quick-contact'))return;
 var path=location.pathname.toLowerCase();
 if(/(?:^|\/)(?:contacts\.htm|index\.htm|index\.html)$/.test(path))return;
 var el=document.createElement('div');el.className='hp-quick-contact';
 if(/mobile_milking_machines/i.test(path))el.classList.add('hp-quick-on-detail');
 var trigger=document.createElement('button');trigger.type='button';trigger.className='hp-quick-trigger';
 trigger.setAttribute('aria-label','Contact options');trigger.setAttribute('aria-expanded','false');
 trigger.innerHTML='<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M10 26v-3c0-9 6-15 14-15s14 6 14 15v3"/><rect x="7" y="23" width="8" height="14" rx="4"/><rect x="33" y="23" width="8" height="14" rx="4"/><path d="M38 35c0 5-5 8-12 8h-3"/><rect x="19" y="40" width="8" height="5" rx="2.5"/></svg>';
 var choices=document.createElement('div');choices.className='hp-quick-choices';choices.hidden=true;
 [['phone.svg','tel:+905316216031','Phone'],['email.svg','mailto:hpmilk.tr@gmail.com','Email'],['whatsapp.svg','https://wa.me/905316216031','WhatsApp']].forEach(function(d){
  var a=document.createElement('a');a.href=d[1];a.setAttribute('aria-label',d[2]);a.title=d[2];
  if(d[2]==='WhatsApp'){a.target='_blank';a.rel='noopener noreferrer'}
  var im=document.createElement('img');im.src=prefix+'hp-contact-icons/'+d[0];im.alt=d[2];a.appendChild(im);choices.appendChild(a);
 });
 function close(){choices.hidden=true;trigger.setAttribute('aria-expanded','false')}
 trigger.addEventListener('click',function(){var opening=choices.hidden;choices.hidden=!opening;trigger.setAttribute('aria-expanded',opening?'true':'false')});
 document.addEventListener('click',function(e){if(!el.contains(e.target))close()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
 el.appendChild(choices);el.appendChild(trigger);document.body.appendChild(el);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addQuickContact);
else addQuickContact();
})();
