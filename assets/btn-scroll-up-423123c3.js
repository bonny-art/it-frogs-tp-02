import{a as B,i as Fe,g as Pe,b as Qe,c as $e,d as le,s as Oe,S as v,e as Ne,f as je,h as He,j as ze,k as Re}from"./vendor-f0aecaff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const s={mainCategoriesList:document.querySelector(".main-categories-list"),categoryTitle:document.querySelector(".js-category-title"),categoryBox:"",list:document.querySelector(".content"),topOfCatecory:"",buttonSeeMore:"",shoppingList:document.querySelector(".js-shopping-list"),emptyPage:document.querySelector(".js-empty-page"),body:document.querySelector("body"),toggleBtn:document.querySelector(".tgl-btn"),toggleIcon:document.querySelector(".tgl-btn__icon"),bookPopup:"",buttonAddToList:"",closeModalButton:"",textUnderRemoveButton:"",bookPopupImage:"",bookPopupCover:"",paginationContainer:document.querySelector(".pagination"),paginationNumbers:document.getElementById("pagination-numbers"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),toEnd:document.getElementById("to-end-button"),toStart:document.getElementById("to-start-button")};function _e(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}function ce(e){localStorage.setItem("darkmode",e)}function Ve(){const e=localStorage.getItem("darkmode");e?e=="true"?(s.body.classList.add("darkmode"),s.toggleIcon.classList.add("fa-moon")):e=="false"&&s.toggleIcon.classList.add("fa-sun"):(ce(!1),s.toggleIcon.classList.add("fa-sun"))}Ve();s.toggleBtn.addEventListener("click",function(){s.body.classList.toggle("darkmode"),s.toggleIcon.classList.add("animated"),ce(s.body.classList.contains("darkmode")),s.body.classList.contains("darkmode")?(s.toggleIcon.classList.remove("fa-sun"),s.toggleIcon.classList.add("fa-moon")):(s.toggleIcon.classList.remove("fa-moon"),s.toggleIcon.classList.add("fa-sun")),setTimeout(function(){s.toggleIcon.classList.remove("animated")},500)});B.defaults.baseURL="https://books-backend.p.goit.global/books/";async function de(){return await B.get("category-list").then(t=>t.data)}de();async function ue(){return await B.get("top-books").then(t=>t.data)}ue();async function ge(e){return await B.get(`category?category=${e}`).then(o=>o.data)}ge("Childrens Middle Grade Hardcover");async function pe(e){return await B.get(`${e}`).then(o=>o.data)}pe("643282b1e85766588626a0dc");const We={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},me=Fe(We),he=Pe(me),f=Qe(me),Je=async(e,t)=>Ne(f,e,t),Xe=async e=>{const t=le(he,"users",f.currentUser.uid);return je(t,{name:e})},De=async(e,t)=>He(f,e,t),Ze=async()=>(await f._initializationPromise,f.currentUser!==null),Ge=async()=>{const e=f.currentUser;return ze(e)},fe=async()=>$e(le(he,"users",f.currentUser.uid));function ve(){Oe(f).then(()=>{v.fire({position:"center",icon:"success",title:"Seen later!",showConfirmButton:!1,timer:1500}),setTimeout(()=>{window.location.href="index.html"},1500)})}const q=document.querySelector(".auth-modal"),ee=document.querySelector(".auth-close-btn");document.querySelector(".auth-container");const A=document.querySelector(".auth-toggler-sign-up"),k=document.querySelector(".auth-toggler-sign-in"),K=document.querySelector("#auth-name"),te=document.querySelector("#auth-email"),oe=document.querySelector("#auth-password"),C=document.querySelector(".auth-sign-up"),S=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function ye(){function e(){ee.removeEventListener("click",t),document.removeEventListener("keydown",o),A.removeEventListener("click",n),k.removeEventListener("click",i),S.removeEventListener("click",x),C.removeEventListener("click",I)}function t(){q.classList.add("visually-hidden"),e()}ee.addEventListener("click",t);const o=r=>{r.key=="Escape"&&(q.classList.add("visually-hidden"),e())};document.addEventListener("keydown",o);const n=()=>{k.classList.remove("auth-toggler-active"),A.classList.add("auth-toggler-active"),K.classList.remove("visually-hidden"),C.classList.remove("visually-hidden"),S.classList.add("visually-hidden")};A.addEventListener("click",n);const i=()=>{A.classList.remove("auth-toggler-active"),k.classList.add("auth-toggler-active"),K.classList.add("visually-hidden"),C.classList.add("visually-hidden"),S.classList.remove("visually-hidden")};k.addEventListener("click",i);function a(r){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(r).toLowerCase())}const c=async(r,d)=>{De(r,d).then(()=>{fe().then(l=>{H(l.data().name),q.classList.add("visually-hidden"),e(),location.reload()}).catch(l=>{alert(`Get user name error: ${l.code}`)})}).catch(l=>{alert(`Authorization error: ${l.code}`)})},x=()=>{const r=te.value.trim(),d=oe.value.trim();a(r)?d.length>=5?c(r,d):v.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):v.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};S.addEventListener("click",x);const U=async(r,d,l)=>{Je(r,d).then(()=>{Xe(l).then(()=>{H(l),q.classList.add("visually-hidden"),e(),location.reload()}).catch(y=>{alert(`Create account error: ${y.code}`),Ge().then(()=>{}).catch(b=>{alert(`Create account error: ${b.code}`)})})}).catch(y=>{alert(`Create account error: ${y.code}`)})},I=()=>{const r=te.value.trim(),d=oe.value.trim(),l=K.value.trim();a(r)?d.length>=5?l.length>0&&U(r,d,l):v.fire({title:"Error!",text:"The password must be at least 5 characters long!",icon:"error",confirmButtonText:"Cool"}):v.fire({title:"Error!",text:"Wrong email or not valid!",icon:"error",confirmButtonText:"Cool"})};C.addEventListener("click",I)}function be(){F.classList.remove("visually-hidden"),P.classList.add("visually-hidden"),A.classList.remove(".auth-toggler-active"),k.classList.add(".auth-toggler-active"),K.classList.add("visually-hidden"),C.classList.add("visually-hidden"),S.classList.remove("visually-hidden")}let se=document.getElementById("auth-password"),F=document.querySelector(".locked-pass-icon"),P=document.querySelector(".opened-pass-icon"),O=!1;function Le(){O=!O,O?(se.type="text",F.classList.add("visually-hidden"),P.classList.remove("visually-hidden")):(se.type="password",F.classList.remove("visually-hidden"),P.classList.add("visually-hidden"))}F.addEventListener("click",Le);P.addEventListener("click",Le);document.addEventListener("DOMContentLoaded",function(){let e=window.location.href;document.querySelectorAll(".nav-item").forEach(function(o){o.querySelector("a").href===e&&o.classList.add("active-page")}),Q().then(o=>{let n=document.querySelector(".menu-auth-icon use"),i=document.querySelector(".auth-link"),a=document.querySelector(".sign-out"),c=document.querySelector(".sign-up");o?(n.setAttribute("href","/images/header/header-defs.svg#icon-fi-ss-caret-down-1"),i.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),c.classList.add("visually-hidden")):(n.setAttribute("href","/images/header/header-defs.svg#icon-arrow-narrow-right-1"),i.classList.add("visually-hidden"),a.classList.add("visually-hidden"),c.classList.remove("visually-hidden"))})});const Ye=document.querySelector(".sign-up"),et=document.querySelector(".auth-modal"),tt=document.querySelector(".user-signed"),ot=document.querySelector(".menu-auth-logo"),st=document.querySelector(".sign-out"),Ae=document.querySelector(".js-logout"),ke=document.querySelector(".auth-up"),Ce=document.querySelector(".auth-down");ke.classList.add("visually-hidden");Ce.classList.remove("visually-hidden");async function Q(){const e=await Ze();return e&&fe().then(t=>{H(t.data().name)}),e}Ye.addEventListener("click",()=>{et.classList.remove("visually-hidden"),be(),ye()});st.addEventListener("click",()=>{Ae.classList.toggle("visually-hidden"),Ce.classList.toggle("visually-hidden"),ke.classList.toggle("visually-hidden")});Ae.addEventListener("click",()=>{ve()});const H=e=>{tt.textContent=e,ot.classList.remove("visually-hidden")},nt=document.querySelector(".nav-mobile-menu"),ne=document.querySelector(".burger"),z=document.querySelector(".close-burger");z.classList.add("visually-hidden");let N=!1;nt.addEventListener("click",it);function it(){N=!N,N?(z.classList.remove("visually-hidden"),ne.classList.add("visually-hidden"),at()):(z.classList.add("visually-hidden"),ne.classList.remove("visually-hidden"),rt())}function at(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню открыто"),e.style.display="block"}function rt(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню закрыто"),e.style.display="none"}const Se=document.querySelector(".js-mobile-menu"),R=document.querySelector(".button-home"),_=document.querySelector(".button-shopping-list"),V=document.querySelector(".button-log-out"),j=document.querySelector(".mob-user-signed"),W=document.querySelector(".mob-sign-up");R.addEventListener("click",ct);_.addEventListener("click",dt);V.addEventListener("click",ut);Q().then(e=>{e?(W.classList.add("visually-hidden"),R.classList.remove("visually-hidden"),_.classList.remove("visually-hidden"),V.classList.remove("visually-hidden"),j.classList.remove("visually-hidden"),console.log(j)):(R.classList.add("visually-hidden"),_.classList.add("visually-hidden"),V.classList.add("visually-hidden"),W.classList.remove("visually-hidden"),j.classList.add("visually-hidden"))});Q();const lt=document.querySelector(".auth-modal");W.addEventListener("click",()=>{lt.classList.remove("visually-hidden"),Se.style.display="none",be(),ye()});function ct(e){window.location.href="/index.html",Se.style.display="none"}function dt(e){window.location.href="shopping-list.html"}function ut(e){ve(),window.location.href="/index.html"}const gt="/it-frogs-tp-02/assets/icons-3c1cdaf3.svg",pt="/it-frogs-tp-02/assets/amazon-ae27b443.svg",mt="/it-frogs-tp-02/assets/appleBooks-c1ce7981.svg",ht="/it-frogs-tp-02/assets/not-downloaded@1x-e3e55ac3.jpg",Ee="booksList";function we(e){if(e.target===e.currentTarget)return;const o=e.target.closest(".js-book-on-click").dataset.id;pe(o).then(n=>{const{book_image:i,title:a,author:c,description:x,buy_links:U}=n,I=U[0].url,r=U[1].url,d=X();console.log("localStorage ",d);let l;d.length===0||!d.find(L=>L._id===o)?l="Add to shopping list":l="Remove from the shopping list";const y=vt(i,a,c,x,I,r,l),b=Re.create(`
    <div class="popup-modal">${y}</div>    
