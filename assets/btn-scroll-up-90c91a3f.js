import{a as S,i as Te,g as Ke,b as Me,c as Fe,d as ce,s as Qe,S as y,e as Pe,f as Oe,h as Ne,j as je,k as He}from"./vendor-401edee2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const n={mainCategoriesList:document.querySelector(".main-categories-list"),categoryTitle:document.querySelector(".js-category-title"),categoryBox:"",list:document.querySelector(".content"),topOfCatecory:"",buttonSeeMore:"",shoppingList:document.querySelector(".js-shopping-list"),emptyPage:document.querySelector(".js-empty-page"),body:document.querySelector("body"),toggleBtn:document.querySelector(".tgl-btn"),toggleIcon:document.querySelector(".tgl-btn__icon"),bookPopup:"",buttonAddToList:"",paginationContainer:document.querySelector(".pagination"),paginationNumbers:document.getElementById("pagination-numbers"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),toEnd:document.getElementById("to-end-button"),toStart:document.getElementById("to-start-button")};function ze(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}function de(e){localStorage.setItem("darkmode",e)}function _e(){const e=localStorage.getItem("darkmode");e?e=="true"?(n.body.classList.add("darkmode"),n.toggleIcon.classList.add("fa-moon")):e=="false"&&n.toggleIcon.classList.add("fa-sun"):(de(!1),n.toggleIcon.classList.add("fa-sun"))}_e();n.toggleBtn.addEventListener("click",function(){n.body.classList.toggle("darkmode"),n.toggleIcon.classList.add("animated"),de(n.body.classList.contains("darkmode")),n.body.classList.contains("darkmode")?(n.toggleIcon.classList.remove("fa-sun"),n.toggleIcon.classList.add("fa-moon")):(n.toggleIcon.classList.remove("fa-moon"),n.toggleIcon.classList.add("fa-sun")),setTimeout(function(){n.toggleIcon.classList.remove("animated")},500)});S.defaults.baseURL="https://books-backend.p.goit.global/books/";async function ue(){return await S.get("category-list").then(t=>t.data)}ue();async function ge(){return await S.get("top-books").then(t=>t.data)}ge();async function pe(e){return await S.get(`category?category=${e}`).then(s=>s.data)}pe("Childrens Middle Grade Hardcover");async function me(e){return await S.get(`${e}`).then(s=>s.data)}me("643282b1e85766588626a0dc");const Re={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},he=Te(Re),fe=Ke(he),f=Me(he),Ve=async(e,t)=>Pe(f,e,t),We=async e=>{const t=ce(fe,"users",f.currentUser.uid);return Oe(t,{name:e})},Je=async(e,t)=>Ne(f,e,t),Xe=async()=>(await f._initializationPromise,f.currentUser!==null),Ze=async()=>{const e=f.currentUser;return je(e)},ye=async()=>Fe(ce(fe,"users",f.currentUser.uid));function ve(){Qe(f).then(()=>{y.fire({position:"center",icon:"success",title:"Seen later!",showConfirmButton:!1,timer:1500}),setTimeout(()=>{window.location.href="index.html"},1500)})}const U=document.querySelector(".auth-modal"),V=document.querySelector(".auth-close-btn");document.querySelector(".auth-container");const b=document.querySelector(".auth-toggler-sign-up"),A=document.querySelector(".auth-toggler-sign-in"),T=document.querySelector("#auth-name"),W=document.querySelector("#auth-email"),J=document.querySelector("#auth-password"),L=document.querySelector(".auth-sign-up"),k=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function De(){function e(){V.removeEventListener("click",t),document.removeEventListener("keydown",s),b.removeEventListener("click",o),A.removeEventListener("click",i),k.removeEventListener("click",w),L.removeEventListener("click",x)}function t(){U.classList.add("visually-hidden"),e()}V.addEventListener("click",t);const s=r=>{r.key=="Escape"&&(U.classList.add("visually-hidden"),e())};document.addEventListener("keydown",s);const o=()=>{A.classList.remove("auth-toggler-active"),b.classList.add("auth-toggler-active"),T.classList.remove("visually-hidden"),L.classList.remove("visually-hidden"),k.classList.add("visually-hidden")};b.addEventListener("click",o);const i=()=>{b.classList.remove("auth-toggler-active"),A.classList.add("auth-toggler-active"),T.classList.add("visually-hidden"),L.classList.add("visually-hidden"),k.classList.remove("visually-hidden")};A.addEventListener("click",i);function a(r){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(r).toLowerCase())}const u=async(r,c)=>{Je(r,c).then(()=>{ye().then(l=>{O(l.data().name),U.classList.add("visually-hidden"),e(),location.reload()}).catch(l=>{alert(`Get user name error: ${l.code}`)})}).catch(l=>{alert(`Authorization error: ${l.code}`)})},w=()=>{const r=W.value.trim(),c=J.value.trim();a(r)?c.length>=5?u(r,c):y.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):y.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};k.addEventListener("click",w);const B=async(r,c,l)=>{Ve(r,c).then(()=>{We(l).then(()=>{O(l),U.classList.add("visually-hidden"),e(),location.reload()}).catch(v=>{alert(`Create account error: ${v.code}`),Ze().then(()=>{}).catch($=>{alert(`Create account error: ${$.code}`)})})}).catch(v=>{alert(`Create account error: ${v.code}`)})},x=()=>{const r=W.value.trim(),c=J.value.trim(),l=T.value.trim();a(r)?c.length>=5?l.length>0&&B(r,c,l):y.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):y.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};L.addEventListener("click",x)}function Ge(){K.classList.remove("visually-hidden"),M.classList.add("visually-hidden"),b.classList.remove(".auth-toggler-active"),A.classList.add(".auth-toggler-active"),T.classList.add("visually-hidden"),L.classList.add("visually-hidden"),k.classList.remove("visually-hidden")}let X=document.getElementById("auth-password"),K=document.querySelector(".locked-pass-icon"),M=document.querySelector(".opened-pass-icon"),Q=!1;function be(){Q=!Q,Q?(X.type="text",K.classList.add("visually-hidden"),M.classList.remove("visually-hidden")):(X.type="password",K.classList.remove("visually-hidden"),M.classList.add("visually-hidden"))}K.addEventListener("click",be);M.addEventListener("click",be);document.addEventListener("DOMContentLoaded",function(){let e=window.location.href;document.querySelectorAll(".nav-item").forEach(function(s){s.querySelector("a").href===e&&s.classList.add("active-page")}),nt().then(s=>{let o=document.querySelector(".menu-auth-icon use"),i=document.querySelector(".auth-link"),a=document.querySelector(".sign-out"),u=document.querySelector(".sign-up");s?(o.setAttribute("href","/images/header/header-defs.svg#icon-fi-ss-caret-down-1"),i.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),u.classList.add("visually-hidden")):(o.setAttribute("href","/images/header/header-defs.svg#icon-arrow-narrow-right-1"),i.classList.add("visually-hidden"),a.classList.add("visually-hidden"),u.classList.remove("visually-hidden"))})});const Ye=document.querySelector(".sign-up"),et=document.querySelector(".auth-modal"),tt=document.querySelector(".user-signed"),st=document.querySelector(".menu-auth-logo"),ot=document.querySelector(".sign-out"),Ae=document.querySelector(".js-logout");async function nt(){const e=await Xe();return e&&ye().then(t=>{O(t.data().name)}),e}Ye.addEventListener("click",()=>{et.classList.remove("visually-hidden"),Ge(),De()});ot.addEventListener("click",()=>{Ae.classList.remove("visually-hidden")});Ae.addEventListener("click",()=>{ve()});const O=e=>{tt.textContent=e,st.classList.remove("visually-hidden")},it=document.querySelector(".nav-mobile-menu"),Z=document.querySelector(".burger"),N=document.querySelector(".close-burger");N.classList.add("visually-hidden");let P=!1;it.addEventListener("click",at);function at(){P=!P,P?(N.classList.remove("visually-hidden"),Z.classList.add("visually-hidden"),rt()):(N.classList.add("visually-hidden"),Z.classList.remove("visually-hidden"),lt())}function rt(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню открыто"),e.style.display="block"}function lt(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню закрыто"),e.style.display="none"}const ct=document.getElementById("open-mobile-menu"),Le=document.querySelector(".js-mobile-menu"),dt=document.querySelector(".button-home"),ut=document.querySelector(".button-shopping-list"),gt=document.querySelector(".button-log-out");ct.addEventListener("click",pt);dt.addEventListener("click",mt);ut.addEventListener("click",ht);gt.addEventListener("click",ft);function pt(e){Le.style.display="block"}function mt(e){window.location.href="/index.html",Le.style.display="none"}function ht(e){window.location.href="shopping-list.html"}function ft(e){ve(),window.location.href="/index.html"}console.log("el",n);const ke="booksList";function H(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".js-book-on-click");console.log(t);const s=t.dataset.id;console.log("bookId",s),me(s).then(o=>{const{book_image:i,title:a,author:u,description:w,buy_links:B}=o,x=B[0].url,r=B[1].url,c=z();console.log("localStorage ",c);let l;c.length===0||!c.find(qe=>qe._id===s)?l="Add to shopping list":l="Remove from the shopping list";const v=vt(i,a,u,w,x,r,l),$=He.create(`
    <div class="popup-modal">${v}</div>    
