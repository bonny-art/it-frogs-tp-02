import{a as w,i as ne,g as ie,b as re,c as le,d as N,s as ce,e as de,f as ue,h as pe,j as ge,k as me}from"./vendor-369467b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const n={categoryTitle:document.querySelector(".js-category-title"),categoryBox:document.querySelector(".js-category-box"),shoppingList:document.querySelector(".js-shopping-list"),emptyPage:document.querySelector(".js-empty-page"),body:document.querySelector("body"),toggleBtn:document.querySelector(".tgl-btn"),toggleIcon:document.querySelector(".tgl-btn__icon"),bookPopup:"",buttonAddToList:""};function he(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}function U(e){localStorage.setItem("darkmode",e)}function ke(){const e=localStorage.getItem("darkmode");e?e=="true"?(n.body.classList.add("darkmode"),n.toggleIcon.classList.add("fa-moon")):e=="false"&&n.toggleIcon.classList.add("fa-sun"):(U(!1),n.toggleIcon.classList.add("fa-sun"))}ke();n.toggleBtn.addEventListener("click",function(){n.body.classList.toggle("darkmode"),n.toggleIcon.classList.add("animated"),U(n.body.classList.contains("darkmode")),n.body.classList.contains("darkmode")?(n.toggleIcon.classList.remove("fa-sun"),n.toggleIcon.classList.add("fa-moon")):(n.toggleIcon.classList.remove("fa-moon"),n.toggleIcon.classList.add("fa-sun")),setTimeout(function(){n.toggleIcon.classList.remove("animated")},500)});w.defaults.baseURL="https://books-backend.p.goit.global/books/";async function j(){const e=await w.get("category-list").then(t=>t.data);return console.log("список категорій",e),e}j();async function P(){const e=await w.get("top-books").then(t=>t.data);return console.log("топ 5 в кожній категорії",e),e}P();async function R(e){const t=await w.get(`category?category=${e}`).then(s=>s.data);return console.log("книги з вибраної категорії",t),t}R("Childrens Middle Grade Hardcover");async function Y(e){const t=await w.get(`${e}`).then(s=>s.data);return console.log("вибрана книга",t),t}Y("643282b1e85766588626a0dc");const be={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},V=ne(be),W=ie(V),u=re(V),fe=async(e,t)=>de(u,e,t),ye=async e=>{const t=N(W,"users",u.currentUser.uid);return ue(t,{name:e})},we=async(e,t)=>pe(u,e,t),ve=async()=>(await u._initializationPromise,u.currentUser!==null),Le=async()=>{const e=u.currentUser;return ge(e)},J=async()=>le(N(W,"users",u.currentUser.uid));function K(){ce(u).then(()=>{alert("Выход выполнен успешно")})}document.addEventListener("DOMContentLoaded",function(){let e=window.location.href;document.querySelectorAll(".nav-item").forEach(function(s){s.querySelector("a").href===e&&s.classList.add("active-page")}),Ee().then(s=>{let a=document.querySelector(".menu-auth-icon use"),o=document.querySelector(".auth-link"),i=document.querySelector(".sign-out"),c=document.querySelector(".sign-up");s?(a.setAttribute("href","/images/header/header-defs.svg#icon-fi-ss-caret-down-1"),o.classList.remove("visually-hidden"),i.classList.remove("visually-hidden"),c.classList.add("visually-hidden")):(a.setAttribute("href","/images/header/header-defs.svg#icon-arrow-narrow-right-1"),o.classList.add("visually-hidden"),i.classList.add("visually-hidden"),c.classList.remove("visually-hidden"))})});const Fe=document.querySelector(".sign-up"),_e=document.querySelector(".auth-modal"),Se=document.querySelector(".user-signed"),Be=document.querySelector(".menu-auth-logo"),Ae=document.querySelector(".sign-out"),G=document.querySelector(".js-logout");async function Ee(){const e=await ve();return e&&J().then(t=>{E(t.data().name)}),e}Fe.addEventListener("click",()=>{_e.classList.remove("visually-hidden"),qe(),Me()});Ae.addEventListener("click",()=>{G.classList.remove("visually-hidden")});G.addEventListener("click",()=>{K(),location.reload()});const E=e=>{Se.textContent=e,Be.classList.remove("visually-hidden")},Te=document.querySelector(".nav-mobile-menu"),q=document.querySelector(".burger use");let A=!1;Te.addEventListener("click",Ie);function Ie(){A=!A,A?(q.setAttribute("href","/images/header/header-defs.svg#icon-close-1"),$e()):(q.setAttribute("href","/images/header/header-defs.svg#icon-burger-1"),Oe())}function $e(){console.log("Мобильное меню открыто")}function Oe(){console.log("Мобильное меню закрыто")}const p=document.querySelector(".auth-modal"),C=document.querySelector(".auth-close-btn"),xe=document.querySelector(".auth-container"),h=document.querySelector(".auth-toggler-sign-up"),k=document.querySelector(".auth-toggler-sign-in"),F=document.querySelector("#auth-name"),H=document.querySelector("#auth-email"),z=document.querySelector("#auth-password"),b=document.querySelector(".auth-sign-up"),f=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function Me(){function e(){C.removeEventListener("click",t),document.removeEventListener("click",s),document.removeEventListener("keydown",a),h.removeEventListener("click",o),k.removeEventListener("click",i),f.removeEventListener("click",m),b.removeEventListener("click",v)}function t(){p.classList.add("visually-hidden"),e()}C.addEventListener("click",t);const s=r=>{!r.composedPath().includes(xe)&&r.composedPath().includes(p)&&(p.classList.add("visually-hidden"),e())};document.addEventListener("click",s);const a=r=>{r.key=="Escape"&&(p.classList.add("visually-hidden"),e())};document.addEventListener("keydown",a);const o=()=>{k.classList.remove("auth-toggler-active"),h.classList.add("auth-toggler-active"),F.classList.remove("visually-hidden"),b.classList.remove("visually-hidden"),f.classList.add("visually-hidden")};h.addEventListener("click",o);const i=()=>{h.classList.remove("auth-toggler-active"),k.classList.add("auth-toggler-active"),F.classList.add("visually-hidden"),b.classList.add("visually-hidden"),f.classList.remove("visually-hidden")};k.addEventListener("click",i);function c(r){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(r).toLowerCase())}const _=async(r,l)=>{we(r,l).then(()=>{J().then(d=>{E(d.data().name),p.classList.add("visually-hidden"),e(),location.reload()}).catch(d=>{alert(`Get user name error: ${d.code}`)})}).catch(d=>{alert(`Authorization error: ${d.code}`)})},m=()=>{const r=H.value.trim(),l=z.value.trim();c(r)?l.length>=5?_(r,l):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};f.addEventListener("click",m);const S=async(r,l,d)=>{fe(r,l).then(()=>{ye(d).then(()=>{E(d),p.classList.add("visually-hidden"),e(),location.reload()}).catch(L=>{alert(`Create account error: ${L.code}`),Le().then(()=>{}).catch(B=>{alert(`Create account error: ${B.code}`)})})}).catch(L=>{alert(`Create account error: ${L.code}`)})},v=()=>{const r=H.value.trim(),l=z.value.trim(),d=F.value.trim();c(r)?l.length>=5?d.length>0&&S(r,l,d):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};b.addEventListener("click",v)}function qe(){h.classList.remove(".auth-toggler-active"),k.classList.add(".auth-toggler-active"),F.classList.add("visually-hidden"),b.classList.add("visually-hidden"),f.classList.remove("visually-hidden")}console.log("el",n);const Z="booksList";function Ce(e){if(e.target===e.currentTarget)return;const t=e.target.closest(".js-book-on-click");console.log(t);const s=t.dataset.id;console.log("bookId",s),console.log("el.bookPopup"),n.bookPopup,Y(s).then(a=>{const{book_image:o,title:i,author:c,description:_,buy_links:m}=a,S=m[0].url,v=m[1].url,r=I();console.log("localStorage ",r);let l;r.length===0||!r.find(B=>B._id===s)?l="Add to shopping list":l="Remove from the shopping list";const d=ze(o,i,c,_,S,v,l);me.create(`
    <div class="modal-window">${d}</div>    
