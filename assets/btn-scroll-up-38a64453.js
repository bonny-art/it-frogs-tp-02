import{a as B,i as Ke,g as Fe,b as Qe,c as Pe,d as de,s as Oe,S as v,e as Ne,f as je,h as He,j as _e,k as ze}from"./vendor-401edee2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const o={mainCategoriesList:document.querySelector(".main-categories-list"),categoryTitle:document.querySelector(".js-category-title"),categoryBox:"",list:document.querySelector(".content"),topOfCatecory:"",buttonSeeMore:"",shoppingList:document.querySelector(".js-shopping-list"),emptyPage:document.querySelector(".js-empty-page"),body:document.querySelector("body"),toggleBtn:document.querySelector(".tgl-btn"),toggleIcon:document.querySelector(".tgl-btn__icon"),bookPopup:"",buttonAddToList:"",closeModalButton:"",textUnderRemoveButton:"",paginationContainer:document.querySelector(".pagination"),paginationNumbers:document.getElementById("pagination-numbers"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),toEnd:document.getElementById("to-end-button"),toStart:document.getElementById("to-start-button")};function Re(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}function ue(e){localStorage.setItem("darkmode",e)}function Ve(){const e=localStorage.getItem("darkmode");e?e=="true"?(o.body.classList.add("darkmode"),o.toggleIcon.classList.add("fa-moon")):e=="false"&&o.toggleIcon.classList.add("fa-sun"):(ue(!1),o.toggleIcon.classList.add("fa-sun"))}Ve();o.toggleBtn.addEventListener("click",function(){o.body.classList.toggle("darkmode"),o.toggleIcon.classList.add("animated"),ue(o.body.classList.contains("darkmode")),o.body.classList.contains("darkmode")?(o.toggleIcon.classList.remove("fa-sun"),o.toggleIcon.classList.add("fa-moon")):(o.toggleIcon.classList.remove("fa-moon"),o.toggleIcon.classList.add("fa-sun")),setTimeout(function(){o.toggleIcon.classList.remove("animated")},500)});B.defaults.baseURL="https://books-backend.p.goit.global/books/";async function ge(){return await B.get("category-list").then(t=>t.data)}ge();async function pe(){return await B.get("top-books").then(t=>t.data)}pe();async function me(e){return await B.get(`category?category=${e}`).then(s=>s.data)}me("Childrens Middle Grade Hardcover");async function he(e){return await B.get(`${e}`).then(s=>s.data)}he("643282b1e85766588626a0dc");const We={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},fe=Ke(We),ve=Fe(fe),f=Qe(fe),Je=async(e,t)=>Ne(f,e,t),Xe=async e=>{const t=de(ve,"users",f.currentUser.uid);return je(t,{name:e})},De=async(e,t)=>He(f,e,t),Ze=async()=>(await f._initializationPromise,f.currentUser!==null),Ge=async()=>{const e=f.currentUser;return _e(e)},ye=async()=>Pe(de(ve,"users",f.currentUser.uid));function be(){Oe(f).then(()=>{v.fire({position:"center",icon:"success",title:"Seen later!",showConfirmButton:!1,timer:1500}),setTimeout(()=>{window.location.href="index.html"},1500)})}const I=document.querySelector(".auth-modal"),W=document.querySelector(".auth-close-btn");document.querySelector(".auth-container");const A=document.querySelector(".auth-toggler-sign-up"),k=document.querySelector(".auth-toggler-sign-in"),M=document.querySelector("#auth-name"),J=document.querySelector("#auth-email"),X=document.querySelector("#auth-password"),C=document.querySelector(".auth-sign-up"),E=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function Ye(){function e(){W.removeEventListener("click",t),document.removeEventListener("keydown",s),A.removeEventListener("click",n),k.removeEventListener("click",i),E.removeEventListener("click",x),C.removeEventListener("click",$)}function t(){I.classList.add("visually-hidden"),e()}W.addEventListener("click",t);const s=r=>{r.key=="Escape"&&(I.classList.add("visually-hidden"),e())};document.addEventListener("keydown",s);const n=()=>{k.classList.remove("auth-toggler-active"),A.classList.add("auth-toggler-active"),M.classList.remove("visually-hidden"),C.classList.remove("visually-hidden"),E.classList.add("visually-hidden")};A.addEventListener("click",n);const i=()=>{A.classList.remove("auth-toggler-active"),k.classList.add("auth-toggler-active"),M.classList.add("visually-hidden"),C.classList.add("visually-hidden"),E.classList.remove("visually-hidden")};k.addEventListener("click",i);function a(r){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(r).toLowerCase())}const u=async(r,c)=>{De(r,c).then(()=>{ye().then(l=>{N(l.data().name),I.classList.add("visually-hidden"),e(),location.reload()}).catch(l=>{alert(`Get user name error: ${l.code}`)})}).catch(l=>{alert(`Authorization error: ${l.code}`)})},x=()=>{const r=J.value.trim(),c=X.value.trim();a(r)?c.length>=5?u(r,c):v.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):v.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};E.addEventListener("click",x);const U=async(r,c,l)=>{Je(r,c).then(()=>{Xe(l).then(()=>{N(l),I.classList.add("visually-hidden"),e(),location.reload()}).catch(y=>{alert(`Create account error: ${y.code}`),Ge().then(()=>{}).catch(b=>{alert(`Create account error: ${b.code}`)})})}).catch(y=>{alert(`Create account error: ${y.code}`)})},$=()=>{const r=J.value.trim(),c=X.value.trim(),l=M.value.trim();a(r)?c.length>=5?l.length>0&&U(r,c,l):v.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):v.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};C.addEventListener("click",$)}function et(){K.classList.remove("visually-hidden"),F.classList.add("visually-hidden"),A.classList.remove(".auth-toggler-active"),k.classList.add(".auth-toggler-active"),M.classList.add("visually-hidden"),C.classList.add("visually-hidden"),E.classList.remove("visually-hidden")}let D=document.getElementById("auth-password"),K=document.querySelector(".locked-pass-icon"),F=document.querySelector(".opened-pass-icon"),P=!1;function Le(){P=!P,P?(D.type="text",K.classList.add("visually-hidden"),F.classList.remove("visually-hidden")):(D.type="password",K.classList.remove("visually-hidden"),F.classList.add("visually-hidden"))}K.addEventListener("click",Le);F.addEventListener("click",Le);document.addEventListener("DOMContentLoaded",function(){let e=window.location.href;document.querySelectorAll(".nav-item").forEach(function(s){s.querySelector("a").href===e&&s.classList.add("active-page")}),Ee().then(s=>{let n=document.querySelector(".menu-auth-icon use"),i=document.querySelector(".auth-link"),a=document.querySelector(".sign-out"),u=document.querySelector(".sign-up");s?(n.setAttribute("href","/images/header/header-defs.svg#icon-fi-ss-caret-down-1"),i.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),u.classList.add("visually-hidden")):(n.setAttribute("href","/images/header/header-defs.svg#icon-arrow-narrow-right-1"),i.classList.add("visually-hidden"),a.classList.add("visually-hidden"),u.classList.remove("visually-hidden"))})});const tt=document.querySelector(".sign-up"),st=document.querySelector(".auth-modal"),ot=document.querySelector(".user-signed"),nt=document.querySelector(".menu-auth-logo"),it=document.querySelector(".sign-out"),Ae=document.querySelector(".js-logout"),ke=document.querySelector(".auth-up"),Ce=document.querySelector(".auth-down");ke.classList.add("visually-hidden");Ce.classList.remove("visually-hidden");async function Ee(){const e=await Ze();return e&&ye().then(t=>{N(t.data().name)}),e}tt.addEventListener("click",()=>{st.classList.remove("visually-hidden"),et(),Ye()});it.addEventListener("click",()=>{Ae.classList.toggle("visually-hidden"),Ce.classList.toggle("visually-hidden"),ke.classList.toggle("visually-hidden")});Ae.addEventListener("click",()=>{be()});const N=e=>{ot.textContent=e,nt.classList.remove("visually-hidden")},at=document.querySelector(".nav-mobile-menu"),Z=document.querySelector(".burger"),j=document.querySelector(".close-burger");j.classList.add("visually-hidden");let O=!1;at.addEventListener("click",rt);function rt(){O=!O,O?(j.classList.remove("visually-hidden"),Z.classList.add("visually-hidden"),lt()):(j.classList.add("visually-hidden"),Z.classList.remove("visually-hidden"),ct())}function lt(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню открыто"),e.style.display="block"}function ct(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню закрыто"),e.style.display="none"}const dt=document.getElementById("open-mobile-menu"),we=document.querySelector(".js-mobile-menu"),ut=document.querySelector(".button-home"),gt=document.querySelector(".button-shopping-list"),pt=document.querySelector(".button-log-out");dt.addEventListener("click",mt);ut.addEventListener("click",ht);gt.addEventListener("click",ft);pt.addEventListener("click",vt);function mt(e){we.style.display="block"}function ht(e){window.location.href="/index.html",we.style.display="none"}function ft(e){window.location.href="shopping-list.html"}function vt(e){be(),window.location.href="/index.html"}const yt="/it-frogs-tp-02/assets/icons-3c1cdaf3.svg";console.log("el",o);const Se="booksList";function Be(e){if(e.target===e.currentTarget)return;const s=e.target.closest(".js-book-on-click").dataset.id;he(s).then(n=>{const{book_image:i,title:a,author:u,description:x,buy_links:U}=n,$=U[0].url,r=U[1].url,c=_();console.log("localStorage ",c);let l;c.length===0||!c.find(L=>L._id===s)?l="Add to shopping list":l="Remove from the shopping list";const y=Lt(i,a,u,x,$,r,l),b=ze.create(`
    <div class="popup-modal">${y}</div>    