`);$.show(),n.buttonAddToList=document.querySelector(".popup-button"),n.buttonAddToList.addEventListener("click",bt.bind(o)),document.addEventListener("keydown",Se.bind($))}).catch(o=>{alert(`Error: ${o}`)}).finally(()=>{})}function yt(e){const t=z();t.push(e),Ce(t)}function z(){try{const e=localStorage.getItem(ke);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function Ce(e){localStorage.setItem(ke,JSON.stringify(e))}function vt(e,t,s,o,i,a,u){return`
    <div class="popup-info">
      <div class="popup-cover">
        <img class="popup-img" src="${e}" alt="${t}" />
      </div>
      <div class="popup-about">
        <h2 class="popup-title">${t}</h2>
        <p class="popup-author">${s}</p>
        <p class="popup-descr">${o}</p>
        <ul class="popup-store-list">
          <li class="popup-store popup-store-amazon">
            <a href="${i}"
            target="_blank"
              rel="noopener noreferrer">
            <img src="../images/book-popup/amazon.svg" alt="" />
            </a>
          </li>
          <li class="popup-store popup-store-apple">
            <a href="${a}"
            target="_blank"
              rel="noopener noreferrer">
            <img src="../images/book-popup/appleBooks.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <button class="popup-button">${u}</button>
    `}const Ee=document.querySelector(".aaa");console.log(Ee);Ee.addEventListener("click",H);function bt(){const e=this;console.log(e),n.buttonAddToList.textContent==="Add to shopping list"?(yt(e),n.buttonAddToList.textContent="Remove from the shopping list"):(At(e),n.buttonAddToList.textContent="Add to shopping list")}function At({_id:e}){console.log("in remove",e);const s=z().filter(o=>String(o._id)!==e);Ce(s)}function Se(e){e.key==="Escape"&&(this.close(),document.removeEventListener("keydown",Se))}function F(){document.querySelector(".loader-overlay").style.display="block"}function C(){document.querySelector(".loader-overlay").style.display="none"}async function we(e){try{F();const t=await pe(e),s=kt(t),o=Lt(e);n.list.innerHTML=`<h1 class="selected-category-title js-category-title">${o}</h1><ul class="selected-category-list js-category-box">`+s+"</ul>",n.categoryBox=document.querySelector(".js-category-box"),n.categoryBox.addEventListener("click",H),C()}catch(t){console.log(t),y.fire({title:"Error!",text:"Something went wrong! Try reload the page.",confirmButtonText:"OK",imageUrl:"./images/header/sad.svg",imageWidth:40})}}function Lt(e){const t=e.split(" "),s=Math.ceil(t.length/2),o=t.slice(0,s).join(" "),i=t.slice(s).join(" ");return`
        ${o} <span class="second-half">${i}</span>
    `}function kt(e){return e.map(({author:t,title:s,book_image:o,_id:i})=>`<li class="card-wrapper  js-book-on-click" data-id="${i}">
                 <div class="selected-category-img-box">
                   <img class="selected-category-img" src="${o}" alt="${s}">
                   <div class="selected-category-overlay">
                   <p class="selected-category-overlay-text">quick view</p>
                   </div>
                 </div>
                 <h2 class="selected-category-book-title">${s}</h2>
                 <p class="selected-category-book-author">${t}</p>
                </li>
   `).join("")}Be();function Be(){F(),ge().then(e=>{const t=e.map(s=>`
      <div>
        <h3 class="top-title">${s.list_name}</h3>
        <div class="swiper">
          <ul class="list-item swiper-wrapper">
            ${s.books.slice(0,5).map(o=>`
              <li class="li-top js-book-on-click swiper-slide" data-id="${o._id}">
               <div class="card-container">
          <div class="card">
            <img class="img-top" src="${o.book_image||"./images/shopping-list-sec/plug_x1.png"}"
     srcset="${o.book_image||"./images/shopping-list-sec/plug_x1.png"} 1x, 
             ${o.book_image||"./images/shopping-list-sec/plug_x2.png"} 2x"  alt="Зображення відсутнє" />

            <div class="overlay">
               <p class="quick-view">quick view</p>
             </div>
          </div>
       </div>
                <p class="top-bookTitle">${o.title}</p>
                <p class="top-bookAuthor">${o.author}</p>
              </li>`).join("")}
          </ul>
        </div>
      </div>
        <div class="top-button">
          <button class="top-bth top-bth-js" data-category="${s.list_name}" type="submit">see more</button>
        </div>
      `).join("");n.list.innerHTML='<h1 class="top-title-boks">Best Sellers <span class="top-title-span">Books</span></h1><div class="list-top" id="list">'+t+"</div>",n.topOfCatecory=document.querySelectorAll(".list-item"),n.topOfCatecory.forEach(s=>s.addEventListener("click",H)),n.buttonSeeMore=document.querySelectorAll(".top-bth-js"),n.buttonSeeMore.forEach(s=>{s.addEventListener("click",Ct)})}).catch(e=>{console.log("Помилка отримання або обробки даних:",e)}).finally(()=>{C()})}function Ct(e){const t=e.target.dataset.category.trim();we(t)}(async()=>{try{if(document.getElementById("index")===null)return;F();const s=(await ue()).map(o=>o.list_name).sort().map(o=>`<li class="main-categories-list-item">${o}</li>`).join("");n.mainCategoriesList.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+s,C(),n.mainCategoriesList.addEventListener("click",Et)}catch(e){console.log("An error:",e),C()}})();async function Et(e){if(e.target.classList.contains("main-categories-list-item")){for(const t of n.mainCategoriesList.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active");try{F(),e.target.textContent.trim()==="All categories"?Be():we(e.target.textContent),C()}catch(t){console.log("An error occurred:",t)}}}const xe=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}],D="/it-frogs-tp-02/assets/save-children@1x-ae1f71a1.png",St="/it-frogs-tp-02/assets/save-children@2x-a5970846.png",G="/it-frogs-tp-02/assets/hope@1x-89afa445.png",wt="/it-frogs-tp-02/assets/hope@2x-c63c8129.png",Y="/it-frogs-tp-02/assets/medical-corps@1x-0fc6fb91.png",Bt="/it-frogs-tp-02/assets/medical-corps@2x-852a0b2c.png",ee="/it-frogs-tp-02/assets/razom@1x-df85ab01.png",xt="/it-frogs-tp-02/assets/razom@2x-3d4379f2.png",te="/it-frogs-tp-02/assets/against-hunger@1x-f8c98194.png",$t="/it-frogs-tp-02/assets/against-hunger@2x-99712bb9.png",se="/it-frogs-tp-02/assets/prytula@1x-407ac924.png",Ut="/it-frogs-tp-02/assets/prytula@2x-3f26d508.png",oe="/it-frogs-tp-02/assets/sans-frontiers@1x-f5bbe023.png",It="/it-frogs-tp-02/assets/sans-frontiers@2x-b7210163.png",ne="/it-frogs-tp-02/assets/world-vision@1x-0a766ac0.png",qt="/it-frogs-tp-02/assets/world-vision@2x-23b82077.png",ie="/it-frogs-tp-02/assets/united24@1x-d59f6980.png",Tt="/it-frogs-tp-02/assets/united24@2x-32f158d4.png";ze();function Kt(e){return e.map(({id:t,title:s,url:o})=>`
        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${D}" alt="${s}" srcset="${D} 1x, ${St} 2x" height="32">
            </a>
        </li>
                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${G}" alt="${s}" srcset="${G} 1x, ${wt} 2x" height="32">
            </a>
        </li>
                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${Y}" alt="${s}" srcset="${Y} 1x, ${Bt} 2x" height="32">
            </a>
        </li>
                                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ee}" alt="${s}" srcset="${ee} 1x, ${xt} 2x" height="32">
            </a>
        </li>
                                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${te}" alt="${s}" srcset="${te} 1x, ${$t} 2x" height="32">
            </a>
        </li>
                                                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${se}" alt="${s}" srcset="${se} 1x, ${Ut} 2x" height="32">
            </a>
        </li>
                                                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${oe}" alt="${s}" srcset="${oe} 1x, ${It} 2x" height="32">
            </a>
        </li>
                                                                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ne}" alt="${s}" srcset="${ne} 1x, ${qt} 2x" height="32">
            </a>
        </li>
                                                                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ie}" alt="${s}" srcset="${ie} 1x, ${Tt} 2x" height="32">
            </a>
        </li>
        `).join("")}const E=document.querySelector(".js-suport-list"),_=document.querySelector(".support-arrow-down"),R=document.querySelector(".support-arrow-up");_.addEventListener("click",Mt);R.addEventListener("click",Ft);let ae=0;xe.forEach(e=>{e.id=ae+1,ae+=1});E.insertAdjacentHTML("afterbegin",Kt(xe));function Mt(){_.classList.toggle("visually-hidden"),R.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)E.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)E.children[e].classList.remove("visually-hidden")}function Ft(){_.classList.toggle("visually-hidden"),R.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)E.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)E.children[e].classList.toggle("visually-hidden")}const re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAFKCAMAAAAg1OMbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAB1UExURUdwTP///////////////////////////////////////////////08u6GVI6+nl/L2w9tPL+Vo76vTy/pyJ8t7Y+3BV7GVI6si++Hti7qeW872x9qeX86eX9KeW9JF88YZv75F88Hti7Vo76bKk9b2x93BV7RH3XXgAAAAMdFJOUwDPkI/vn2DfIBAwoEAiyPgAAANgSURBVHja7dpRc6IwFIbhoIhgQ2IIWkXbuu3u/v+fuChWK4ru1XaT836XHmbk4ZxgZoxSpxTZJEl1NEmTSVao6+TjiJCnTPIesxjrSDO+6Go+1dFm+qWps4idrXQmoZ9fe1pE7myl3Tod6+gzPgyuFpD98E4kQEftCpXg1GmhMhFQncmY3HYvqBIZ0ESlMqCp0kICFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgX6P8Q6GVBr5iKg1pQioK1TBHTvlAD1y1IEtHMKgO5KGdC3Uga0LqOB2oVzzg4UX8oYoN7VO/MJqdaNu+MMF+rduir72c2HnEeoCw3qX6+Vh5ja3nQeoca82pCgQ8xDPim/yhvQfT0c6Et5N6ZrejkALZtgoObS8Nzvb/c2HoR+BAM93f17Pbf+0L7Fql7+LbQMDPr+0/d+UTcmRqgZHmqgQIECBQoUKFCgQNushEAbLQPaaBnQRsuANloGtNEyoBstA7rRIqCV0yKg1UKLgPadsUKN1SKg1844oTecUUK91TKgWgMNEur3ZzWc80OQR/UQoN7V53MM1bp2PcijeiDQj7er//er40eHi9yDejDQO2kvmf++X48EOjePHkQc0PXjjocIfW5zj3VdDw+6rFfH/c/FYY1H9WCg3WhW294mz/64WJqD9WUw0EV7w2bjb1Q250OQ26F6ZYOBartyfqC07Zzbofpq7nU40LsPoW3acvHPv/Y7TmDXtdcioN8SoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKVCg0leFMVSIDmqgnGdCJymRAM1XIWKSFUiMZk6tULgGat1AJLR3tnaqYxu6cqi555NJpfoSqWdTS6UydEnNPz/08rNNo30ijQl0mj3EvmI5ydZ0ie0oi2ialyST70s0/K7wJ8xAxTMcAAAAASUVORK5CYII=",Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAClCAMAAAC6JimfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABpUExURUdwTP///////////////////////////////////////08u6GVI6+nl/Fo76vTy/tPL+ZyJ8oZv797Y+5F88b2x9r2w9rKj9XBV7KeW86eW9Mi++LKk9aeX83ti7nti7b2x96eX9Fo76TlS1NEAAAAKdFJOUwAgn6CPQN/PEJCpRugbAAABZElEQVR42u3cuXLCMBSFYZl41eqNPQkk7/+QQQYG4xpdUvyn8mn0zR0XkhopdUmRl1ok1SpT19S5FkxeT2alRVNFNdfCyZXKtHgKtZJHG1XJo6XSbwgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKChoevTs5NHByKODl0edN+KosyY5Omy6cdxvhyczKeo6b26xo3uYET24NOiPecqodbiaEbXmkASNy/u+2++70zTxZVAzQ00i9Le9f6+9GGofxYKCvhq1QR61ToujkymMXk1ZdBe0OHo3JdFT0OJoWPRkaHAuzJFlfz267aed1H9vpq0tLHqiTXyecPBPPSXq75Rf9CToZfHdVxt/YPt5Oxz5WbdJ0GPfPso6MvPeHwUO26HrAvdTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0H+ClvJmpRp5dKUKeTRT8qM273ofSdWiszb17QGq7ENo2rIpovcHAh3vUzxHm2MAAAAASUVORK5CYII=",Pt="/it-frogs-tp-02/assets/sprite-41fa8584.svg",Ot="/it-frogs-tp-02/assets/amazon-ae27b443.svg",Nt="/it-frogs-tp-02/assets/appleBooks-c1ce7981.svg",m=Ht();let h=$e(),p=Math.ceil(m.length/h),d;window.addEventListener("load",()=>{document.getElementById("shopping")!==null&&(g(1),n.prevButton.addEventListener("click",()=>{g(d-1)}),n.nextButton.addEventListener("click",()=>{g(d+1)}),n.toEnd.addEventListener("click",()=>{g(p)}),n.toStart.addEventListener("click",()=>{g(1)}),document.getElementById("pagination-numbers").addEventListener("click",jt))});function jt(e){const t=e.target;if(t.classList.contains("pagination-page-number")){const s=Number(t.getAttribute("page-index"));g(s)}}function Ht(){const e=JSON.parse(localStorage.getItem("booksList"));return e||[]}function $e(){return window.innerWidth<=767?4:3}function zt(){return window.innerWidth<=767?2:3}function _t(e,t){return m?m.slice(e,t):[]}function Rt(e){const t=document.createElement("button");t.classList.add("pagination-page-number"),t.classList.add("pagination-number"),t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),n.paginationNumbers.appendChild(t)}function le(e,t){for(let s=e;s<=t;s++)Rt(s)}function Vt(){d===1?(I(n.prevButton),I(n.toStart)):(q(n.prevButton),q(n.toStart)),p===d?(I(n.nextButton),I(n.toEnd)):(q(n.nextButton),q(n.toEnd))}function I(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function q(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}window.addEventListener("resize",()=>{h=$e(),g(d)});function g(e){if(document.getElementById("shopping")===null)return;d=e,Ue(),Vt();const t=(e-1)*h,s=e*h,o=_t(t,s);o.length!=0&&(n.shoppingList.innerHTML="",n.shoppingList.insertAdjacentHTML("afterbegin",Wt(o)),n.shoppingList.addEventListener("click",Jt)),p===1&&(n.paginationContainer.style.display="none"),m.length===0?(n.paginationContainer.classList.add("hidden"),n.emptyPage.classList.remove("hidden")):n.paginationContainer.classList.remove("hidden"),Ie()}function Ue(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("active")})}function Ie(){const e=zt();if(n.paginationNumbers.innerHTML="",p=Math.ceil(m.length/h),d>p&&g(p),p<=e)le(1,p);else{const t=Math.max(d-Math.floor(e/2),1),s=Math.min(t+e-1,p);if(t>1){const o=document.createElement("button");o.className="pagination-number",o.textContent="...",o.addEventListener("click",()=>{g(t-1)}),n.paginationNumbers.appendChild(o)}if(le(t,s),s<p){const o=document.createElement("button");o.className="pagination-number",o.textContent="...",o.addEventListener("click",()=>{g(d+1)}),n.paginationNumbers.appendChild(o)}}Ue()}function Wt(e){return e.map(s=>`
            <li class="shopping-book-card" data-book-id="${s._id}">
                <div class="image-thumb">
                <picture>
                  <source srcset="${s.book_image}" type="image/jpg">
                  <img class="shopping-book-cover" srcset="${re} 2x, ${Qt} 1x" src="${re}" alt="plug">
                </picture>
                </div>
                <div class="card-info">
                    <h3 class="shopping-book-title">${s.title}</h3>
                    <p class="shopping-book-category">${s.list_name}</p>
                    <p class="shopping-book-description">${s.description}</p>
                    <p class="shopping-book-author">${s.author}</p>
                </div>
                <button type="button" class="delete-btn js-delete-book">
                    <svg class="delete-svg" width="16" height="16">
                        <use href="${Pt}#trash"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${s.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="${Ot}" width="32" height="11"/>
                  </a>
                  <a href="${s.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="${Nt}" width="16" height="16"/>
                  </a>
                </div>
            </li>
`).join("")}function Jt(e){const t=e.target.closest(".js-delete-book");if(!t)return;const s=t.closest(".shopping-book-card"),o=s.dataset.bookId,i=m.findIndex(a=>a._id===o);i!=-1&&(m.splice(i,1),localStorage.setItem("booksList",JSON.stringify(m)),s.remove(),h-m.length%h===h&&d>1&&g(d-1),g(d),Ie())}const j=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?j.classList.add("show"):j.classList.remove("show")});j.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=btn-scroll-up-90c91a3f.js.map
