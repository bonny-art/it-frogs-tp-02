import{a as w,i as x,g as V,b as W,c as J,d as q,e as K,s as G,f as Q,h as Z}from"./vendor-b82aaa89.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();w.defaults.baseURL="https://books-backend.p.goit.global/books/";async function $(){const e=await w.get("category-list").then(t=>t.data);return console.log("список категорій",e),e}$();async function D(){const e=await w.get("top-books").then(t=>t.data);return console.log("топ 5 в кожній категорії",e),e}D();async function E(e){const t=await w.get(`category?category=${e}`).then(o=>o.data);return console.log("книги з вибраної категорії",t),t}E("Childrens Middle Grade Hardcover");async function C(e){const t=await w.get(`${e}`).then(o=>o.data);return console.log("вибрана книга",t),t}C("643282b1e85766588626a0dc");const X={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},N=x(X),M=V(N),m=W(N),ee=async(e,t)=>K(m,e,t),te=async e=>{const t=q(M,"users",m.currentUser.uid);return G(t,{name:e})},oe=async(e,t)=>Q(m,e,t),se=async()=>(await m._initializationPromise,m.currentUser!==null),ae=async()=>{const e=m.currentUser;return Z(e)},U=async()=>J(q(M,"users",m.currentUser.uid));document.addEventListener("DOMContentLoaded",function(){let e=window.location.href;document.querySelectorAll(".nav-item").forEach(function(o){o.querySelector("a").href===e&&o.classList.add("active-page")}),le().then(o=>{console.log(o);let a=document.querySelector(".menu-auth-icon use"),s=document.querySelector(".auth-link");o?(a.setAttribute("href","/images/header/header-defs.svg#icon-fi-ss-caret-down-1"),s.classList.remove("visually-hidden")):(a.setAttribute("href","/images/header/header-defs.svg#icon-arrow-narrow-right-1"),s.classList.add("visually-hidden"))})});const re=document.querySelector(".menu-auth"),ne=document.querySelector(".auth-modal"),ie=document.querySelector(".menu-username"),ce=document.querySelector(".menu-auth-logo");async function le(){const e=await se();return console.log(e),e&&U().then(t=>{L(t.data().name)}),e}re.addEventListener("click",()=>{ne.classList.remove("visually-hidden"),me(),ue()});const L=e=>{ie.textContent=e,ce.classList.remove("visually-hidden")},p=document.querySelector(".auth-modal"),O=document.querySelector(".auth-close-btn"),de=document.querySelector(".auth-container"),g=document.querySelector(".auth-toggler-sign-up"),k=document.querySelector(".auth-toggler-sign-in"),F=document.querySelector("#auth-name"),z=document.querySelector("#auth-email"),H=document.querySelector("#auth-password"),b=document.querySelector(".auth-sign-up"),f=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function ue(){function e(){O.removeEventListener("click",t),document.removeEventListener("click",o),document.removeEventListener("keydown",a),g.removeEventListener("click",s),k.removeEventListener("click",r),f.removeEventListener("click",T),b.removeEventListener("click",I)}function t(){p.classList.add("visually-hidden"),e()}O.addEventListener("click",t);const o=n=>{!n.composedPath().includes(de)&&n.composedPath().includes(p)&&(p.classList.add("visually-hidden"),e())};document.addEventListener("click",o);const a=n=>{n.key=="Escape"&&(p.classList.add("visually-hidden"),e())};document.addEventListener("keydown",a);const s=()=>{k.classList.remove("auth-toggler-active"),g.classList.add("auth-toggler-active"),F.classList.remove("visually-hidden"),b.classList.remove("visually-hidden"),f.classList.add("visually-hidden")};g.addEventListener("click",s);const r=()=>{g.classList.remove("auth-toggler-active"),k.classList.add("auth-toggler-active"),F.classList.add("visually-hidden"),b.classList.add("visually-hidden"),f.classList.remove("visually-hidden")};k.addEventListener("click",r);function l(n){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(n).toLowerCase())}const y=async(n,c)=>{oe(n,c).then(()=>{U().then(i=>{L(i.data().name),p.classList.add("visually-hidden"),e()}).catch(i=>{alert(`Get user name error: ${i.code}`)})}).catch(i=>{alert(`Authorization error: ${i.code}`)})},T=()=>{const n=z.value.trim(),c=H.value.trim();l(n)?c.length>=5?y(n,c):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};f.addEventListener("click",T);const P=async(n,c,i)=>{ee(n,c).then(()=>{te(i).then(()=>{L(i),p.classList.add("visually-hidden"),e()}).catch(B=>{alert(`Create account error: ${B.code}`),ae().then(()=>{}).catch(Y=>{alert(`Create account error: ${Y.code}`)})})}).catch(B=>{alert(`Create account error: ${B.code}`)})},I=()=>{const n=z.value.trim(),c=H.value.trim(),i=F.value.trim();l(n)?c.length>=5?i.length>0&&P(n,c,i):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};b.addEventListener("click",I)}function me(){g.classList.remove(".auth-toggler-active"),k.classList.add(".auth-toggler-active"),F.classList.add("visually-hidden"),b.classList.add("visually-hidden"),f.classList.remove("visually-hidden")}const pe={modalWindow:document.querySelector(".modal-window"),buttonAddToList:document.querySelector(".add-to-list")};function he(e){C(e).then(({book_image:t,title:o,author:a,description:s,buy_links:r})=>{const l=r[0].url,y=r[1].url;console.log(t),console.log(o),console.log(a),console.log(s),console.log(l),console.log(y),pe.modalWindow.innerHTML=ge(t,o,a,s,l,y)}).catch(t=>{Notify.failure(`Error: ${t}`)}).finally(()=>{})}function ge(e,t,o,a,s,r){return`
    <div class="book-image">
      <img class="img-book-cover" src="${e}" alt="${t}" />
    </div>
    <div>
      <h2 class="book-title">${t}</h2>
      <p class="book-author">${o}</p>
      <p class="book-descr">${a}</p>
    <ul>
      <li>
        <a href="${s}">
        <img src="../images/book-popup/amazon.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="${r}">
        <img src="../images/book-popup/appleBooks.svg" alt="" />
        </a>
      </li>
    </ul>
    </div>
    <button class="add-to-list"></button>
    `}he("643282b2e85766588626a144");const S=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?S.classList.add("show"):S.classList.remove("show")});S.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const A=document.querySelector(".main-categories-list");$().then(e=>{const t=e.data.map(o=>`<li class="main-categories-list-item">${o.list_name}</li>`).join("");A.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+t});A.addEventListener("click",e=>{if(e.target.classList.contains("main-categories-list-item")){for(const t of A.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active"),e.target.textContent==="All categories"?D().then(t=>{fromTopBlocks(t)}):E(e.target.textContent).then(t=>{fromSelectedBlocks(t,e.target.textContent)})}});const u={categoryTitle:document.querySelector(".js-category-title"),categoryBox:document.querySelector(".js-category-box"),shoppingList:document.querySelector(".js-shopping-list"),emptyPage:document.querySelector(".js-empty-page")};async function ke(e){try{const t=await E(e),o=we(t),a=fe(e);u.categoryBox.insertAdjacentHTML("afterbegin",o),u.categoryTitle.innerHTML=a}catch(t){console.log(t)}}ke("Hardcover Fiction");u.categoryBox.addEventListener("click",be);function be(e){if(e.target===e.currentTarget)return;const o=e.target.closest(".card-wrapper").dataset.id;return console.dir(o),o}function fe(e){const t=e.split(" "),o=Math.ceil(t.length/2),a=t.slice(0,o).join(" "),s=t.slice(o).join(" ");return`
        ${a} <span class="second-half">${s}</span>
    `}function we(e){return e.map(({author:t,title:o,book_image:a,_id:s})=>`<li class="card-wrapper" data-id="${s}">
                   <div class="book-img">
                      <img src="${a}" alt="${o}">
                   </div>
                   <h2 class="book-title">${o}</h2>
                   <p class="book-author">${t}</p>
                </li>
   `).join("")}console.log("el");const ye=[{_id:"643282b1e85766588626a0dc",list_name:"Advice How-To and Miscellaneous",date:"2023-04-09T09:28:38.946Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20",article_chapter_link:"",author:"Alison Roman",book_image:"https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg",book_image_width:402,book_image_height:500,book_review_link:"",book_uri:"nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8",contributor:"by Alison Roman",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"",first_chapter_link:"",price:"0.00",primary_isbn10:"1984826395",primary_isbn13:"9781984826398",publisher:"Clarkson Potter",rank:3,rank_last_week:0,sunday_review_link:"",title:"SWEET ENOUGH",updated_date:"2023-04-05 22:10:17",weeks_on_list:1,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781984826398?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT"}],__v:0},{_id:"643282b1e85766588626a080",list_name:"Advice How-To and Miscellaneous",date:"2023-04-01T00:00:00.000Z",age_group:"",amazon_product_url:"https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20",article_chapter_link:"",author:"James Clear",book_image:"https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",book_image_width:328,book_image_height:495,book_review_link:"",book_uri:"nyt://book/0398a355-c032-534e-a0af-647b06f0840d",contributor:"by James Clear",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"",first_chapter_link:"",price:"0.00",primary_isbn10:"0735211299",primary_isbn13:"9780735211292",publisher:"Avery",rank:1,rank_last_week:1,sunday_review_link:"",title:"ATOMIC HABITS",updated_date:"2023-04-05 22:10:16",weeks_on_list:175,buy_links:[{name:"Amazon",url:"https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780735211292?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT"}],__v:0},{_id:"643282b1e85766588626a0ba",list_name:"Advice How-To and Miscellaneous",date:"2023-04-09T09:28:38.643Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20",article_chapter_link:"",author:"Shannon Bream",book_image:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",book_image_width:329,book_image_height:500,book_review_link:"",book_uri:"nyt://book/dc28bfbb-6ba7-54c6-a60b-272a327604ab",contributor:"by Shannon Bream",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"",first_chapter_link:"",price:"0.00",primary_isbn10:"0063226057",primary_isbn13:"9780063226050",publisher:"Broadside",rank:2,rank_last_week:0,sunday_review_link:"",title:"THE LOVE STORIES OF THE BIBLE SPEAK",updated_date:"2023-04-05 22:10:17",weeks_on_list:1,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780063226050?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT"}],__v:0}];let Fe=JSON.stringify(ye);localStorage.setItem("books-list",Fe);const h=JSON.parse(localStorage.getItem("books-list"));function ve(){h?u.shoppingList.insertAdjacentHTML("afterbegin",R()):u.emptyPage.classList.remove("hidden")}ve();function R(){return h.map(t=>`
            <div class="book-card" data-book-id="${t._id}">
                <div class="image-thumb">
                <img
                    class="book-cover"
                    src="${t.book_image}"
                    alt="${t.title}"
                    loading="lazy"
                />
                </div>
                <div class="card-info">
                    <h3 class="book-title">${t.title}</h3>
                    <p class="book-category">${t.list_name}</p>
                    <p class="book-description">${t.description}</p>
                    <p class="book-author">${t.author}</p>
                </div>
                <button type="button" class="delete-btn js-delete-book">
                    <svg class="delete-svg" width="16" height="16">
                        <use href="./images/shopping_list_sec/sprite.svg#trash-03"></use>
                    </svg>
                </button>
                <div class="trade-fairs">
                  <a href="${t.buy_links[0].url}" target="_blank">
                    <img class="amazon-img" src="./images/shopping_list_sec/amazon.svg" width="32" height="11"/>
                  </a>
                  <a href="${t.buy_links[1].url}" target="_blank">
                    <img class="apple-books-img" src="./images/shopping_list_sec/appleBooks.svg" width="16" height="16"/>
                  </a>
                </div>
            </div>
