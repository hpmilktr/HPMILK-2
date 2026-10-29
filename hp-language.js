(function(){'use strict';
/* Position selector under HPmilk brand, never float over the logo. */
function hpPlacePickerUnderLogo(wrap){
 if(!wrap) return;
 var intro=document.querySelector('#hpmilkIntro .intro-content');
 if(intro){intro.appendChild(wrap);wrap.classList.add('hp-intro-picker');return;}
 var anchor=document.querySelector('.hp-language-anchor');
 if(anchor){anchor.appendChild(wrap);return;}
 var subtitle=document.querySelector('header .sub');
 if(subtitle){subtitle.insertAdjacentElement('afterend',wrap);return;}
 var mainTitle=document.querySelector('body > table span[style*="72.0pt"]');
 if(mainTitle){
   var p=mainTitle.closest('p');
   if(p && p.nextElementSibling){p.nextElementSibling.insertAdjacentElement('afterend',wrap);return;}
   if(p){p.insertAdjacentElement('afterend',wrap);return;}
 }
 document.body.insertBefore(wrap, document.body.firstChild);
}
function hpUseIframeHeader(){
 return !!document.querySelector('iframe.top[src*="top.htm"]');
}
function hpWaitForFrameSelector(){
 var frame=document.querySelector('iframe.top[src*="top.htm"]');
 if(!frame) return;
 function ping(){ try{ frame.contentWindow && frame.contentWindow.postMessage({type:'hpmilk-parent-lang',lang:current}, '*'); }catch(e){} }
 if(frame.contentDocument && frame.contentDocument.readyState==='complete') ping();
 frame.addEventListener('load', ping);
}
const LANGS={en:'English',tr:'Türkçe',ar:'العربية',fa:'فارسی'};
const LANG_CODES={en:'EN',tr:'TR',ar:'AR',fa:'FA'};
const DICT={"Home":{"tr":"Ana Sayfa","ar":"الرئيسية","fa":"خانه"},"Products":{"tr":"Ürünler","ar":"المنتجات","fa":"محصولات"},"Shopping Cart":{"tr":"Alışveriş Sepeti","ar":"سلة التسوق","fa":"سبد خرید"},"Contact":{"tr":"İletişim","ar":"اتصل بنا","fa":"تماس"},"Contact Us":{"tr":"Bize Ulaşın","ar":"اتصل بنا","fa":"تماس با ما"},"About us":{"tr":"Hakkımızda","ar":"من نحن","fa":"درباره ما"},"About Us":{"tr":"Hakkımızda","ar":"من نحن","fa":"درباره ما"},"Orders":{"tr":"Siparişler","ar":"الطلبات","fa":"سفارش‌ها"},"ENTER":{"tr":"GİRİŞ","ar":"دخول","fa":"ورود"},"Enter Website":{"tr":"Siteye Gir","ar":"دخول الموقع","fa":"ورود به سایت"},"Welcome to HPmilk 🐄":{"tr":"HPmilk’e Hoş Geldiniz 🐄","ar":"مرحباً بكم في HPmilk 🐄","fa":"به HPmilk خوش آمدید 🐄"},"Place Order":{"tr":"Sipariş Ver","ar":"إرسال الطلب","fa":"ثبت سفارش"},"Add to Cart":{"tr":"Sepete Ekle","ar":"أضف إلى السلة","fa":"افزودن به سبد"},"Continue Shopping":{"tr":"Alışverişe Devam Et","ar":"متابعة التسوق","fa":"ادامه خرید"},"← Continue shopping":{"tr":"← Alışverişe devam et","ar":"← متابعة التسوق","fa":"← ادامه خرید"},"View products":{"tr":"Ürünleri Gör","ar":"عرض المنتجات","fa":"مشاهده محصولات"},"Your cart is empty.":{"tr":"Sepetiniz boş.","ar":"سلة التسوق فارغة.","fa":"سبد خرید شما خالی است."},"🛒 HPmilk Shopping Cart":{"tr":"🛒 HPmilk Alışveriş Sepeti","ar":"🛒 سلة تسوق HPmilk","fa":"🛒 سبد خرید HPmilk"},"Price confirmed by seller":{"tr":"Fiyat satıcı tarafından onaylanır","ar":"يؤكد البائع السعر","fa":"قیمت پس از تأیید فروشنده"},"Complete your details and send your order via WhatsApp or email. Final pricing will be confirmed by the seller.":{"tr":"Bilgilerinizi girerek siparişinizi WhatsApp veya e-posta ile gönderin. Son fiyat satıcı tarafından onaylanacaktır.","ar":"أكمل بياناتك وأرسل طلبك عبر واتساب أو البريد الإلكتروني. سيتم تأكيد السعر النهائي من البائع.","fa":"اطلاعات خود را تکمیل کرده و سفارش را از طریق واتساپ یا ایمیل ارسال کنید. قیمت نهایی با فروشنده هماهنگ می‌شود."},"Full name *":{"tr":"Ad Soyad *","ar":"الاسم الكامل *","fa":"نام و نام خانوادگی *"},"Phone / WhatsApp *":{"tr":"Telefon / WhatsApp *","ar":"الهاتف / واتساب *","fa":"شماره تماس / واتساپ *"},"Email":{"tr":"E-posta","ar":"البريد الإلكتروني","fa":"ایمیل"},"City / Country":{"tr":"Şehir / Ülke","ar":"المدينة / الدولة","fa":"شهر / کشور"},"Address and notes":{"tr":"Adres ve notlar","ar":"العنوان والملاحظات","fa":"آدرس و توضیحات"},"Send order via WhatsApp":{"tr":"Siparişi WhatsApp ile Gönder","ar":"إرسال الطلب عبر واتساب","fa":"ارسال سفارش با واتساپ"},"Send order via email":{"tr":"Siparişi E-posta ile Gönder","ar":"إرسال الطلب عبر البريد الإلكتروني","fa":"ارسال سفارش با ایمیل"},"Price on request":{"tr":"Fiyat sorunuz","ar":"السعر عند الطلب","fa":"قیمت توافقی"},"Remove from cart":{"tr":"Sepetten kaldır","ar":"إزالة من السلة","fa":"حذف از سبد"},"Increase quantity":{"tr":"Adedi artır","ar":"زيادة الكمية","fa":"افزایش تعداد"},"Decrease quantity":{"tr":"Adedi azalt","ar":"تقليل الكمية","fa":"کاهش تعداد"},"Product No.":{"tr":"Ürün No.","ar":"المنتج رقم","fa":"محصول شماره"},"Product No.:":{"tr":"Ürün No.:","ar":"رقم المنتج:","fa":"شماره محصول:"},"🛒 Shopping Cart":{"tr":"🛒 Alışveriş Sepeti","ar":"🛒 سلة التسوق","fa":"🛒 سبد خرید"},"MILKING MACHINES , SPARE PARTS & General Trading":{"tr":"Süt Sağım Makineleri, Yedek Parçalar ve Genel Ticaret","ar":"آلات الحلب وقطع الغيار والتجارة العامة","fa":"دستگاه‌های شیردوشی، قطعات یدکی و تجارت عمومی"},"MILKING MACHINES & SPARE PARTS":{"tr":"SÜT SAĞIM MAKİNELERİ VE YEDEK PARÇALAR","ar":"آلات الحلب وقطع الغيار","fa":"دستگاه‌های شیردوشی و قطعات یدکی"},"MILKING MACHINES · SPARE PARTS · General Trading":{"tr":"SAĞIM MAKİNELERİ · YEDEK PARÇALAR · GENEL TİCARET","ar":"آلات الحلب · قطع الغيار · التجارة العامة","fa":"دستگاه‌های شیردوشی · قطعات یدکی · تجارت عمومی"},"VACUUM PUMPS FOR MILKING MACHINES":{"tr":"SÜT SAĞIM MAKİNELERİ İÇİN VAKUM POMPALARI","ar":"مضخات تفريغ الهواء لآلات الحلب","fa":"پمپ‌های وکیوم دستگاه‌های شیردوشی"},"Our vane pump range goes from 200 litres per min to 3100 litres/min at 50 Kpa.":{"tr":"Paletli pompalarımız 50 kPa basınçta dakikada 200 ila 3100 litre kapasiteye sahiptir.","ar":"تتراوح قدرة مضخاتنا الريشية من 200 إلى 3100 لتر في الدقيقة عند ضغط 50 كيلو باسكال.","fa":"ظرفیت پمپ‌های تیغه‌ای ما در فشار ۵۰ کیلوپاسکال از ۲۰۰ تا ۳۱۰۰ لیتر در دقیقه است."},"We can supply the vacuum units complete with tank or base with or without electric motor or the pump only complete with accessories or just the pump alone.":{"tr":"Vakum ünitelerini tanklı veya tabanlı, elektrik motorlu veya motorsuz; aksesuarlarla birlikte ya da yalnız pompa olarak sağlayabiliriz.","ar":"نوفّر وحدات التفريغ مع الخزان أو القاعدة، بمحرك كهربائي أو دونه، مع الملحقات أو المضخة وحدها.","fa":"واحدهای وکیوم را با مخزن یا پایه، با موتور الکتریکی یا بدون آن، همراه با لوازم جانبی یا به‌صورت پمپ تکی عرضه می‌کنیم."},"We also have a stock of spares and accessories for milking systems.":{"tr":"Sağım sistemleri için yedek parça ve aksesuar stoğumuz da bulunmaktadır.","ar":"لدينا أيضاً مخزون من قطع الغيار والملحقات لأنظمة الحلب.","fa":"همچنین قطعات یدکی و لوازم جانبی سیستم‌های شیردوشی را موجود داریم."},"Your browser does not support MP4 video playback.":{"tr":"Tarayıcınız MP4 video oynatmayı desteklemiyor.","ar":"متصفحك لا يدعم تشغيل فيديو MP4.","fa":"مرورگر شما پخش ویدیوی MP4 را پشتیبانی نمی‌کند."},"launched itself in the milking machine sector in 1983.":{"tr":"1983 yılında süt sağım makineleri sektöründe faaliyete başladı.","ar":"بدأت نشاطها في قطاع آلات الحلب عام 1983.","fa":"فعالیت خود را در صنعت دستگاه‌های شیردوشی در سال ۱۹۸۳ آغاز کرد."},"The best important factor for":{"tr":"En önemli unsur","ar":"أهم عامل لدى","fa":"مهم‌ترین عامل برای"}," . is quality. We can say that quality leads us to the success.":{"tr":" kalitedir. Kalitenin başarıya götürdüğüne inanıyoruz.","ar":" هو الجودة. نؤمن بأن الجودة تقودنا إلى النجاح.","fa":" کیفیت است. باور داریم که کیفیت ما را به موفقیت می‌رساند."},". is quality. We can say that quality leads us to the success.":{"tr":" için kalitedir. Kalitenin başarıya götürdüğüne inanıyoruz.","ar":" هي الجودة. نؤمن بأن الجودة تقودنا إلى النجاح.","fa":" کیفیت است. باور داریم که کیفیت ما را به موفقیت می‌رساند."},"The peevishness of our products is served to your appreciation. Our aim is to give you the best service. Your interests to our company is an indicator":{"tr":"Ürünlerimizi beğeninize sunuyor, size en iyi hizmeti sağlamayı hedefliyoruz. Şirketimize gösterdiğiniz ilgi bizim için değerlidir.","ar":"نقدم منتجاتنا لكم ونسعى إلى توفير أفضل خدمة. اهتمامكم بشركتنا موضع تقديرنا.","fa":"محصولاتمان را به شما ارائه می‌کنیم و هدف ما ارائه بهترین خدمات است. علاقه شما به شرکت برای ما ارزشمند است."},"Thanks for choosing":{"tr":"Tercih ettiğiniz için teşekkürler:","ar":"شكراً لاختياركم","fa":"از انتخاب شما سپاسگزاریم:"},". for solutions leading to success...":{"tr":". Başarıya giden çözümler için...","ar":"، من أجل حلول تقود إلى النجاح...","fa":"، برای راهکارهایی در مسیر موفقیت..."},"manager page":{"tr":"Yönetici sayfası","ar":"صفحة المدير","fa":"صفحه مدیریت"},"For further information fill in the form or contact us at the address below:":{"tr":"Daha fazla bilgi için formu doldurun veya aşağıdaki adresten bizimle iletişime geçin:","ar":"لمزيد من المعلومات يرجى ملء النموذج أو التواصل معنا على العنوان أدناه:","fa":"برای اطلاعات بیشتر فرم را تکمیل کنید یا از طریق نشانی زیر با ما تماس بگیرید:"},"Head Office:":{"tr":"Merkez Ofis:","ar":"المكتب الرئيسي:","fa":"دفتر مرکزی:"},"Name and Surname":{"tr":"Ad Soyad","ar":"الاسم واللقب","fa":"نام و نام خانوادگی"},"Company":{"tr":"Şirket","ar":"الشركة","fa":"شرکت"},"Address":{"tr":"Adres","ar":"العنوان","fa":"نشانی"},"City, Zip Code":{"tr":"Şehir، Posta Kodu","ar":"المدينة، الرمز البريدي","fa":"شهر، کد پستی"},"Telephone":{"tr":"Telefon","ar":"الهاتف","fa":"تلفن"},"Fax":{"tr":"Faks","ar":"فاكس","fa":"فکس"},"e-mail":{"tr":"E-posta","ar":"البريد الإلكتروني","fa":"ایمیل"},"Text":{"tr":"Mesaj","ar":"الرسالة","fa":"پیام"},"Mobile :":{"tr":"Cep telefonu:","ar":"الهاتف المحمول:","fa":"تلفن همراه:"},"Email:":{"tr":"E-posta:","ar":"البريد الإلكتروني:","fa":"ایمیل:"},"جزئیات / سفارش":{"tr":"Detaylar / Sipariş","ar":"التفاصيل / الطلب","fa":"جزئیات / سفارش"},"➕ افزودن محصول":{"tr":"➕ Ürün Ekle","ar":"➕ إضافة منتج","fa":"➕ افزودن محصول"},"به HPmilk خوش آمدید":{"tr":"HPmilk’e hoş geldiniz","ar":"مرحباً بكم في HPmilk","fa":"به HPmilk خوش آمدید"}};

const HP_INTRO={"en": ["HPmilk entered the milking machine industry in 1983.", "Quality is our most important priority. We believe that quality is the foundation of success.", "We present our products to you with the goal of offering the best possible service. Your interest in our company means a great deal to us.", "Thank you for choosing HPmilk. We look forward to supporting your success."], "tr": ["HPmilk, 1983 yılında süt sağım makineleri sektöründe faaliyete başladı.", "En önemli önceliğimiz kalitedir. Kalitenin başarının temeli olduğuna inanıyoruz.", "Ürünlerimizi sizlere sunarken en iyi hizmeti sağlamayı hedefliyoruz. Şirketimize gösterdiğiniz ilgi bizim için çok değerlidir.", "HPmilk’i tercih ettiğiniz için teşekkür ederiz. Başarınızı desteklemekten mutluluk duyarız."], "ar": ["بدأت HPmilk نشاطها في قطاع آلات الحلب عام 1983.", "الجودة هي أولويتنا الأساسية. ونؤمن بأن الجودة أساس النجاح.", "نقدم منتجاتنا بهدف توفير أفضل خدمة ممكنة. إن اهتمامكم بشركتنا يعني لنا الكثير.", "شكراً لاختياركم HPmilk. يسعدنا أن نساهم في نجاحكم."], "fa": ["شرکت HPmilk فعالیت خود را در صنعت دستگاه‌های شیردوشی در سال ۱۹۸۳ آغاز کرد.", "کیفیت مهم‌ترین اولویت ماست و باور داریم که کیفیت، پایه موفقیت است.", "محصولات خود را با هدف ارائه بهترین خدمات عرضه می‌کنیم. اعتماد و توجه شما به شرکت ما بسیار ارزشمند است.", "از انتخاب HPmilk سپاسگزاریم. خوشحالیم که در مسیر موفقیت همراه شما باشیم."]};
const HP_PUMPS={"en": ["VACUUM PUMPS FOR MILKING MACHINES", "Our vane pumps provide a capacity of 200 to 3100 litres per minute at 50 kPa.", "We supply vacuum units with a tank or base, with or without an electric motor, complete with accessories or as a standalone pump.", "We also stock spare parts and accessories for milking systems."], "tr": ["SÜT SAĞIM MAKİNELERİ İÇİN VAKUM POMPALARI", "Paletli vakum pompalarımız 50 kPa basınçta dakikada 200 ila 3100 litre kapasite sunar.", "Vakum ünitelerini tanklı veya tabanlı, elektrik motorlu veya motorsuz; aksesuarlarıyla birlikte veya yalnızca pompa olarak sunuyoruz.", "Sağım sistemleri için yedek parça ve aksesuarlarımız da stoklarımızda mevcuttur."], "ar": ["مضخات تفريغ الهواء لآلات الحلب", "توفر مضخاتنا الريشية قدرة تتراوح من 200 إلى 3100 لتر في الدقيقة عند ضغط 50 كيلو باسكال.", "نوفر وحدات التفريغ مع خزان أو قاعدة، بمحرك كهربائي أو دونه، مع الملحقات أو كمضخة مستقلة.", "نوفر أيضاً قطع الغيار والملحقات لأنظمة الحلب."], "fa": ["پمپ‌های وکیوم دستگاه‌های شیردوشی", "پمپ‌های تیغه‌ای ما در فشار ۵۰ کیلوپاسکال ظرفیتی بین ۲۰۰ تا ۳۱۰۰ لیتر در دقیقه دارند.", "واحدهای وکیوم را با مخزن یا پایه، همراه موتور الکتریکی یا بدون آن، با لوازم جانبی یا به‌صورت پمپ مستقل عرضه می‌کنیم.", "قطعات یدکی و لوازم جانبی سیستم‌های شیردوشی نیز موجود است."]};
let current='en';try{let val=localStorage.getItem('hpmilk_lang');if(LANGS[val])current=val}catch(e){}
window.HPMILKLanguage={get:()=>current,translate:(s)=>translate(s),set:setLanguage};
function translate(s){if(current==='en')return s;const v=DICT[String(s).trim().replace(/\s+/g,' ')];return v&&v[current]||s}
function textNodes(root){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const arr=[];let n;while(n=w.nextNode())arr.push(n);return arr}
function translateImageNavigation(){
 const words={en:['Home','Products','Contact Us'],tr:['Ana Sayfa','Ürünler','İletişim'],ar:['الرئيسية','المنتجات','اتصل بنا'],fa:['خانه','محصولات','تماس با ما']};
 document.querySelectorAll('.hp-top-region a[href], body > table a[href]').forEach(a=>{const href=(a.getAttribute('href')||'').toLowerCase();const i=href.includes('welcome')?0:href.includes('products')?1:href.includes('contacts')?2:-1;
 if(i<0)return;const img=a.querySelector('img');if(!img)return;
 a.setAttribute('aria-label',words[current][i]);img.alt=words[current][i];
 let tag=a.querySelector('.hp-nav-visible-label');if(!tag){tag=document.createElement('span');tag.className='hp-nav-visible-label';a.appendChild(tag)}tag.textContent=words[current][i];
 });
}
function applyBlocks(){translateImageNavigation();
 const intro=document.getElementById('hp-intro-block');
 if(intro){intro.replaceChildren();(HP_INTRO[current]||HP_INTRO.en).forEach(line=>{const p=document.createElement('p');p.textContent=line;intro.appendChild(p)})}
 document.querySelectorAll('[data-hp-product-line]').forEach(el=>{const i=Number(el.getAttribute('data-hp-product-line'));el.textContent=(HP_PUMPS[current]||HP_PUMPS.en)[i]||''});
}
function applyStatic(){applyBlocks();document.documentElement.lang=current;document.documentElement.dir='ltr';document.body.classList.toggle('hp-rtl',current==='fa'||current==='ar');document.querySelectorAll('.hp-translated-block,[data-hp-product-line]').forEach(el=>{el.dir=(current==='fa'||current==='ar')?'rtl':'ltr';el.style.textAlign=(current==='fa'||current==='ar')?'right':'left'});
 for(const node of textNodes(document.body)){let parent=node.parentElement;if(!parent||parent.closest('#hp-language-picker')||/^(SCRIPT|STYLE|TEXTAREA|OPTION|NOSCRIPT)$/.test(parent.tagName)||parent.closest('#hp-intro-block,[data-hp-product-line]')||parent.closest('[data-i18n]')&&document.getElementById('hpmilkIntro'))continue;
 let orig=node.__hpOrig;if(orig===undefined){orig=node.nodeValue;node.__hpOrig=orig}let trimmed=orig.trim();if(!trimmed)continue;let translated=translate(trimmed);node.nodeValue=translated===trimmed?orig:orig.replace(trimmed,translated)}
 for(const el of document.querySelectorAll('input[placeholder],textarea[placeholder],input[type=submit],input[type=button]')){for(const attr of ['placeholder','value']){let v=el.getAttribute(attr);if(v&&DICT[v])el.setAttribute(attr,translate(v))}}
 document.querySelectorAll('#hp-mobile-nav a').forEach((a,i)=>{const labels=['Home','Products','Shopping Cart','Contact','About us'];const span=a.querySelector('span');if(span&&labels[i])span.textContent=translate(labels[i])});
 const cart=document.getElementById('hp-desktop-cart');if(cart){let total=cart.querySelector('.hp-bubble');const n=total?total.textContent:'';cart.textContent=translate('🛒 Shopping Cart')+' (';if(total)cart.appendChild(total);cart.append(')')}
}
function flag(lang){let img=document.createElement('img');let base=location.href.indexOf('_files/top.htm')>-1?'../hp-flags/':'hp-flags/';img.src=base+lang+'.svg';img.width=24;img.height=16;img.alt='';img.className='hp-flag';return img}
function setLanguage(lang){
 if(!LANGS[lang])return;
 // A header inside an iframe must ask the parent to change language too.
 if(window.parent!==window){
   try{window.parent.postMessage({type:'hpmilk-language-choice',lang:lang},'*');return}catch(e){}
 }
 current=lang;
 try{localStorage.setItem('hpmilk_lang',lang)}catch(e){}
 location.reload();
}
window.addEventListener('message',function(event){
 var data=event.data;
 if(!data||data.type!=='hpmilk-language-choice'||!LANGS[data.lang])return;
 // Accept language requests only from our own embedded header frame.
 var headerFrame=document.querySelector('iframe.top[src*="top.htm"]');
 if(headerFrame && event.source===headerFrame.contentWindow) setLanguage(data.lang);
});
function init(){
 if(document.getElementById('hp-language-picker')) return;
 applyStatic();
 if(hpUseIframeHeader()){
   hpWaitForFrameSelector();
   if(document.getElementById('items')) window.dispatchEvent(new Event('hpmilk-language-ready'));
   return;
 }
 const wrap=document.createElement('div');
 wrap.id='hp-language-picker';
 const btn=document.createElement('button');
 btn.type='button';btn.className='hp-current-language';btn.setAttribute('aria-label','Select language');btn.setAttribute('aria-haspopup','true');btn.setAttribute('aria-expanded','false');btn.appendChild(flag(current));btn.title=LANGS[current];
 const menu=document.createElement('div');menu.className='hp-language-menu';menu.hidden=true;
 for(const lang of Object.keys(LANGS)){
   const opt=document.createElement('button');
   opt.type='button';
   opt.className='hp-language-option';
   opt.appendChild(flag(lang));
   const code=document.createElement('span');
   code.className='hp-lang-code';
   code.textContent=LANG_CODES[lang]||lang.toUpperCase();
   opt.appendChild(code);
   opt.title=LANGS[lang];
   opt.setAttribute('aria-label', LANGS[lang]);
   if(lang===current) opt.setAttribute('aria-current','true');
   opt.onclick=()=>setLanguage(lang);
   menu.appendChild(opt)
 }
 btn.onclick=()=>{menu.hidden=!menu.hidden;btn.setAttribute('aria-expanded',String(!menu.hidden))};
 document.addEventListener('click',e=>{if(!wrap.contains(e.target)){menu.hidden=true;btn.setAttribute('aria-expanded','false')}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.hidden=true;btn.setAttribute('aria-expanded','false')}});
 wrap.append(btn,menu); hpPlacePickerUnderLogo(wrap);
 if(document.getElementById('items')) window.dispatchEvent(new Event('hpmilk-language-ready'));
}
if(window.top&&window.top!==window){
 window.addEventListener('message', function(ev){
   if(ev&&ev.data&&ev.data.type==='hpmilk-parent-lang'&&LANGS[ev.data.lang]){
     current=ev.data.lang;
     try{localStorage.setItem('hpmilk_lang',current)}catch(e){}
     if(!document.getElementById('hp-language-picker')) init(); else applyStatic();
   }
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();