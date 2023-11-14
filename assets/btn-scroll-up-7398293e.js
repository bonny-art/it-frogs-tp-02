import{a as w,i as Ke,g as Fe,b as Qe,c as Pe,d as ce,s as Oe,S as y,e as Ne,f as je,h as He,j as _e,k as ze}from"./vendor-401edee2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const n={mainCategoriesList:document.querySelector(".main-categories-list"),categoryTitle:document.querySelector(".js-category-title"),categoryBox:"",list:document.querySelector(".content"),topOfCatecory:"",buttonSeeMore:"",shoppingList:document.querySelector(".js-shopping-list"),emptyPage:document.querySelector(".js-empty-page"),body:document.querySelector("body"),toggleBtn:document.querySelector(".tgl-btn"),toggleIcon:document.querySelector(".tgl-btn__icon"),bookPopup:"",buttonAddToList:"",closeModalButton:"",paginationContainer:document.querySelector(".pagination"),paginationNumbers:document.getElementById("pagination-numbers"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),toEnd:document.getElementById("to-end-button"),toStart:document.getElementById("to-start-button")};function Re(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}function de(e){localStorage.setItem("darkmode",e)}function Ve(){const e=localStorage.getItem("darkmode");e?e=="true"?(n.body.classList.add("darkmode"),n.toggleIcon.classList.add("fa-moon")):e=="false"&&n.toggleIcon.classList.add("fa-sun"):(de(!1),n.toggleIcon.classList.add("fa-sun"))}Ve();n.toggleBtn.addEventListener("click",function(){n.body.classList.toggle("darkmode"),n.toggleIcon.classList.add("animated"),de(n.body.classList.contains("darkmode")),n.body.classList.contains("darkmode")?(n.toggleIcon.classList.remove("fa-sun"),n.toggleIcon.classList.add("fa-moon")):(n.toggleIcon.classList.remove("fa-moon"),n.toggleIcon.classList.add("fa-sun")),setTimeout(function(){n.toggleIcon.classList.remove("animated")},500)});w.defaults.baseURL="https://books-backend.p.goit.global/books/";async function ue(){return await w.get("category-list").then(t=>t.data)}ue();async function ge(){return await w.get("top-books").then(t=>t.data)}ge();async function pe(e){return await w.get(`category?category=${e}`).then(s=>s.data)}pe("Childrens Middle Grade Hardcover");async function me(e){return await w.get(`${e}`).then(s=>s.data)}me("643282b1e85766588626a0dc");const We={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},he=Ke(We),fe=Fe(he),f=Qe(he),Je=async(e,t)=>Ne(f,e,t),Xe=async e=>{const t=ce(fe,"users",f.currentUser.uid);return je(t,{name:e})},De=async(e,t)=>He(f,e,t),Ze=async()=>(await f._initializationPromise,f.currentUser!==null),Ge=async()=>{const e=f.currentUser;return _e(e)},ye=async()=>Pe(ce(fe,"users",f.currentUser.uid));function ve(){Oe(f).then(()=>{y.fire({position:"center",icon:"success",title:"Seen later!",showConfirmButton:!1,timer:1500}),setTimeout(()=>{window.location.href="index.html"},1500)})}const U=document.querySelector(".auth-modal"),V=document.querySelector(".auth-close-btn");document.querySelector(".auth-container");const L=document.querySelector(".auth-toggler-sign-up"),A=document.querySelector(".auth-toggler-sign-in"),T=document.querySelector("#auth-name"),W=document.querySelector("#auth-email"),J=document.querySelector("#auth-password"),k=document.querySelector(".auth-sign-up"),C=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function Ye(){function e(){V.removeEventListener("click",t),document.removeEventListener("keydown",s),L.removeEventListener("click",o),A.removeEventListener("click",i),C.removeEventListener("click",B),k.removeEventListener("click",$)}function t(){U.classList.add("visually-hidden"),e()}V.addEventListener("click",t);const s=r=>{r.key=="Escape"&&(U.classList.add("visually-hidden"),e())};document.addEventListener("keydown",s);const o=()=>{A.classList.remove("auth-toggler-active"),L.classList.add("auth-toggler-active"),T.classList.remove("visually-hidden"),k.classList.remove("visually-hidden"),C.classList.add("visually-hidden")};L.addEventListener("click",o);const i=()=>{L.classList.remove("auth-toggler-active"),A.classList.add("auth-toggler-active"),T.classList.add("visually-hidden"),k.classList.add("visually-hidden"),C.classList.remove("visually-hidden")};A.addEventListener("click",i);function a(r){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(r).toLowerCase())}const u=async(r,c)=>{De(r,c).then(()=>{ye().then(l=>{O(l.data().name),U.classList.add("visually-hidden"),e(),location.reload()}).catch(l=>{alert(`Get user name error: ${l.code}`)})}).catch(l=>{alert(`Authorization error: ${l.code}`)})},B=()=>{const r=W.value.trim(),c=J.value.trim();a(r)?c.length>=5?u(r,c):y.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):y.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};C.addEventListener("click",B);const x=async(r,c,l)=>{Je(r,c).then(()=>{Xe(l).then(()=>{O(l),U.classList.add("visually-hidden"),e(),location.reload()}).catch(v=>{alert(`Create account error: ${v.code}`),Ge().then(()=>{}).catch(b=>{alert(`Create account error: ${b.code}`)})})}).catch(v=>{alert(`Create account error: ${v.code}`)})},$=()=>{const r=W.value.trim(),c=J.value.trim(),l=T.value.trim();a(r)?c.length>=5?l.length>0&&x(r,c,l):y.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):y.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};k.addEventListener("click",$)}function et(){M.classList.remove("visually-hidden"),K.classList.add("visually-hidden"),L.classList.remove(".auth-toggler-active"),A.classList.add(".auth-toggler-active"),T.classList.add("visually-hidden"),k.classList.add("visually-hidden"),C.classList.remove("visually-hidden")}let X=document.getElementById("auth-password"),M=document.querySelector(".locked-pass-icon"),K=document.querySelector(".opened-pass-icon"),Q=!1;function be(){Q=!Q,Q?(X.type="text",M.classList.add("visually-hidden"),K.classList.remove("visually-hidden")):(X.type="password",M.classList.remove("visually-hidden"),K.classList.add("visually-hidden"))}M.addEventListener("click",be);K.addEventListener("click",be);document.addEventListener("DOMContentLoaded",function(){let e=window.location.href;document.querySelectorAll(".nav-item").forEach(function(s){s.querySelector("a").href===e&&s.classList.add("active-page")}),at().then(s=>{let o=document.querySelector(".menu-auth-icon use"),i=document.querySelector(".auth-link"),a=document.querySelector(".sign-out"),u=document.querySelector(".sign-up");s?(o.setAttribute("href","/images/header/header-defs.svg#icon-fi-ss-caret-down-1"),i.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),u.classList.add("visually-hidden")):(o.setAttribute("href","/images/header/header-defs.svg#icon-arrow-narrow-right-1"),i.classList.add("visually-hidden"),a.classList.add("visually-hidden"),u.classList.remove("visually-hidden"))})});const tt=document.querySelector(".sign-up"),st=document.querySelector(".auth-modal"),ot=document.querySelector(".user-signed"),nt=document.querySelector(".menu-auth-logo"),it=document.querySelector(".sign-out"),Le=document.querySelector(".js-logout"),Ae=document.querySelector(".auth-up"),ke=document.querySelector(".auth-down");Ae.classList.add("visually-hidden");ke.classList.remove("visually-hidden");async function at(){const e=await Ze();return e&&ye().then(t=>{O(t.data().name)}),e}tt.addEventListener("click",()=>{st.classList.remove("visually-hidden"),et(),Ye()});it.addEventListener("click",()=>{Le.classList.toggle("visually-hidden"),ke.classList.toggle("visually-hidden"),Ae.classList.toggle("visually-hidden")});Le.addEventListener("click",()=>{ve()});const O=e=>{ot.textContent=e,nt.classList.remove("visually-hidden")},rt=document.querySelector(".nav-mobile-menu"),D=document.querySelector(".burger"),N=document.querySelector(".close-burger");N.classList.add("visually-hidden");let P=!1;rt.addEventListener("click",lt);function lt(){P=!P,P?(N.classList.remove("visually-hidden"),D.classList.add("visually-hidden"),ct()):(N.classList.add("visually-hidden"),D.classList.remove("visually-hidden"),dt())}function ct(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню открыто"),e.style.display="block"}function dt(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню закрыто"),e.style.display="none"}const ut=document.getElementById("open-mobile-menu"),Ce=document.querySelector(".js-mobile-menu"),gt=document.querySelector(".button-home"),pt=document.querySelector(".button-shopping-list"),mt=document.querySelector(".button-log-out");ut.addEventListener("click",ht);gt.addEventListener("click",ft);pt.addEventListener("click",yt);mt.addEventListener("click",vt);function ht(e){Ce.style.display="block"}function ft(e){window.location.href="/index.html",Ce.style.display="none"}function yt(e){window.location.href="shopping-list.html"}function vt(e){ve(),window.location.href="/index.html"}const bt="/it-frogs-tp-02/assets/icons-3c1cdaf3.svg";console.log("el",n);const Ee="booksList";function H(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".js-book-on-click");console.log(t);const s=t.dataset.id;console.log("bookId",s),me(s).then(o=>{const{book_image:i,title:a,author:u,description:B,buy_links:x}=o,$=x[0].url,r=x[1].url,c=_();console.log("localStorage ",c);let l;c.length===0||!c.find(Me=>Me._id===s)?l="Add to shopping list":l="Remove from the shopping list";const v=At(i,a,u,B,$,r,l),b=ze.create(`
    <div class="popup-modal">${v}</div>    
