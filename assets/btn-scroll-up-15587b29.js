import{a as x,i as be,g as Le,b as ke,c as Se,d as Z,s as we,e as Ee,f as xe,h as Ie,j as qe,k as Ae}from"./vendor-551e154b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const s={mainCategoriesList:document.querySelector(".main-categories-list"),categoryTitle:document.querySelector(".js-category-title"),categoryBox:"",list:document.querySelector(".content"),topOfCatecory:"",buttonSeeMore:"",shoppingList:document.querySelector(".js-shopping-list"),emptyPage:document.querySelector(".js-empty-page"),body:document.querySelector("body"),toggleBtn:document.querySelector(".tgl-btn"),toggleIcon:document.querySelector(".tgl-btn__icon"),bookPopup:"",buttonAddToList:"",paginationContainer:document.querySelector(".pagination"),paginationNumbers:document.getElementById("pagination-numbers"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),toEnd:document.getElementById("to-end-button"),toStart:document.getElementById("to-start-button")};function Be(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}function Q(e){localStorage.setItem("darkmode",e)}function $e(){const e=localStorage.getItem("darkmode");e?e=="true"?(s.body.classList.add("darkmode"),s.toggleIcon.classList.add("fa-moon")):e=="false"&&s.toggleIcon.classList.add("fa-sun"):(Q(!1),s.toggleIcon.classList.add("fa-sun"))}$e();s.toggleBtn.addEventListener("click",function(){s.body.classList.toggle("darkmode"),s.toggleIcon.classList.add("animated"),Q(s.body.classList.contains("darkmode")),s.body.classList.contains("darkmode")?(s.toggleIcon.classList.remove("fa-sun"),s.toggleIcon.classList.add("fa-moon")):(s.toggleIcon.classList.remove("fa-moon"),s.toggleIcon.classList.add("fa-sun")),setTimeout(function(){s.toggleIcon.classList.remove("animated")},500)});x.defaults.baseURL="https://books-backend.p.goit.global/books/";async function X(){return await x.get("category-list").then(t=>t.data)}X();async function ee(){return await x.get("top-books").then(t=>t.data)}ee();async function te(e){return await x.get(`category?category=${e}`).then(o=>o.data)}te("Childrens Middle Grade Hardcover");async function oe(e){return await x.get(`${e}`).then(o=>o.data)}oe("643282b1e85766588626a0dc");const Ce={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},se=be(Ce),ne=Le(se),f=ke(se),Me=async(e,t)=>Ee(f,e,t).then(alert("Account created! Welcome!")),Te=async e=>{const t=Z(ne,"users",f.currentUser.uid);return xe(t,{name:e})},Pe=async(e,t)=>Ie(f,e,t).then(alert("Welcome back!")),_e=async()=>(await f._initializationPromise,f.currentUser!==null),je=async()=>{const e=f.currentUser;return qe(e)},ie=async()=>Se(Z(ne,"users",f.currentUser.uid));function ae(){we(f).then(()=>{alert("Seen later!"),window.location.href="index.html"})}const v=document.querySelector(".auth-modal"),R=document.querySelector(".auth-close-btn"),Oe=document.querySelector(".auth-container"),L=document.querySelector(".auth-toggler-sign-up"),k=document.querySelector(".auth-toggler-sign-in"),B=document.querySelector("#auth-name"),W=document.querySelector("#auth-email"),J=document.querySelector("#auth-password"),S=document.querySelector(".auth-sign-up"),w=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function Ue(){function e(){R.removeEventListener("click",t),document.removeEventListener("click",o),document.removeEventListener("keydown",n),L.removeEventListener("click",i),k.removeEventListener("click",a),w.removeEventListener("click",b),S.removeEventListener("click",I)}function t(){v.classList.add("visually-hidden"),e()}R.addEventListener("click",t);const o=r=>{!r.composedPath().includes(Oe)&&r.composedPath().includes(v)&&(v.classList.add("visually-hidden"),e())};document.addEventListener("click",o);const n=r=>{r.key=="Escape"&&(v.classList.add("visually-hidden"),e())};document.addEventListener("keydown",n);const i=()=>{k.classList.remove("auth-toggler-active"),L.classList.add("auth-toggler-active"),B.classList.remove("visually-hidden"),S.classList.remove("visually-hidden"),w.classList.add("visually-hidden")};L.addEventListener("click",i);const a=()=>{L.classList.remove("auth-toggler-active"),k.classList.add("auth-toggler-active"),B.classList.add("visually-hidden"),S.classList.add("visually-hidden"),w.classList.remove("visually-hidden")};k.addEventListener("click",a);function l(r){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(r).toLowerCase())}const M=async(r,c)=>{Pe(r,c).then(()=>{ie().then(d=>{O(d.data().name),v.classList.add("visually-hidden"),e(),location.reload()}).catch(d=>{alert(`Get user name error: ${d.code}`)})}).catch(d=>{alert(`Authorization error: ${d.code}`)})},b=()=>{const r=W.value.trim(),c=J.value.trim();l(r)?c.length>=5?M(r,c):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};w.addEventListener("click",b);const T=async(r,c,d)=>{Me(r,c).then(()=>{Te(d).then(()=>{O(d),v.classList.add("visually-hidden"),e(),location.reload()}).catch(y=>{alert(`Create account error: ${y.code}`),je().then(()=>{}).catch(P=>{alert(`Create account error: ${P.code}`)})})}).catch(y=>{alert(`Create account error: ${y.code}`)})},I=()=>{const r=W.value.trim(),c=J.value.trim(),d=B.value.trim();l(r)?c.length>=5?d.length>0&&T(r,c,d):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};S.addEventListener("click",I)}function Ne(){$.classList.remove("visually-hidden"),C.classList.add("visually-hidden"),L.classList.remove(".auth-toggler-active"),k.classList.add(".auth-toggler-active"),B.classList.add("visually-hidden"),S.classList.add("visually-hidden"),w.classList.remove("visually-hidden")}let K=document.getElementById("auth-password"),$=document.querySelector(".locked-pass-icon"),C=document.querySelector(".opened-pass-icon"),_=!1;function re(){_=!_,_?(K.type="text",$.classList.add("visually-hidden"),C.classList.remove("visually-hidden")):(K.type="password",$.classList.remove("visually-hidden"),C.classList.add("visually-hidden"))}$.parentNode.addEventListener("click",re);C.parentNode.addEventListener("click",re);document.addEventListener("DOMContentLoaded",function(){let e=window.location.href;document.querySelectorAll(".nav-item").forEach(function(o){o.querySelector("a").href===e&&o.classList.add("active-page")}),We().then(o=>{let n=document.querySelector(".menu-auth-icon use"),i=document.querySelector(".auth-link"),a=document.querySelector(".sign-out"),l=document.querySelector(".sign-up");o?(n.setAttribute("href","/images/header/header-defs.svg#icon-fi-ss-caret-down-1"),i.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),l.classList.add("visually-hidden")):(n.setAttribute("href","/images/header/header-defs.svg#icon-arrow-narrow-right-1"),i.classList.add("visually-hidden"),a.classList.add("visually-hidden"),l.classList.remove("visually-hidden"))})});const ze=document.querySelector(".sign-up"),He=document.querySelector(".auth-modal"),Fe=document.querySelector(".user-signed"),De=document.querySelector(".menu-auth-logo"),Re=document.querySelector(".sign-out"),ce=document.querySelector(".js-logout");async function We(){const e=await _e();return e&&ie().then(t=>{O(t.data().name)}),e}ze.addEventListener("click",()=>{He.classList.remove("visually-hidden"),Ne(),Ue()});Re.addEventListener("click",()=>{ce.classList.remove("visually-hidden")});ce.addEventListener("click",()=>{ae()});const O=e=>{Fe.textContent=e,De.classList.remove("visually-hidden")},Je=document.querySelector(".nav-mobile-menu"),V=document.querySelector(".burger use");let j=!1;Je.addEventListener("click",Ke);function Ke(){j=!j,j?(V.setAttribute("href","/images/header/header-defs.svg#icon-close-1"),Ve()):(V.setAttribute("href","/images/header/header-defs.svg#icon-burger-1"),Ge())}function Ve(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню открыто"),e.style.display="block"}function Ge(){let e=document.querySelector(".js-mobile-menu");console.log("Мобильное меню закрыто"),e.style.display="none"}const Ye=document.getElementById("open-mobile-menu"),le=document.querySelector(".js-mobile-menu"),Ze=document.querySelector(".button-home"),Qe=document.querySelector(".button-shopping-list"),Xe=document.querySelector(".button-log-out");Ye.addEventListener("click",et);Ze.addEventListener("click",tt);Qe.addEventListener("click",ot);Xe.addEventListener("click",st);function et(e){le.style.display="block"}function tt(e){window.location.href="/index.html",le.style.display="none"}function ot(e){window.location.href="shopping-list.html"}function st(e){ae(),window.location.href="/index.html"}console.log("el",s);const de="booksList";function N(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".js-book-on-click");console.log(t);const o=t.dataset.id;console.log("bookId",o),oe(o).then(n=>{const{book_image:i,title:a,author:l,description:M,buy_links:b}=n,T=b[0].url,I=b[1].url,r=z();console.log("localStorage ",r);let c;r.length===0||!r.find(P=>P._id===o)?c="Add to shopping list":c="Remove from the shopping list";const d=it(i,a,l,M,T,I,c),y=Ae.create(`
    <div class="popup-modal">${d}</div>    