`,{onShow:L=>{document.body.style.overflow="hidden"},onClose:L=>{document.body.style.overflow="visible"}});b.show(),s.bookPopupImage=document.querySelector(".popup-img"),s.bookPopupImage.onerror=function(){s.bookPopupImage.src=ht,console.log(s.bookPopupImage)},s.buttonAddToList=document.querySelector(".popup-button"),s.buttonAddToList.addEventListener("click",yt.bind(n)),document.addEventListener("keydown",D.bind(b)),s.closeModalButton=document.querySelector(".popup-close-button"),s.closeModalButton.addEventListener("click",Lt.bind(b)),Q().then(L=>{L?s.buttonAddToList.classList.remove("visually-hidden"):s.buttonAddToList.classList.add("visually-hidden")}),s.textUnderRemoveButton=document.querySelector(".popup-under-button"),s.buttonAddToList.textContent==="Add to shopping list"?s.textUnderRemoveButton.classList.add("is-hidden"):s.textUnderRemoveButton.classList.remove("is-hidden")}).catch(n=>{alert(`Error: ${n}`)}).finally(()=>{})}function ft(e){const t=X();t.push(e),Be(t)}function X(){try{const e=localStorage.getItem(Ee);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function Be(e){localStorage.setItem(Ee,JSON.stringify(e))}function vt(e,t,o,n,i,a,c){return`
    <div class="popup-info">
      <div class="popup-cover">
        <img class="popup-img" src="${e}1" alt="${t}" />
      </div>
      <div class="popup-about">
        <h2 class="popup-title">${t}</h2>
        <p class="popup-author">${o}</p>
        <p class="popup-descr">${n}</p>
        <ul class="popup-store-list">
          <li class="popup-store popup-store-amazon">
            <a href="${i}"
            target="_blank"
              rel="noopener noreferrer">
            <img class="popup-store-icon popup-store-icon-amazon" src="${pt}" alt="Amazon" />
            </a>
          </li>
          <li class="popup-store popup-store-apple">
            <a href="${a}"
            target="_blank"
              rel="noopener noreferrer">
            <img class="popup-store-icon popup-store-icon-apple" src="${mt}" alt="AppleBook" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="popup-shopping-list">
      <button class="popup-button">${c}</button>
      <p class="popup-under-button">
         Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
     </p>
    </div>
    <button class="popup-close-button" type="button" data-modal-close>
      <svg class="popup-icon" width="8" height="8">
        <use href="${gt}#close-btn"></use>
      </svg>
    </button>
    `}function yt(){const e=this;s.buttonAddToList.textContent==="Add to shopping list"?(ft(e),s.buttonAddToList.textContent="Remove from the shopping list",s.textUnderRemoveButton.classList.remove("is-hidden")):(bt(e),s.buttonAddToList.textContent="Add to shopping list",s.textUnderRemoveButton.classList.add("is-hidden"))}function bt({_id:e}){const o=X().filter(n=>String(n._id)!==e);Be(o)}function D(e){e.key==="Escape"&&(this.close(),document.removeEventListener("keydown",D))}function Lt(){this.close(),s.closeModalButton.removeEventListener("click",D)}function $(){document.querySelector(".loader-overlay").style.display="block"}function E(){document.querySelector(".loader-overlay").style.display="none"}async function xe(e){try{$();const t=await ge(e),o=kt(t),n=At(e);s.list.innerHTML=`<h1 class="selected-category-title js-category-title">${n}</h1><ul class="selected-category-list js-category-box">`+o+"</ul>",s.categoryBox=document.querySelector(".js-category-box"),s.categoryBox.addEventListener("click",we)}catch(t){console.log(t),v.fire({title:"Error!",text:"Something went wrong! Try reload the page.",confirmButtonText:"OK",imageUrl:"./images/sad.svg",imageWidth:40})}finally{E()}}function At(e){const t=e.split(" "),o=Math.ceil(t.length/2),n=t.slice(0,o).join(" "),i=t.slice(o).join(" ");return`
        ${n} <span class="second-half">${i}</span>
    `}function kt(e){return e.map(({author:t,title:o,book_image:n,_id:i})=>`<li class="card-wrapper  js-book-on-click" data-id="${i}">
                 <div class="selected-category-img-box">
                   <img class="selected-category-img" src="{book_image}" alt="${o}">
                   <div class="selected-category-overlay">
                   <p class="selected-category-overlay-text">quick view</p>
                   </div>
                 </div>
                 <h2 class="selected-category-book-title">${o}</h2>
                 <p class="selected-category-book-author">${t}</p>
                </li>
   `).join("")}Ue();function Ue(){$(),ue().then(e=>{const t=e.map(o=>`
      <div>
        <h3 class="top-title">${o.list_name}</h3>
        <div class="swiper">
          <ul class="list-item swiper-wrapper">
            ${o.books.slice(0,5).map(n=>`
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
          <button class="top-bth top-bth-js" data-category="${o.list_name}" type="submit">see more</button>
        </div>
      `).join("");s.list.innerHTML='<h1 class="top-title-boks">Best Sellers <span class="top-title-span">Books</span></h1><div class="list-top" id="list">'+t+"</div>",s.topOfCatecory=document.querySelectorAll(".list-item"),s.topOfCatecory.forEach(o=>o.addEventListener("click",we)),s.buttonSeeMore=document.querySelectorAll(".top-bth-js"),s.buttonSeeMore.forEach(o=>{o.addEventListener("click",Ct)})}).catch(e=>{console.log("Помилка отримання або обробки даних:",e)}).finally(()=>{E()})}function Ct(e){const t=e.target.dataset.category.trim();xe(t)}(async()=>{try{if(document.getElementById("index")===null)return;$();const o=(await de()).map(n=>n.list_name).sort().map(n=>`<li class="main-categories-list-item">${n}</li>`).join("");s.mainCategoriesList.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+o,E(),s.mainCategoriesList.addEventListener("click",St)}catch(e){console.log("An error:",e),E()}})();async function St(e){if(e.target.classList.contains("main-categories-list-item")){for(const t of s.mainCategoriesList.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active");try{$(),e.target.textContent.trim()==="All categories"?Ue():xe(e.target.textContent),E()}catch(t){console.log("An error occurred:",t)}}}const Z=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}],Et="/it-frogs-tp-02/assets/save-children@1x-ae1f71a1.png",wt="/it-frogs-tp-02/assets/save-children@2x-a5970846.png",Bt="/it-frogs-tp-02/assets/hope@1x-89afa445.png",xt="/it-frogs-tp-02/assets/hope@2x-c63c8129.png",Ut="/it-frogs-tp-02/assets/medical-corps@1x-0fc6fb91.png",It="/it-frogs-tp-02/assets/medical-corps@2x-852a0b2c.png",qt="/it-frogs-tp-02/assets/razom@1x-df85ab01.png",Tt="/it-frogs-tp-02/assets/razom@2x-3d4379f2.png",Mt="/it-frogs-tp-02/assets/against-hunger@1x-f8c98194.png",Kt="/it-frogs-tp-02/assets/against-hunger@2x-99712bb9.png",Ft="/it-frogs-tp-02/assets/prytula@1x-407ac924.png",Pt="/it-frogs-tp-02/assets/prytula@2x-3f26d508.png",Qt="/it-frogs-tp-02/assets/sans-frontiers@1x-f5bbe023.png",$t="/it-frogs-tp-02/assets/sans-frontiers@2x-b7210163.png",Ot="/it-frogs-tp-02/assets/world-vision@1x-0a766ac0.png",Nt="/it-frogs-tp-02/assets/world-vision@2x-23b82077.png",jt="/it-frogs-tp-02/assets/united24@1x-d59f6980.png",Ht="/it-frogs-tp-02/assets/united24@2x-32f158d4.png";_e();const Ie=[],qe=[];Ie.push(Et,Bt,Ut,qt,Mt,Ft,Qt,Ot,jt);qe.push(wt,xt,It,Tt,Kt,Pt,$t,Nt,Ht);zt(Ie,qe,Z);function zt(e,t,o){for(let n=0;n<e.length;n+=1)o[n].id=n+1,o[n].img=e[n],o[n].img1x=e[n],o[n].img2x=t[n];return o}function Rt(e){return e.map(({id:t,img:o,img1x:n,img2x:i,title:a,url:c})=>`
        <li class="support-items">
            <a class="support-link" href="${c}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${o}" alt="${a}" srcset="${n} 1x, ${i} 2x" height="32">
            </a>
        </li>                
        `).join("")}const w=document.querySelector(".js-suport-list"),G=document.querySelector(".support-arrow-down"),Y=document.querySelector(".support-arrow-up");G.addEventListener("click",_t);Y.addEventListener("click",Vt);let ie=0;Z.forEach(e=>{e.id=ie+1,ie+=1});w.insertAdjacentHTML("afterbegin",Rt(Z));function _t(){G.classList.toggle("visually-hidden"),Y.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)w.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)w.children[e].classList.remove("visually-hidden")}function Vt(){G.classList.toggle("visually-hidden"),Y.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)w.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)w.children[e].classList.toggle("visually-hidden")}const ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAFKCAMAAAAg1OMbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAB1UExURUdwTP///////////////////////////////////////////////08u6GVI6+nl/L2w9tPL+Vo76vTy/pyJ8t7Y+3BV7GVI6si++Hti7qeW872x9qeX86eX9KeW9JF88YZv75F88Hti7Vo76bKk9b2x93BV7RH3XXgAAAAMdFJOUwDPkI/vn2DfIBAwoEAiyPgAAANgSURBVHja7dpRc6IwFIbhoIhgQ2IIWkXbuu3u/v+fuChWK4ru1XaT836XHmbk4ZxgZoxSpxTZJEl1NEmTSVao6+TjiJCnTPIesxjrSDO+6Go+1dFm+qWps4idrXQmoZ9fe1pE7myl3Tod6+gzPgyuFpD98E4kQEftCpXg1GmhMhFQncmY3HYvqBIZ0ESlMqCp0kICFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgX6P8Q6GVBr5iKg1pQioK1TBHTvlAD1y1IEtHMKgO5KGdC3Uga0LqOB2oVzzg4UX8oYoN7VO/MJqdaNu+MMF+rduir72c2HnEeoCw3qX6+Vh5ja3nQeoca82pCgQ8xDPim/yhvQfT0c6Et5N6ZrejkALZtgoObS8Nzvb/c2HoR+BAM93f17Pbf+0L7Fql7+LbQMDPr+0/d+UTcmRqgZHmqgQIECBQoUKFCgQNushEAbLQPaaBnQRsuANloGtNEyoBstA7rRIqCV0yKg1UKLgPadsUKN1SKg1844oTecUUK91TKgWgMNEur3ZzWc80OQR/UQoN7V53MM1bp2PcijeiDQj7er//er40eHi9yDejDQO2kvmf++X48EOjePHkQc0PXjjocIfW5zj3VdDw+6rFfH/c/FYY1H9WCg3WhW294mz/64WJqD9WUw0EV7w2bjb1Q250OQ26F6ZYOBartyfqC07Zzbofpq7nU40LsPoW3acvHPv/Y7TmDXtdcioN8SoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKVCg0leFMVSIDmqgnGdCJymRAM1XIWKSFUiMZk6tULgGat1AJLR3tnaqYxu6cqi555NJpfoSqWdTS6UydEnNPz/08rNNo30ijQl0mj3EvmI5ydZ0ie0oi2ialyST70s0/K7wJ8xAxTMcAAAAASUVORK5CYII=",Wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAClCAMAAAC6JimfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABpUExURUdwTP///////////////////////////////////////08u6GVI6+nl/Fo76vTy/tPL+ZyJ8oZv797Y+5F88b2x9r2w9rKj9XBV7KeW86eW9Mi++LKk9aeX83ti7nti7b2x96eX9Fo76TlS1NEAAAAKdFJOUwAgn6CPQN/PEJCpRugbAAABZElEQVR42u3cuXLCMBSFYZl41eqNPQkk7/+QQQYG4xpdUvyn8mn0zR0XkhopdUmRl1ok1SpT19S5FkxeT2alRVNFNdfCyZXKtHgKtZJHG1XJo6XSbwgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKChoevTs5NHByKODl0edN+KosyY5Omy6cdxvhyczKeo6b26xo3uYET24NOiPecqodbiaEbXmkASNy/u+2++70zTxZVAzQ00i9Le9f6+9GGofxYKCvhq1QR61ToujkymMXk1ZdBe0OHo3JdFT0OJoWPRkaHAuzJFlfz267aed1H9vpq0tLHqiTXyecPBPPSXq75Rf9CToZfHdVxt/YPt5Oxz5WbdJ0GPfPso6MvPeHwUO26HrAvdTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0H+ClvJmpRp5dKUKeTRT8qM273ofSdWiszb17QGq7ENo2rIpovcHAh3vUzxHm2MAAAAASUVORK5CYII=",Jt="/it-frogs-tp-02/assets/sprite-41fa8584.svg",Xt="/it-frogs-tp-02/assets/amazon-ae27b443.svg",Dt="/it-frogs-tp-02/assets/appleBooks-c1ce7981.svg",m=Gt();let h=Te(),p=Math.ceil(m.length/h),u;window.addEventListener("load",()=>{document.getElementById("shopping")!==null&&(g(1),s.prevButton.addEventListener("click",()=>{g(u-1)}),s.nextButton.addEventListener("click",()=>{g(u+1)}),s.toEnd.addEventListener("click",()=>{g(p)}),s.toStart.addEventListener("click",()=>{g(1)}),document.getElementById("pagination-numbers").addEventListener("click",Zt))});function Zt(e){const t=e.target;if(t.classList.contains("pagination-page-number")){const o=Number(t.getAttribute("page-index"));g(o)}}function Gt(){const e=JSON.parse(localStorage.getItem("booksList"));return e||[]}function Te(){return window.innerWidth<=767?4:3}function Yt(){return window.innerWidth<=767?2:3}function eo(e,t){return m?m.slice(e,t):[]}function to(e){const t=document.createElement("button");t.classList.add("pagination-page-number"),t.classList.add("pagination-number"),t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),s.paginationNumbers.appendChild(t)}function re(e,t){for(let o=e;o<=t;o++)to(o)}function oo(){u===1?(T(s.prevButton),T(s.toStart)):(M(s.prevButton),M(s.toStart)),p===u?(T(s.nextButton),T(s.toEnd)):(M(s.nextButton),M(s.toEnd))}function T(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function M(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}window.addEventListener("resize",()=>{h=Te(),g(u)});function g(e){if(document.getElementById("shopping")===null)return;u=e,Me(),oo();const t=(e-1)*h,o=e*h,n=eo(t,o);n.length!=0&&(s.shoppingList.innerHTML="",s.shoppingList.insertAdjacentHTML("afterbegin",so(n)),s.shoppingList.addEventListener("click",no)),p===1&&(s.paginationContainer.style.display="none"),m.length===0?(s.paginationContainer.classList.add("hidden"),s.emptyPage.classList.remove("hidden")):s.paginationContainer.classList.remove("hidden"),Ke()}function Me(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==u&&e.classList.add("active")})}function Ke(){const e=Yt();if(s.paginationNumbers.innerHTML="",p=Math.ceil(m.length/h),u>p&&g(p),p<=e)re(1,p);else{const t=Math.max(u-Math.floor(e/2),1),o=Math.min(t+e-1,p);if(t>1){const n=document.createElement("button");n.className="pagination-number",n.textContent="...",n.addEventListener("click",()=>{g(t-1)}),s.paginationNumbers.appendChild(n)}if(re(t,o),o<p){const n=document.createElement("button");n.className="pagination-number",n.textContent="...",n.addEventListener("click",()=>{g(u+1)}),s.paginationNumbers.appendChild(n)}}Me()}function so(e){return e.map(o=>`
            <li class="shopping-book-card" data-book-id="${o._id}">
                <div class="image-thumb">
                <picture>
                  <source srcset="${o.book_image}" type="image/jpg">
                  <img class="shopping-book-cover" srcset="${ae} 2x, ${Wt} 1x" src="${ae}" alt="plug">
                </picture>
                </div>
                <div class="card-info">
                    <h3 class="shopping-book-title">${o.title}</h3>
                    <p class="shopping-book-category">${o.list_name}</p>
                    <p class="shopping-book-description">${o.description}</p>
                    <p class="shopping-book-author">${o.author}</p>
                </div>
                <button type="button" class="delete-btn js-delete-book">
                    <svg class="delete-svg" width="16" height="16">
                        <use href="${Jt}#trash"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${o.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="${Xt}" width="32" height="11"/>
                  </a>
                  <a href="${o.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="${Dt}" width="16" height="16"/>
                  </a>
                </div>
            </li>
`).join("")}function no(e){const t=e.target.closest(".js-delete-book");if(!t)return;const o=t.closest(".shopping-book-card"),n=o.dataset.bookId,i=m.findIndex(a=>a._id===n);i!=-1&&(m.splice(i,1),localStorage.setItem("booksList",JSON.stringify(m)),o.remove(),h-m.length%h===h&&u>1&&g(u-1),g(u),Ke())}const J=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?J.classList.add("show"):J.classList.remove("show")});J.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=btn-scroll-up-423123c3.js.map