`).show(),n.buttonAddToList=document.querySelector(".add-to-list"),n.buttonAddToList.addEventListener("click",De.bind(a))}).catch(a=>{alert(`Error: ${a}`)}).finally(()=>{})}function He(e){const t=I();t.push(e),Q(t)}function I(){try{const e=localStorage.getItem(Z);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function Q(e){localStorage.setItem(Z,JSON.stringify(e))}function ze(e,t,s,a,o,i,c){return`
    <div class="book-image">
      <img class="img-book-cover" src="${e}" alt="${t}" />
    </div>
    <div>
      <h2 class="book-title">${t}</h2>
      <p class="book-author">${s}</p>
      <p class="book-descr">${a}</p>
    <ul>
      <li>
        <a href="${o}">
        <img src="../images/book-popup/amazon.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="${i}">
        <img src="../images/book-popup/appleBooks.svg" alt="" />
        </a>
      </li>
    </ul>
    </div>
    <button class="add-to-list">${c}</button>
    `}const X=document.querySelector(".aaa");console.log(X);X.addEventListener("click",Ce);function De(){const e=this;console.log(e),n.buttonAddToList.textContent==="Add to shopping list"?(He(e),n.buttonAddToList.textContent="Remove from the shopping list"):(Ne(e),n.buttonAddToList.textContent="Add to shopping list")}function Ne({_id:e}){console.log("in remove",e);const s=I().filter(a=>String(a._id)!==e);Q(s)}const T=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?T.classList.add("show"):T.classList.remove("show")});T.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});async function Ue(){try{const t=await(await fetch("https://books-backend.p.goit.global/books/top-books")).json();console.log(t);const s=t.map(o=>`<div>
        <h3 class="top-title">${o.list_name}</h3>