`);y.show(),s.buttonAddToList=document.querySelector(".popup-button"),s.buttonAddToList.addEventListener("click",at.bind(n)),document.addEventListener("keydown",ge.bind(y))}).catch(n=>{alert(`Error: ${n}`)}).finally(()=>{})}function nt(e){const t=z();t.push(e),ue(t)}function z(){try{const e=localStorage.getItem(de);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function ue(e){localStorage.setItem(de,JSON.stringify(e))}function it(e,t,o,n,i,a,l){return`
    <div class="popup-info">
      <div class="popup-cover">
        <img class="popup-img" src="${e}" alt="${t}" />
      </div>
      <div class="popup-about">
        <h2 class="popup-title">${t}</h2>
        <p class="popup-author">${o}</p>
        <p class="popup-descr">${n}</p>
        <ul class="popup-store-list">
          <li class="popup-store popup-store-amazon">
            <a href="${i}">
            <img src="../images/book-popup/amazon.svg" alt="" />
            </a>
          </li>
          <li class="popup-store popup-store-apple">
            <a href="${a}">
            <img src="../images/book-popup/appleBooks.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <button class="popup-button">${l}</button>
    `}const pe=document.querySelector(".aaa");console.log(pe);pe.addEventListener("click",N);function at(){const e=this;console.log(e),s.buttonAddToList.textContent==="Add to shopping list"?(nt(e),s.buttonAddToList.textContent="Remove from the shopping list"):(rt(e),s.buttonAddToList.textContent="Add to shopping list")}function rt({_id:e}){console.log("in remove",e);const o=z().filter(n=>String(n._id)!==e);ue(o)}function ge(e){e.key==="Escape"&&(this.close(),document.removeEventListener("keydown",ge))}function ct(){document.querySelector(".loader-overlay").style.display="block"}function lt(){document.querySelector(".loader-overlay").style.display="none"}async function H(e){try{ct();const t=await te(e);lt();const o=ut(t),n=dt(e);s.list.innerHTML=`<h1 class="selected-category-title js-category-title">${n}</h1><ul class="selected-category-list js-category-box">`+o+"</ul>",s.categoryBox=document.querySelector(".js-category-box"),s.categoryBox.addEventListener("click",N)}catch(t){console.log(t)}}function dt(e){const t=e.split(" "),o=Math.ceil(t.length/2),n=t.slice(0,o).join(" "),i=t.slice(o).join(" ");return`
        ${n} <span class="second-half">${i}</span>
    `}function ut(e){return e.map(({author:t,title:o,book_image:n,_id:i})=>`<li class="card-wrapper  js-book-on-click" data-id="${i}">
                 <img class="selected-category-img" src="${n}" alt="${o}">
                 <h2 class="selected-category-book-title">${o}</h2>
                 <p class="selected-category-book-author">${t}</p>
                </li>
   `).join("")}H("Trade Fiction Paperback");me();function me(){ee().then(e=>{const t=e.map((o,n)=>`
      <div>
        <h3 class="top-title">${o.list_name}</h3>
        <div class="swiper">
          <ul class="list-item swiper-wrapper">
            ${o.books.slice(0,5).map(i=>`
              <li class="li-top js-book-on-click swiper-slide" data-id="${i._id}">
               <div class="card-container">
          <div class="card">
            <img class="img-top" src="${i.book_image||"./images/shopping-list-sec/empty_page_mobile_1x.png"}" alt="Зображення відсутнє" />

            <div class="overlay">
               <p class="quick-view">quick view</p>
             </div>
          </div>
       </div>
                <p class="top-bookTitle">${i.title}</p>
                <p class="top-bookAuthor">${i.author}</p>
              </li>`).join("")}
          </ul>
        </div>
      </div>
        <div class="top-button">
          <button class="top-bth top-bth-js" data-category="${o.list_name}" type="submit">see more</button>
        </div>
      `).join("");s.list.innerHTML='<h1 class="top-title-boks">Best Sellers <span class="top-title-span">Books</span></h1><div class="list-top" id="list">'+t+"</div>",s.topOfCatecory=document.querySelectorAll(".list-item"),s.topOfCatecory.forEach(o=>o.addEventListener("click",N)),s.buttonSeeMore=document.querySelectorAll(".top-bth-js"),s.buttonSeeMore.forEach(o=>{o.addEventListener("click",pt)})}).catch(e=>{console.log("Помилка отримання або обробки даних:",e)}).finally(()=>{})}function pt(e){const t=e.target.dataset.category.trim();H(t)}(async()=>{try{if(document.getElementById("index")===null)return;const o=(await X()).map(n=>n.list_name).sort().map(n=>`<li class="main-categories-list-item">${n}</li>`).join("");s.mainCategoriesList.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+o,s.mainCategoriesList.addEventListener("click",gt)}catch(e){console.log("An error:",e)}})();async function gt(e){if(e.target.classList.contains("main-categories-list-item")){for(const t of s.mainCategoriesList.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active");try{e.target.textContent.trim()==="All categories"?me():H(e.target.textContent)}catch(t){console.log("An error occurred:",t)}}}const he=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"/images/support/save-children@1x.png",img2x:"/images/support/save-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"/images/support/hope@1x.png",img2x:"/images/support/hope@2x.png"},{title:"Medicins Sans Frontieres",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"/images/support/medical-corps@1x.png",img2x:"/images/support/medical-corps@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"/images/support/razom@1x.png",img2x:"/images/support/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"/images/support/against-hunger@1x.png",img2x:"/images/support/against-hunger@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"/images/support/prytula@1x.png",img2x:"/images/support/prytula@2x.png"},{title:"International Medical Corps",url:"https://u24.gov.ua/uk",img:"/images/support/sans-frontiers@1x.png",img2x:"/images/support/sans-frontiers@2x.png"},{title:"World vision",url:"https://www.msf.org/ukraine",img:"/images/support/world-vision@1x.png",img2x:"/images/support/world-vision@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"/images/support/united24@1x.png",img2x:"/images/support/united24@2x.png"}];Be();function mt(e){return e.map(({id:t,title:o,url:n,img:i,img2x:a})=>`
        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${i}" alt="${o}" srcset="${i} 1x, ${a} 2x" height="32">
            </a>
        </li>
        `).join("")}const E=document.querySelector(".js-suport-list"),F=document.querySelector(".support-arrow-down"),D=document.querySelector(".support-arrow-up");F.addEventListener("click",ht);D.addEventListener("click",ft);let G=0;he.forEach(e=>{e.id=G+1,G+=1});E.insertAdjacentHTML("afterbegin",mt(he));function ht(){F.classList.toggle("visually-hidden"),D.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)E.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)E.children[e].classList.remove("visually-hidden")}function ft(){F.classList.toggle("visually-hidden"),D.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)E.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)E.children[e].classList.toggle("visually-hidden")}localStorage.removeItem("books-list");const m=vt();let h=fe(),g=Math.ceil(m.length/h),u;window.addEventListener("load",()=>{document.getElementById("shopping")!==null&&(p(1),s.prevButton.addEventListener("click",()=>{p(u-1)}),s.nextButton.addEventListener("click",()=>{p(u+1)}),s.toEnd.addEventListener("click",()=>{p(g)}),s.toStart.addEventListener("click",()=>{p(1)}),document.getElementById("pagination-numbers").addEventListener("click",yt))});function yt(e){const t=e.target;if(t.classList.contains("pagination-page-number")){const o=Number(t.getAttribute("page-index"));p(o)}}function vt(){const e=JSON.parse(localStorage.getItem("booksList"));return e||[]}function fe(){return window.innerWidth<=767?4:3}function bt(){return window.innerWidth<=767?2:3}function Lt(e,t){return m?m.slice(e,t):[]}function kt(e){const t=document.createElement("button");t.classList.add("pagination-page-number"),t.classList.add("pagination-number"),t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),s.paginationNumbers.appendChild(t)}function Y(e,t){for(let o=e;o<=t;o++)kt(o)}function St(){u===1?(q(s.prevButton),q(s.toStart)):(A(s.prevButton),A(s.toStart)),g===u?(q(s.nextButton),q(s.toEnd)):(A(s.nextButton),A(s.toEnd))}function q(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function A(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}window.addEventListener("resize",()=>{h=fe(),p(u)});function p(e){u=e,ye(),St();const t=(e-1)*h,o=e*h,n=Lt(t,o);n.length!=0&&(s.shoppingList.innerHTML="",s.shoppingList.insertAdjacentHTML("afterbegin",wt(n)),s.shoppingList.addEventListener("click",Et)),g===1&&(s.paginationContainer.style.display="none"),m.length===0?(s.paginationContainer.classList.add("hidden"),s.emptyPage.classList.remove("hidden")):s.paginationContainer.classList.remove("hidden"),ve()}function ye(){document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==u&&e.classList.add("active")})}function ve(){const e=bt();if(s.paginationNumbers.innerHTML="",g=Math.ceil(m.length/h),u>g&&p(g),g<=e)Y(1,g);else{const t=Math.max(u-Math.floor(e/2),1),o=Math.min(t+e-1,g);if(t>1){const n=document.createElement("button");n.className="pagination-number",n.textContent="...",n.addEventListener("click",()=>{p(t-1)}),s.paginationNumbers.appendChild(n)}if(Y(t,o),o<g){const n=document.createElement("button");n.className="pagination-number",n.textContent="...",n.addEventListener("click",()=>{p(u+1)}),s.paginationNumbers.appendChild(n)}}ye()}function wt(e){return e.map(o=>`
            <li class="shopping-book-card" data-book-id="${o._id}">
                <div class="image-thumb">
                <picture>
                  <source srcset="${o.book_image}" type="image/jpg">
                  <img class="shopping-book-cover" srcset="/images/shopping-list-sec/plug_x2.png 2x, /images/shopping-list-sec/plug_x1.png 1x" src="/images/shopping-list-sec/plug_x1.png" alt="plug">
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
                        <use href="/images/shopping-list-sec/sprite.svg#trash"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${o.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="/images/shopping-list-sec/amazon.svg" width="32" height="11"/>
                  </a>
                  <a href="${o.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="/images/shopping-list-sec/appleBooks.svg" width="16" height="16"/>
                  </a>
                </div>
            </li>
`).join("")}function Et(e){const t=e.target.closest(".js-delete-book");if(!t)return;const o=t.closest(".shopping-book-card"),n=o.dataset.bookId,i=m.findIndex(a=>a._id===n);i!=-1&&(m.splice(i,1),localStorage.setItem("booksList",JSON.stringify(m)),o.remove(),h-m.length%h===h&&u>1&&p(u-1),p(u),ve())}const U=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?U.classList.add("show"):U.classList.remove("show")});U.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=btn-scroll-up-15587b29.js.map