`,{onShow:L=>{document.body.style.overflow="hidden"},onClose:L=>{document.body.style.overflow="visible"}});b.show(),o.buttonAddToList=document.querySelector(".popup-button"),o.buttonAddToList.addEventListener("click",At.bind(n)),document.addEventListener("keydown",z.bind(b)),o.closeModalButton=document.querySelector(".popup-close-button"),o.closeModalButton.addEventListener("click",Ct.bind(b)),Ee().then(L=>{L?o.buttonAddToList.classList.remove("visually-hidden"):o.buttonAddToList.classList.add("visually-hidden")}),o.textUnderRemoveButton=document.querySelector(".popup-under-button"),o.buttonAddToList.textContent==="Add to shopping list"?o.textUnderRemoveButton.classList.add("is-hidden"):o.textUnderRemoveButton.classList.remove("is-hidden")}).catch(n=>{alert(`Error: ${n}`)}).finally(()=>{})}function bt(e){const t=_();t.push(e),xe(t)}function _(){try{const e=localStorage.getItem(Se);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function xe(e){localStorage.setItem(Se,JSON.stringify(e))}function Lt(e,t,s,n,i,a,u){return`
    <div class="popup-info">
      <div class="popup-cover">
        <img class="popup-img" src="${e}" alt="${t}" />
      </div>
      <div class="popup-about">
        <h2 class="popup-title">${t}</h2>
        <p class="popup-author">${s}</p>
        <p class="popup-descr">${n}</p>
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
    <div class="popup-shopping-list">
      <button class="popup-button">${u}</button>
      <p class="popup-under-button">
         Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
     </p>
    </div>
    <button class="popup-close-button" type="button" data-modal-close>
      <svg class="popup-icon" width="8" height="8">
        <use href="${yt}#close-btn"></use>
      </svg>
    </button>
    `}function At(){const e=this;o.buttonAddToList.textContent==="Add to shopping list"?(bt(e),o.buttonAddToList.textContent="Remove from the shopping list",o.textUnderRemoveButton.classList.remove("is-hidden")):(kt(e),o.buttonAddToList.textContent="Add to shopping list",o.textUnderRemoveButton.classList.add("is-hidden"))}function kt({_id:e}){const s=_().filter(n=>String(n._id)!==e);xe(s)}function z(e){e.key==="Escape"&&(this.close(),document.removeEventListener("keydown",z))}function Ct(){this.close(),o.closeModalButton.removeEventListener("click",z)}function Q(){document.querySelector(".loader-overlay").style.display="block"}function w(){document.querySelector(".loader-overlay").style.display="none"}async function Ue(e){try{Q();const t=await me(e),s=wt(t),n=Et(e);o.list.innerHTML=`<h1 class="selected-category-title js-category-title">${n}</h1><ul class="selected-category-list js-category-box">`+s+"</ul>",o.categoryBox=document.querySelector(".js-category-box"),o.categoryBox.addEventListener("click",Be)}catch(t){console.log(t),v.fire({title:"Error!",text:"Something went wrong! Try reload the page.",confirmButtonText:"OK",imageUrl:"./images/sad.svg",imageWidth:40})}finally{w()}}function Et(e){const t=e.split(" "),s=Math.ceil(t.length/2),n=t.slice(0,s).join(" "),i=t.slice(s).join(" ");return`
        ${n} <span class="second-half">${i}</span>
    `}function wt(e){return e.map(({author:t,title:s,book_image:n,_id:i})=>`<li class="card-wrapper  js-book-on-click" data-id="${i}">
                 <div class="selected-category-img-box">
                   <img class="selected-category-img" src="{book_image}" alt="${s}">
                   <div class="selected-category-overlay">
                   <p class="selected-category-overlay-text">quick view</p>
                   </div>
                 </div>
                 <h2 class="selected-category-book-title">${s}</h2>
                 <p class="selected-category-book-author">${t}</p>
                </li>
   `).join("")}$e();function $e(){Q(),pe().then(e=>{const t=e.map(s=>`
      <div>
        <h3 class="top-title">${s.list_name}</h3>
        <div class="swiper">
          <ul class="list-item swiper-wrapper">
            ${s.books.slice(0,5).map(n=>`
              <li class="li-top js-book-on-click swiper-slide" data-id="${n._id}">
               <div class="card-container">
          <div class="card">
            <img class="img-top" src="${n.book_image||"./images/shopping-list-sec/plug_x1.png"}"
     srcset="${n.book_image||"./images/shopping-list-sec/plug_x1.png"} 1x, 
             ${n.book_image||"./images/shopping-list-sec/plug_x2.png"} 2x"  alt="Зображення відсутнє" />

            <div class="overlay">
               <p class="quick-view">quick view</p>
             </div>
          </div>
       </div>
                <p class="top-bookTitle">${n.title}</p>
                <p class="top-bookAuthor">${n.author}</p>
              </li>`).join("")}
          </ul>
        </div>
      </div>
        <div class="top-button">
          <button class="top-bth top-bth-js" data-category="${s.list_name}" type="submit">see more</button>
        </div>
      `).join("");o.list.innerHTML='<h1 class="top-title-boks">Best Sellers <span class="top-title-span">Books</span></h1><div class="list-top" id="list">'+t+"</div>",o.topOfCatecory=document.querySelectorAll(".list-item"),o.topOfCatecory.forEach(s=>s.addEventListener("click",Be)),o.buttonSeeMore=document.querySelectorAll(".top-bth-js"),o.buttonSeeMore.forEach(s=>{s.addEventListener("click",St)})}).catch(e=>{console.log("Помилка отримання або обробки даних:",e)}).finally(()=>{w()})}function St(e){const t=e.target.dataset.category.trim();Ue(t)}(async()=>{try{if(document.getElementById("index")===null)return;Q();const s=(await ge()).map(n=>n.list_name).sort().map(n=>`<li class="main-categories-list-item">${n}</li>`).join("");o.mainCategoriesList.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+s,w(),o.mainCategoriesList.addEventListener("click",Bt)}catch(e){console.log("An error:",e),w()}})();async function Bt(e){if(e.target.classList.contains("main-categories-list-item")){for(const t of o.mainCategoriesList.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active");try{Q(),e.target.textContent.trim()==="All categories"?$e():Ue(e.target.textContent),w()}catch(t){console.log("An error occurred:",t)}}}const Ie=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}],G="/it-frogs-tp-02/assets/save-children@1x-ae1f71a1.png",xt="/it-frogs-tp-02/assets/save-children@2x-a5970846.png",Y="/it-frogs-tp-02/assets/hope@1x-89afa445.png",Ut="/it-frogs-tp-02/assets/hope@2x-c63c8129.png",ee="/it-frogs-tp-02/assets/medical-corps@1x-0fc6fb91.png",$t="/it-frogs-tp-02/assets/medical-corps@2x-852a0b2c.png",te="/it-frogs-tp-02/assets/razom@1x-df85ab01.png",It="/it-frogs-tp-02/assets/razom@2x-3d4379f2.png",se="/it-frogs-tp-02/assets/against-hunger@1x-f8c98194.png",qt="/it-frogs-tp-02/assets/against-hunger@2x-99712bb9.png",oe="/it-frogs-tp-02/assets/prytula@1x-407ac924.png",Tt="/it-frogs-tp-02/assets/prytula@2x-3f26d508.png",ne="/it-frogs-tp-02/assets/sans-frontiers@1x-f5bbe023.png",Mt="/it-frogs-tp-02/assets/sans-frontiers@2x-b7210163.png",ie="/it-frogs-tp-02/assets/world-vision@1x-0a766ac0.png",Kt="/it-frogs-tp-02/assets/world-vision@2x-23b82077.png",ae="/it-frogs-tp-02/assets/united24@1x-d59f6980.png",Ft="/it-frogs-tp-02/assets/united24@2x-32f158d4.png";Re();function Qt(e){return e.map(({id:t,title:s,url:n})=>`
        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${G}" alt="${s}" srcset="${G} 1x, ${xt} 2x" height="32">
            </a>
        </li>
                <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${Y}" alt="${s}" srcset="${Y} 1x, ${Ut} 2x" height="32">
            </a>
        </li>
                        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ee}" alt="${s}" srcset="${ee} 1x, ${$t} 2x" height="32">
            </a>
        </li>
                                <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${te}" alt="${s}" srcset="${te} 1x, ${It} 2x" height="32">
            </a>
        </li>
                                        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${se}" alt="${s}" srcset="${se} 1x, ${qt} 2x" height="32">
            </a>
        </li>
                                                <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${oe}" alt="${s}" srcset="${oe} 1x, ${Tt} 2x" height="32">
            </a>
        </li>
                                                        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ne}" alt="${s}" srcset="${ne} 1x, ${Mt} 2x" height="32">
            </a>
        </li>
                                                                <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ie}" alt="${s}" srcset="${ie} 1x, ${Kt} 2x" height="32">
            </a>
        </li>
                                                                        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${ae}" alt="${s}" srcset="${ae} 1x, ${Ft} 2x" height="32">
            </a>
        </li>
        `).join("")}const S=document.querySelector(".js-suport-list"),R=document.querySelector(".support-arrow-down"),V=document.querySelector(".support-arrow-up");R.addEventListener("click",Pt);V.addEventListener("click",Ot);let re=0;Ie.forEach(e=>{e.id=re+1,re+=1});S.insertAdjacentHTML("afterbegin",Qt(Ie));function Pt(){R.classList.toggle("visually-hidden"),V.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)S.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)S.children[e].classList.remove("visually-hidden")}function Ot(){R.classList.toggle("visually-hidden"),V.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)S.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)S.children[e].classList.toggle("visually-hidden")}const le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAFKCAMAAAAg1OMbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAB1UExURUdwTP///////////////////////////////////////////////08u6GVI6+nl/L2w9tPL+Vo76vTy/pyJ8t7Y+3BV7GVI6si++Hti7qeW872x9qeX86eX9KeW9JF88YZv75F88Hti7Vo76bKk9b2x93BV7RH3XXgAAAAMdFJOUwDPkI/vn2DfIBAwoEAiyPgAAANgSURBVHja7dpRc6IwFIbhoIhgQ2IIWkXbuu3u/v+fuChWK4ru1XaT836XHmbk4ZxgZoxSpxTZJEl1NEmTSVao6+TjiJCnTPIesxjrSDO+6Go+1dFm+qWps4idrXQmoZ9fe1pE7myl3Tod6+gzPgyuFpD98E4kQEftCpXg1GmhMhFQncmY3HYvqBIZ0ESlMqCp0kICFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgX6P8Q6GVBr5iKg1pQioK1TBHTvlAD1y1IEtHMKgO5KGdC3Uga0LqOB2oVzzg4UX8oYoN7VO/MJqdaNu+MMF+rduir72c2HnEeoCw3qX6+Vh5ja3nQeoca82pCgQ8xDPim/yhvQfT0c6Et5N6ZrejkALZtgoObS8Nzvb/c2HoR+BAM93f17Pbf+0L7Fql7+LbQMDPr+0/d+UTcmRqgZHmqgQIECBQoUKFCgQNushEAbLQPaaBnQRsuANloGtNEyoBstA7rRIqCV0yKg1UKLgPadsUKN1SKg1844oTecUUK91TKgWgMNEur3ZzWc80OQR/UQoN7V53MM1bp2PcijeiDQj7er//er40eHi9yDejDQO2kvmf++X48EOjePHkQc0PXjjocIfW5zj3VdDw+6rFfH/c/FYY1H9WCg3WhW294mz/64WJqD9WUw0EV7w2bjb1Q250OQ26F6ZYOBartyfqC07Zzbofpq7nU40LsPoW3acvHPv/Y7TmDXtdcioN8SoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKVCg0leFMVSIDmqgnGdCJymRAM1XIWKSFUiMZk6tULgGat1AJLR3tnaqYxu6cqi555NJpfoSqWdTS6UydEnNPz/08rNNo30ijQl0mj3EvmI5ydZ0ie0oi2ialyST70s0/K7wJ8xAxTMcAAAAASUVORK5CYII=",Nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAClCAMAAAC6JimfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABpUExURUdwTP///////////////////////////////////////08u6GVI6+nl/Fo76vTy/tPL+ZyJ8oZv797Y+5F88b2x9r2w9rKj9XBV7KeW86eW9Mi++LKk9aeX83ti7nti7b2x96eX9Fo76TlS1NEAAAAKdFJOUwAgn6CPQN/PEJCpRugbAAABZElEQVR42u3cuXLCMBSFYZl41eqNPQkk7/+QQQYG4xpdUvyn8mn0zR0XkhopdUmRl1ok1SpT19S5FkxeT2alRVNFNdfCyZXKtHgKtZJHG1XJo6XSbwgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKChoevTs5NHByKODl0edN+KosyY5Omy6cdxvhyczKeo6b26xo3uYET24NOiPecqodbiaEbXmkASNy/u+2++70zTxZVAzQ00i9Le9f6+9GGofxYKCvhq1QR61ToujkymMXk1ZdBe0OHo3JdFT0OJoWPRkaHAuzJFlfz267aed1H9vpq0tLHqiTXyecPBPPSXq75Rf9CToZfHdVxt/YPt5Oxz5WbdJ0GPfPso6MvPeHwUO26HrAvdTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0H+ClvJmpRp5dKUKeTRT8qM273ofSdWiszb17QGq7ENo2rIpovcHAh3vUzxHm2MAAAAASUVORK5CYII=",jt="/it-frogs-tp-02/assets/sprite-41fa8584.svg",Ht="/it-frogs-tp-02/assets/amazon-ae27b443.svg",_t="/it-frogs-tp-02/assets/appleBooks-c1ce7981.svg",m=Rt();let h=qe(),p=Math.ceil(m.length/h),d;window.addEventListener("load",()=>{document.getElementById("shopping")!==null&&(g(1),o.prevButton.addEventListener("click",()=>{g(d-1)}),o.nextButton.addEventListener("click",()=>{g(d+1)}),o.toEnd.addEventListener("click",()=>{g(p)}),o.toStart.addEventListener("click",()=>{g(1)}),document.getElementById("pagination-numbers").addEventListener("click",zt))});function zt(e){const t=e.target;if(t.classList.contains("pagination-page-number")){const s=Number(t.getAttribute("page-index"));g(s)}}function Rt(){const e=JSON.parse(localStorage.getItem("booksList"));return e||[]}function qe(){return window.innerWidth<=767?4:3}function Vt(){return window.innerWidth<=767?2:3}function Wt(e,t){return m?m.slice(e,t):[]}function Jt(e){const t=document.createElement("button");t.classList.add("pagination-page-number"),t.classList.add("pagination-number"),t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),o.paginationNumbers.appendChild(t)}function ce(e,t){for(let s=e;s<=t;s++)Jt(s)}function Xt(){d===1?(q(o.prevButton),q(o.toStart)):(T(o.prevButton),T(o.toStart)),p===d?(q(o.nextButton),q(o.toEnd)):(T(o.nextButton),T(o.toEnd))}function q(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function T(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}window.addEventListener("resize",()=>{h=qe(),g(d)});function g(e){if(document.getElementById("shopping")===null)return;d=e,Te(),Xt();const t=(e-1)*h,s=e*h,n=Wt(t,s);n.length!=0&&(o.shoppingList.innerHTML="",o.shoppingList.insertAdjacentHTML("afterbegin",Dt(n)),o.shoppingList.addEventListener("click",Zt)),p===1&&(o.paginationContainer.style.display="none"),m.length===0?(o.paginationContainer.classList.add("hidden"),o.emptyPage.classList.remove("hidden")):o.paginationContainer.classList.remove("hidden"),Me()}function Te(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("active")})}function Me(){const e=Vt();if(o.paginationNumbers.innerHTML="",p=Math.ceil(m.length/h),d>p&&g(p),p<=e)ce(1,p);else{const t=Math.max(d-Math.floor(e/2),1),s=Math.min(t+e-1,p);if(t>1){const n=document.createElement("button");n.className="pagination-number",n.textContent="...",n.addEventListener("click",()=>{g(t-1)}),o.paginationNumbers.appendChild(n)}if(ce(t,s),s<p){const n=document.createElement("button");n.className="pagination-number",n.textContent="...",n.addEventListener("click",()=>{g(d+1)}),o.paginationNumbers.appendChild(n)}}Te()}function Dt(e){return e.map(s=>`
            <li class="shopping-book-card" data-book-id="${s._id}">
                <div class="image-thumb">
                <picture>
                  <source srcset="${s.book_image}" type="image/jpg">
                  <img class="shopping-book-cover" srcset="${le} 2x, ${Nt} 1x" src="${le}" alt="plug">
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
                        <use href="${jt}#trash"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${s.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="${Ht}" width="32" height="11"/>
                  </a>
                  <a href="${s.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="${_t}" width="16" height="16"/>
                  </a>
                </div>
            </li>
`).join("")}function Zt(e){const t=e.target.closest(".js-delete-book");if(!t)return;const s=t.closest(".shopping-book-card"),n=s.dataset.bookId,i=m.findIndex(a=>a._id===n);i!=-1&&(m.splice(i,1),localStorage.setItem("booksList",JSON.stringify(m)),s.remove(),h-m.length%h===h&&d>1&&g(d-1),g(d),Me())}const H=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?H.classList.add("show"):H.classList.remove("show")});H.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=btn-scroll-up-38a64453.js.map