<ul class="list-item ">
  <li class="li-top">
    <img class="img-top" src="${o.books[0].book_image}" alt="" />
    <p class="top-bookTitle">${o.books[0].title}</p>
    <p class="top-bookAuthor">${o.books[0].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${o.books[1].book_image}" alt="" />
    <p class="top-bookTitle">${o.books[1].title}</p>
    <p class="top-bookAuthor">${o.books[1].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${o.books[2].book_image}" alt="" />
    <p class="top-bookTitle">${o.books[2].title}</p>
    <p class="top-bookAuthor">${o.books[2].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${o.books[3].book_image}" alt="" />
    <p class="top-bookTitle">${o.books[3].title}</p>
    <p class="top-bookAuthor">${o.books[3].author}</p>
  </li>
  <li class="li-top">
    <img class="img-top" src="${o.books[4].book_image}" alt="" />
    <p class="top-bookTitle">${o.books[4].title}</p>
    <p class="top-bookAuthor">${o.books[4].author}</p>
  </li>
</ul>
<div class="top-button"><button class="top-bth" type="submit">see more</button></div>
        </div>`).join(""),a=document.getElementById("list");a.innerHTML=s}catch(e){console.error("Помилка отримання або обробки даних:",e)}}Ue();const ee=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./images/support/save-children@1x.png",img2x:"./images/support/save-children@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./images/support/hope@1x.png",img2x:"./images/support/hope@2x.png"},{title:"Medicins Sans Frontieres",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./images/support/medical-corps@1x.png",img2x:"./images/support/medical-corps@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./images/support/razom@1x.png",img2x:"./images/support/razom@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./images/support/against-hunger@1x.png",img2x:"./images/support/against-hunger@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./images/support/prytula@1x.png",img2x:"./images/support/prytula@2x.png"},{title:"International Medical Corps",url:"https://u24.gov.ua/uk",img:"./images/support/sans-frontiers@1x.png",img2x:"./images/support/sans-frontiers@2x.png"},{title:"World vision",url:"https://www.msf.org/ukraine",img:"./images/support/world-vision@1x.png",img2x:"./images/support/world-vision@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./images/support/united24@1x.png",img2x:"./images/support/united24@2x.png"}];he();function je(e){return e.map(({id:t,title:s,url:a,img:o,img2x:i})=>`
        <li class="support-items">
            <a class="support-link" href="${a}" target="_blank" rel="noopener noreferrer">
                <span>0${t}</span>
                <img class="support-img" src="${o}" alt="${s}" srcset="${o} 1x, ${i} 2x" height="32">
            </a>
        </li>
        `).join("")}const y=document.querySelector(".js-suport-list"),$=document.querySelector(".support-arrow-down"),O=document.querySelector(".support-arrow-up");$.addEventListener("click",Pe);O.addEventListener("click",Re);let D=0;ee.forEach(e=>{e.id=D+1,D+=1});y.insertAdjacentHTML("afterbegin",je(ee));function Pe(){$.classList.toggle("visually-hidden"),O.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)y.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)y.children[e].classList.remove("visually-hidden")}function Re(){$.classList.toggle("visually-hidden"),O.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)y.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)y.children[e].classList.toggle("visually-hidden")}async function te(e){try{const t=await R(e),s=We(t),a=Ve(e);n.categoryBox.insertAdjacentHTML("afterbegin",s),n.categoryTitle.innerHTML=a}catch(t){console.log(t)}}te("Hardcover Fiction");n.categoryBox.addEventListener("click",Ye);function Ye(e){if(e.target===e.currentTarget)return;const s=e.target.closest(".card-wrapper").dataset.id;return console.dir(s),s}function Ve(e){const t=e.split(" "),s=Math.ceil(t.length/2),a=t.slice(0,s).join(" "),o=t.slice(s).join(" ");return`
        ${a} <span class="second-half">${o}</span>
    `}function We(e){return e.map(({author:t,title:s,book_image:a,_id:o})=>`<li class="card-wrapper" data-id="${o}">
                   <div class="book-img">
                      <img src="${a}" alt="${s}">
                   </div>
                   <h2 class="book-title">${s}</h2>
                   <p class="book-author">${t}</p>
                </li>
   `).join("")}const x=document.querySelector(".main-categories-list");(async()=>{try{const t=(await j()).data.map(s=>`<li class="main-categories-list-item">${s.list_name}</li>`).join("");x.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+t}catch(e){console.error("An error:",e)}})();x.addEventListener("click",Je);async function Je(e){if(e.target.classList.contains("main-categories-list-item")){for(const t of x.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active");try{if(e.target.textContent==="All categories"){const t=await P();xxx(t)}else{const t=await te(e.target.textContent);yyy(t,e.target.textContent)}}catch(t){console.error("An error occurred:",t)}}}console.log("el");const Ke=[{_id:"643282b1e85766588626a0dc",list_name:"Advice How-To and Miscellaneous",date:"2023-04-09T09:28:38.946Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20",article_chapter_link:"",author:"Alison Roman",book_image:"https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg",book_image_width:402,book_image_height:500,book_review_link:"",book_uri:"nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8",contributor:"by Alison Roman",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"",first_chapter_link:"",price:"0.00",primary_isbn10:"1984826395",primary_isbn13:"9781984826398",publisher:"Clarkson Potter",rank:3,rank_last_week:0,sunday_review_link:"",title:"SWEET ENOUGH",updated_date:"2023-04-05 22:10:17",weeks_on_list:1,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781984826398?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT"}],__v:0},{_id:"643282b1e85766588626a080",list_name:"Advice How-To and Miscellaneous",date:"2023-04-01T00:00:00.000Z",age_group:"",amazon_product_url:"https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20",article_chapter_link:"",author:"James Clear",book_image:"https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",book_image_width:328,book_image_height:495,book_review_link:"",book_uri:"nyt://book/0398a355-c032-534e-a0af-647b06f0840d",contributor:"by James Clear",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"",first_chapter_link:"",price:"0.00",primary_isbn10:"0735211299",primary_isbn13:"9780735211292",publisher:"Avery",rank:1,rank_last_week:1,sunday_review_link:"",title:"ATOMIC HABITS",updated_date:"2023-04-05 22:10:16",weeks_on_list:175,buy_links:[{name:"Amazon",url:"https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780735211292?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT"}],__v:0},{_id:"643282b1e85766588626a0ba",list_name:"Advice How-To and Miscellaneous",date:"2023-04-09T09:28:38.643Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20",article_chapter_link:"",author:"Shannon Bream",book_image:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",book_image_width:329,book_image_height:500,book_review_link:"",book_uri:"nyt://book/dc28bfbb-6ba7-54c6-a60b-272a327604ab",contributor:"by Shannon Bream",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"",first_chapter_link:"",price:"0.00",primary_isbn10:"0063226057",primary_isbn13:"9780063226050",publisher:"Broadside",rank:2,rank_last_week:0,sunday_review_link:"",title:"THE LOVE STORIES OF THE BIBLE SPEAK",updated_date:"2023-04-05 22:10:17",weeks_on_list:1,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780063226050?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT"}],__v:0}];let Ge=JSON.stringify(Ke);localStorage.setItem("books-list",Ge);const g=JSON.parse(localStorage.getItem("books-list"));function Ze(){g?n.shoppingList.insertAdjacentHTML("afterbegin",oe()):n.emptyPage.classList.remove("hidden")}Ze();function oe(){return g.map(t=>`
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
`).join("")}n.shoppingList.addEventListener("click",Qe);function Qe(e){if(!e.target.parentNode.classList.contains("js-delete-book"))return;const s=e.target.closest(".book-card").dataset.bookId,a=g.find(o=>o._id===s);g.splice(g.indexOf(a),1),localStorage.setItem("books-list",JSON.stringify(g)),n.shoppingList.innerHTML="",n.shoppingList.insertAdjacentHTML("afterbegin",oe())}const se=document.getElementById("open-mobile-menu"),M=document.querySelector(".js-mobile-menu"),ae=document.querySelector(".button-home"),Xe=document.querySelector(".button-shopping-list"),et=document.querySelector(".button-log-out");console.log(se);console.log(M);console.log(ae);se.addEventListener("click",tt);ae.addEventListener("click",ot);Xe.addEventListener("click",st);et.addEventListener("click",at);function tt(e){M.style.display="block"}function ot(e){window.location.href="/index.html",M.style.display="none"}function st(e){window.location.href="shopping-list.html"}function at(e){K(),window.location.href="/index.html"}
//# sourceMappingURL=mobile-menu-87b2f8d9.js.map
