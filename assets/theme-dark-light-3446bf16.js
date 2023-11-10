import{a as v,i as H,g as R,b as W,o as K,c as G,d as z,s as Y,e as J,f as Q,h as V}from"./vendor-c21e0a22.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}})();v.defaults.baseURL="https://books-backend.p.goit.global/books/";async function B(){const e=await v.get("category-list").then(t=>t.data);return console.log("список категорій",e),e}B();async function T(){const e=await v.get("top-books").then(t=>t.data);return console.log("топ 5 в кожній категорії",e),e}T();async function $(e){const t=await v.get(`category?category=${e}`).then(c=>c.data);return console.log("книги з вибраної категорії",t),t}$("Childrens Middle Grade Hardcover");async function X(e){const t=await v.get(`${e}`).then(c=>c.data);return console.log("вибрана книга",t),t}X("643282b1e85766588626a0dc");const Z={apiKey:"AIzaSyCSIOIvaBcm09OifpCpfKPAwnfy_t377rM",authDomain:"testfirebase-422a2.firebaseapp.com",databaseURL:"https://testfirebase-422a2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testfirebase-422a2",storageBucket:"testfirebase-422a2.appspot.com",messagingSenderId:"589688307018",appId:"1:589688307018:web:e010a81c7decb75d56d5b3"},M=H(Z),O=R(M),l=W(M),ee=async(e,t)=>G(l,e,t),te=async e=>{const t=z(O,"users",l.currentUser.uid);return Y(t,{name:e})},se=async(e,t)=>J(l,e,t),ae=async()=>(await l._initializationPromise,l.currentUser!==null),oe=async()=>{const e=l.currentUser;return Q(e)},P=async()=>V(z(O,"users",l.currentUser.uid));function ne(){K(l,e=>e?(console.log("User is signed in"),!0):(console.log("User is signed out"),!1))}const ce=document.querySelector(".menu-auth"),re=document.querySelector(".auth-modal"),x=document.querySelector(".menu-username"),N=document.querySelector(".menu-auth-logo"),ie=async()=>{await ae()&&P().then(t=>{b(t.data().name)})};ne();function le(){x.textContent="Sign In",N.classList.add("visually-hidden"),ie()}ce.addEventListener("click",()=>{re.classList.remove("visually-hidden"),me(),ue()});const b=e=>{x.textContent=e,N.classList.remove("visually-hidden")};le();const u=document.querySelector(".auth-modal"),A=document.querySelector(".auth-close-btn"),de=document.querySelector(".auth-form"),h=document.querySelector(".auth-toggler-sign-up"),g=document.querySelector(".auth-toggler-sign-in"),L=document.querySelector("#auth-name"),C=document.querySelector("#auth-email"),I=document.querySelector("#auth-password"),f=document.querySelector(".auth-sign-up"),y=document.querySelector(".auth-sign-in");document.querySelector("auth-logged-container");function ue(){function e(){A.removeEventListener("click",t),document.removeEventListener("click",c),document.removeEventListener("keydown",m),h.removeEventListener("click",s),g.removeEventListener("click",o),y.removeEventListener("click",q),f.removeEventListener("click",U)}function t(){u.classList.add("visually-hidden"),e()}A.addEventListener("click",t);const c=a=>{!a.composedPath().includes(de)&&a.composedPath().includes(u)&&(u.classList.add("visually-hidden"),e())};document.addEventListener("click",c);const m=a=>{a.key=="Escape"&&(u.classList.add("visually-hidden"),e())};document.addEventListener("keydown",m);const s=()=>{g.classList.remove("auth-toggler-active"),h.classList.add("auth-toggler-active"),L.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),y.classList.add("visually-hidden")};h.addEventListener("click",s);const o=()=>{h.classList.remove("auth-toggler-active"),g.classList.add("auth-toggler-active"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),y.classList.remove("visually-hidden")};g.addEventListener("click",o);function d(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(a).toLowerCase())}const _=async(a,r)=>{se(a,r).then(()=>{P().then(n=>{b(n.data().name),u.classList.add("visually-hidden"),e()}).catch(n=>{alert(`Get user name error: ${n.code}`)})}).catch(n=>{alert(`Authorization error: ${n.code}`)})},q=()=>{const a=C.value.trim(),r=I.value.trim();d(a)?r.length>=5?_(a,r):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};y.addEventListener("click",q);const F=async(a,r,n)=>{ee(a,r).then(()=>{te(n).then(()=>{b(n),u.classList.add("visually-hidden"),e()}).catch(k=>{alert(`Create account error: ${k.code}`),oe().then(()=>{}).catch(j=>{alert(`Create account error: ${j.code}`)})})}).catch(k=>{alert(`Create account error: ${k.code}`)})},U=()=>{const a=C.value.trim(),r=I.value.trim(),n=L.value.trim();d(a)?r.length>=5?n.length>0&&F(a,r,n):alert("The password must be at least 5 characters long!"):alert("Wrong email!")};f.addEventListener("click",U)}function me(){h.classList.remove(".auth-toggler-active"),g.classList.add(".auth-toggler-active"),L.classList.add("visually-hidden"),f.classList.add("visually-hidden"),y.classList.remove("visually-hidden")}const w=document.querySelector("#scrollToTopButton");window.addEventListener("scroll",()=>{window.pageYOffset>500?w.classList.add("show"):w.classList.remove("show")});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const E=document.querySelector(".main-categories-list");B().then(e=>{const t=e.data.map(c=>`<li class="main-categories-list-item">${c.list_name}</li>`).join("");E.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+t});E.addEventListener("click",e=>{if(e.target.classList.contains("main-categories-list-item")){for(const t of E.children)t.classList.remove("main-categories-list-item-active");e.target.classList.add("main-categories-list-item-active"),e.target.textContent==="All categories"?T().then(t=>{fromTopBlocks(t)}):$(e.target.textContent).then(t=>{fromSelectedBlocks(t,e.target.textContent)})}});document.querySelector(".js-category-title"),document.querySelector(".js-category-box");const he=document.querySelector(".main-support-scroll"),S=document.querySelector(".main-support-list");he.addEventListener("click",()=>{let e=[...S.children].slice(0,1);S.firstChild.remove(),S.appendChild(e[0])});const p=document.querySelector("body"),ge=document.querySelector(".btn"),i=document.querySelector(".btn__icon");function D(e){localStorage.setItem("darkmode",e)}function fe(){const e=localStorage.getItem("darkmode");e?e=="true"?(p.classList.add("darkmode"),i.classList.add("fa-moon")):e=="false"&&i.classList.add("fa-sun"):(D(!1),i.classList.add("fa-sun"))}fe();ge.addEventListener("click",function(){p.classList.toggle("darkmode"),i.classList.add("animated"),D(p.classList.contains("darkmode")),p.classList.contains("darkmode")?(i.classList.remove("fa-sun"),i.classList.add("fa-moon")):(i.classList.remove("fa-moon"),i.classList.add("fa-sun")),setTimeout(function(){i.classList.remove("animated")},500)});
//# sourceMappingURL=theme-dark-light-3446bf16.js.map