`);b.show(),n.buttonAddToList=document.querySelector(".popup-button"),n.closeModalButton=document.querySelector(".popup-close-button"),n.buttonAddToList.addEventListener("click",kt.bind(o)),document.addEventListener("keydown",Be.bind(b)),n.closeModalButton.addEventListener("click",Et.bind(b))}).catch(o=>{alert(`Error: ${o}`)}).finally(()=>{})}function Lt(e){const t=_();t.push(e),Se(t)}function _(){try{const e=localStorage.getItem(Ee);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function Se(e){localStorage.setItem(Ee,JSON.stringify(e))}function At(e,t,s,o,i,a,u){return`
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
    <button class="popup-close-button" type="button" data-modal-close>
      <svg class="popup-icon" width="8" height="8">
        <use href="${bt}#close-btn"></use>
      </svg>
    </button>
    `}const we=document.querySelector(".aaa");console.log(we);we.addEventListener("click",H);function kt(){const e=this;console.log(e),n.buttonAddToList.textContent==="Add to shopping list"?(Lt(e),n.buttonAddToList.textContent="Remove from the shopping list"):(Ct(e),n.buttonAddToList.textContent="Add to shopping list")}function Ct({_id:e}){console.log("in remove",e);const s=_().filter(o=>String(o._id)!==e);Se(s)}function Be(e){e.key==="Escape"&&(this.close(),document.removeEventListener("keydown",Be))}function Et(){this.close()}function F(){document.querySelector(".loader-overlay").style.display="block"}function E(){document.querySelector(".loader-overlay").style.display="none"}async function xe(e){try{F();const t=await pe(e),s=wt(t),o=St(e);n.list.innerHTML=`<h1 class="selected-category-title js-category-title">${o}</h1><ul class="selected-category-list js-category-box">`+s+"</ul>",n.categoryBox=document.querySelector(".js-category-box"),n.categoryBox.addEventListener("click",H)}catch(t){console.log(t),y.fire({title:"Error!",text:"Something went wrong! Try reload the page.",confirmButtonText:"OK",imageUrl:"./images/sad.svg",imageWidth:40})}finally{E()}}function St(e){const t=e.split(" "),s=Math.ceil(t.length/2),o=t.slice(0,s).join(" "),i=t.slice(s).join(" ");return`
        ${o} <span class="second-half">${i}</span>
    `}function wt(e){return e.map(({author:t,title:s,book_image:o,_id:i})=>`<li class="card-wrapper  js-book-on-click" data-id="${i}">
                 <div class="selected-category-img-box">
                   <img class="selected-category-img" src="{book_image}" alt="${s}">
                   <div class="selected-category-overlay">
                   <p class="selected-category-overlay-text">quick view</p>
                   </div>
                 </div>
                 <h2 class="selected-category-book-title">${s}</h2>
                 <p class="selected-category-book-author">${t}</p>
                </li>
   `).join("")}$e();function $e(){F(),ge().then(e=>{const t=e.map(s=>`
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
      `).join("");n.list.innerHTML='<h1 class="top-title-boks">Best Sellers <span class="top-title-span">Books</span></h1><div class="list-top" id="list">'+t+"</div>",n.topOfCatecory=document.querySelectorAll(".list-item"),n.topOfCatecory.forEach(s=>s.addEventListener("click",H)),n.buttonSeeMore=document.querySelectorAll(".top-bth-js"),n.buttonSeeMore.forEach(s=>{s.addEventListener("click",Bt)})}).catch(e=>{console.log("Помилка отримання або обробки даних:",e)}).finally(()=>{E()})}function Bt(e){const t=e.target.dataset.category.trim();xe(t)}(async()=>{try{if(document.getElementById("index")===null)return;F();const s=(await ue()).map(o=>o.list_name).sort().map(o=>`<li class="main-categories-list-item">${o}</li>`).join("");n.mainCategoriesList.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+s,E(),n.mainCategoriesList.addEventListener("click",xt)}catch(e){console.log("An error:",e),E()}})();async function xt(e){if(e.target.classList.contains("main-categories-list-item")){for(const t of n.mainCategoriesList.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active");try{F(),e.target.textContent.trim()==="All categories"?$e():xe(e.target.textContent),E()}catch(t){console.log("An error occurred:",t)}}}const Ue=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}],Z="/it-frogs-tp-02/assets/save-children@1x-ae1f71a1.png",$t="/it-frogs-tp-02/assets/save-children@2x-a5970846.png",G="/it-frogs-tp-02/assets/hope@1x-89afa445.png",Ut="/it-frogs-tp-02/assets/hope@2x-c63c8129.png",Y="/it-frogs-tp-02/assets/medical-corps@1x-0fc6fb91.png",It="/it-frogs-tp-02/assets/medical-corps@2x-852a0b2c.png",ee="/it-frogs-tp-02/assets/razom@1x-df85ab01.png",qt="/it-frogs-tp-02/assets/razom@2x-3d4379f2.png",te="/it-frogs-tp-02/assets/against-hunger@1x-f8c98194.png",Tt="/it-frogs-tp-02/assets/against-hunger@2x-99712bb9.png",se="/it-frogs-tp-02/assets/prytula@1x-407ac924.png",Mt="/it-frogs-tp-02/assets/prytula@2x-3f26d508.png",oe="/it-frogs-tp-02/assets/sans-frontiers@1x-f5bbe023.png",Kt="/it-frogs-tp-02/assets/sans-frontiers@2x-b7210163.png",ne="/it-frogs-tp-02/assets/world-vision@1x-0a766ac0.png",Ft="/it-frogs-tp-02/assets/world-vision@2x-23b82077.png",ie="/it-frogs-tp-02/assets/united24@1x-d59f6980.png",Qt="/it-frogs-tp-02/assets/united24@2x-32f158d4.png";Re();function Pt(e){return e.map(({id:t,title:s,url:o})=>`
        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${Z}" alt="${s}" srcset="${Z} 1x, ${$t} 2x" height="32">
            </a>
        </li>
                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${G}" alt="${s}" srcset="${G} 1x, ${Ut} 2x" height="32">
            </a>
        </li>
                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${Y}" alt="${s}" srcset="${Y} 1x, ${It} 2x" height="32">
            </a>
        </li>
                                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ee}" alt="${s}" srcset="${ee} 1x, ${qt} 2x" height="32">
            </a>
        </li>
                                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${te}" alt="${s}" srcset="${te} 1x, ${Tt} 2x" height="32">
            </a>
        </li>
                                                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${se}" alt="${s}" srcset="${se} 1x, ${Mt} 2x" height="32">
            </a>
        </li>
                                                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${oe}" alt="${s}" srcset="${oe} 1x, ${Kt} 2x" height="32">
            </a>
        </li>
                                                                <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ne}" alt="${s}" srcset="${ne} 1x, ${Ft} 2x" height="32">
            </a>
        </li>
                                                                        <li class="support-items">
            <a class="support-link" href="${o}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ie}" alt="${s}" srcset="${ie} 1x, ${Qt} 2x" height="32">
            </a>
        </li>
        `).join("")}const S=document.querySelector(".js-suport-list"),z=document.querySelector(".support-arrow-down"),R=document.querySelector(".support-arrow-up");z.addEventListener("click",Ot);R.addEventListener("click",Nt);let ae=0;Ue.forEach(e=>{e.id=ae+1,ae+=1});S.insertAdjacentHTML("afterbegin",Pt(Ue));function Ot(){z.classList.toggle("visually-hidden"),R.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)S.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)S.children[e].classList.remove("visually-hidden")}function Nt(){z.classList.toggle("visually-hidden"),R.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)S.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)S.children[e].classList.toggle("visually-hidden")}const re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAFKCAMAAAAg1OMbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAB1UExURUdwTP///////////////////////////////////////////////08u6GVI6+nl/L2w9tPL+Vo76vTy/pyJ8t7Y+3BV7GVI6si++Hti7qeW872x9qeX86eX9KeW9JF88YZv75F88Hti7Vo76bKk9b2x93BV7RH3XXgAAAAMdFJOUwDPkI/vn2DfIBAwoEAiyPgAAANgSURBVHja7dpRc6IwFIbhoIhgQ2IIWkXbuu3u/v+fuChWK4ru1XaT836XHmbk4ZxgZoxSpxTZJEl1NEmTSVao6+TjiJCnTPIesxjrSDO+6Go+1dFm+qWps4idrXQmoZ9fe1pE7myl3Tod6+gzPgyuFpD98E4kQEftCpXg1GmhMhFQncmY3HYvqBIZ0ESlMqCp0kICFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgX6P8Q6GVBr5iKg1pQioK1TBHTvlAD1y1IEtHMKgO5KGdC3Uga0LqOB2oVzzg4UX8oYoN7VO/MJqdaNu+MMF+rduir72c2HnEeoCw3qX6+Vh5ja3nQeoca82pCgQ8xDPim/yhvQfT0c6Et5N6ZrejkALZtgoObS8Nzvb/c2HoR+BAM93f17Pbf+0L7Fql7+LbQMDPr+0/d+UTcmRqgZHmqgQIECBQoUKFCgQNushEAbLQPaaBnQRsuANloGtNEyoBstA7rRIqCV0yKg1UKLgPadsUKN1SKg1844oTecUUK91TKgWgMNEur3ZzWc80OQR/UQoN7V53MM1bp2PcijeiDQj7er//er40eHi9yDejDQO2kvmf++X48EOjePHkQc0PXjjocIfW5zj3VdDw+6rFfH/c/FYY1H9WCg3WhW294mz/64WJqD9WUw0EV7w2bjb1Q250OQ26F6ZYOBartyfqC07Zzbofpq7nU40LsPoW3acvHPv/Y7TmDXtdcioN8SoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKVCg0leFMVSIDmqgnGdCJymRAM1XIWKSFUiMZk6tULgGat1AJLR3tnaqYxu6cqi555NJpfoSqWdTS6UydEnNPz/08rNNo30ijQl0mj3EvmI5ydZ0ie0oi2ialyST70s0/K7wJ8xAxTMcAAAAASUVORK5CYII=",jt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAClCAMAAAC6JimfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABpUExURUdwTP///////////////////////////////////////08u6GVI6+nl/Fo76vTy/tPL+ZyJ8oZv797Y+5F88b2x9r2w9rKj9XBV7KeW86eW9Mi++LKk9aeX83ti7nti7b2x96eX9Fo76TlS1NEAAAAKdFJOUwAgn6CPQN/PEJCpRugbAAABZElEQVR42u3cuXLCMBSFYZl41eqNPQkk7/+QQQYG4xpdUvyn8mn0zR0XkhopdUmRl1ok1SpT19S5FkxeT2alRVNFNdfCyZXKtHgKtZJHG1XJo6XSbwgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKChoevTs5NHByKODl0edN+KosyY5Omy6cdxvhyczKeo6b26xo3uYET24NOiPecqodbiaEbXmkASNy/u+2++70zTxZVAzQ00i9Le9f6+9GGofxYKCvhq1QR61ToujkymMXk1ZdBe0OHo3JdFT0OJoWPRkaHAuzJFlfz267aed1H9vpq0tLHqiTXyecPBPPSXq75Rf9CToZfHdVxt/YPt5Oxz5WbdJ0GPfPso6MvPeHwUO26HrAvdTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0H+ClvJmpRp5dKUKeTRT8qM273ofSdWiszb17QGq7ENo2rIpovcHAh3vUzxHm2MAAAAASUVORK5CYII=",Ht="/it-frogs-tp-02/assets/sprite-41fa8584.svg",_t="/it-frogs-tp-02/assets/amazon-ae27b443.svg",zt="/it-frogs-tp-02/assets/appleBooks-c1ce7981.svg",m=Vt();let h=Ie(),p=Math.ceil(m.length/h),d;window.addEventListener("load",()=>{document.getElementById("shopping")!==null&&(g(1),n.prevButton.addEventListener("click",()=>{g(d-1)}),n.nextButton.addEventListener("click",()=>{g(d+1)}),n.toEnd.addEventListener("click",()=>{g(p)}),n.toStart.addEventListener("click",()=>{g(1)}),document.getElementById("pagination-numbers").addEventListener("click",Rt))});function Rt(e){const t=e.target;if(t.classList.contains("pagination-page-number")){const s=Number(t.getAttribute("page-index"));g(s)}}function Vt(){const e=JSON.parse(localStorage.getItem("booksList"));return e||[]}function Ie(){return window.innerWidth<=767?4:3}function Wt(){return window.innerWidth<=767?2:3}function Jt(e,t){return m?m.slice(e,t):[]}function Xt(e){const t=document.createElement("button");t.classList.add("pagination-page-number"),t.classList.add("pagination-number"),t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),n.paginationNumbers.appendChild(t)}function le(e,t){for(let s=e;s<=t;s++)Xt(s)}function Dt(){d===1?(I(n.prevButton),I(n.toStart)):(q(n.prevButton),q(n.toStart)),p===d?(I(n.nextButton),I(n.toEnd)):(q(n.nextButton),q(n.toEnd))}function I(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function q(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}window.addEventListener("resize",()=>{h=Ie(),g(d)});function g(e){if(document.getElementById("shopping")===null)return;d=e,qe(),Dt();const t=(e-1)*h,s=e*h,o=Jt(t,s);o.length!=0&&(n.shoppingList.innerHTML="",n.shoppingList.insertAdjacentHTML("afterbegin",Zt(o)),n.shoppingList.addEventListener("click",Gt)),p===1&&(n.paginationContainer.style.display="none"),m.length===0?(n.paginationContainer.classList.add("hidden"),n.emptyPage.classList.remove("hidden")):n.paginationContainer.classList.remove("hidden"),Te()}function qe(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("active")})}function Te(){const e=Wt();if(n.paginationNumbers.innerHTML="",p=Math.ceil(m.length/h),d>p&&g(p),p<=e)le(1,p);else{const t=Math.max(d-Math.floor(e/2),1),s=Math.min(t+e-1,p);if(t>1){const o=document.createElement("button");o.className="pagination-number",o.textContent="...",o.addEventListener("click",()=>{g(t-1)}),n.paginationNumbers.appendChild(o)}if(le(t,s),s<p){const o=document.createElement("button");o.className="pagination-number",o.textContent="...",o.addEventListener("click",()=>{g(d+1)}),n.paginationNumbers.appendChild(o)}}qe()}function Zt(e){return e.map(s=>`
            <li class="shopping-book-card" data-book-id="${s._id}">
                <div class="image-thumb">
                <picture>
                  <source srcset="${s.book_image}" type="image/jpg">
                  <img class="shopping-book-cover" srcset="${re} 2x, ${jt} 1x" src="${re}" alt="plug">
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
                        <use href="${Ht}#trash"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${s.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="${_t}" width="32" height="11"/>
                  </a>
                  <a href="${s.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="${zt}" width="16" height="16"/>
                  </a>
                </div>
            </li>
`).join("")}function Gt(e){const t=e.target.closest(".js-delete-book");if(!t)return;const s=t.closest(".shopping-book-card"),o=s.dataset.bookId,i=m.findIndex(a=>a._id===o);i!=-1&&(m.splice(i,1),localStorage.setItem("booksList",JSON.stringify(m)),s.remove(),h-m.length%h===h&&d>1&&g(d-1),g(d),Te())}const j=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?j.classList.add("show"):j.classList.remove("show")});j.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=btn-scroll-up-7398293e.js.map