`).join("")}u.shoppingList.addEventListener("click",Be);function Be(e){if(!e.target.parentNode.classList.contains("js-delete-book"))return;const o=e.target.closest(".book-card").dataset.bookId,a=h.find(s=>s._id===o);h.splice(h.indexOf(a),1),localStorage.setItem("books-list",JSON.stringify(h)),u.shoppingList.innerHTML="",u.shoppingList.insertAdjacentHTML("afterbegin",R())}const _e=document.querySelector(".main-support-scroll"),_=document.querySelector(".main-support-list");_e.addEventListener("click",()=>{let e=[..._.children].slice(0,1);_.firstChild.remove(),_.appendChild(e[0])});const v=document.querySelector("body"),Le=document.querySelector(".btn"),d=document.querySelector(".btn__icon");function j(e){localStorage.setItem("darkmode",e)}function Se(){const e=localStorage.getItem("darkmode");e?e=="true"?(v.classList.add("darkmode"),d.classList.add("fa-moon")):e=="false"&&d.classList.add("fa-sun"):(j(!1),d.classList.add("fa-sun"))}Se();Le.addEventListener("click",function(){v.classList.toggle("darkmode"),d.classList.add("animated"),j(v.classList.contains("darkmode")),v.classList.contains("darkmode")?(d.classList.remove("fa-sun"),d.classList.add("fa-moon")):(d.classList.remove("fa-moon"),d.classList.add("fa-sun")),setTimeout(function(){d.classList.remove("animated")},500)});
//# sourceMappingURL=theme-dark-light-55877d0d.js.map
