(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l="/assets/logo-6Mk-ll80.jpg",c=()=>{const t=document.querySelector("header");t.innerHTML=`
    <div id="container-header">
      <div id="button-home">
        <div class="logo-image">
            <img src="${l}" alt="Janvier Eric" />
        </div>
        <div class="logo-name"><span class="text-menu">JanvierEric</span></div>
      </div>
      <ul id="container-menu">
        <li id="button-frontend"><i class="fa-solid fa-desktop icon-frontend"></i><span class="text-menu"> FrontEnd </span></li>
        <li id="button-backend"><i class="fa-solid fa-server icon-backend"></i><span class="text-menu"> BackEnd </span></li>
        <li id="button-fullstack"><i class="fa-solid fa-database icon-fullstack"></i><span class="text-menu"> FullStack </span></li>
        <li id="button-contact"><i class="fa-solid fa-envelope icon-contact"></i><span class="text-menu"> Contact </span></li>
      </ul>
    </div>
  `;const i=t.querySelector("#button-home"),r=t.querySelector("#button-frontend"),s=t.querySelector("#button-backend"),e=t.querySelector("#button-fullstack"),n=t.querySelector("#button-contact");i.addEventListener("click",o=>{o.stopPropagation(),location.assign("./")}),r.addEventListener("click",o=>{o.stopPropagation(),location.assign("./frontend")}),s.addEventListener("click",o=>{o.stopPropagation(),location.assign("./backend")}),e.addEventListener("click",o=>{o.stopPropagation(),location.assign("./fullstack")}),n.addEventListener("click",o=>{o.stopPropagation(),location.assign("./contact")})},a=()=>{const t=document.querySelector("footer");t.innerHTML=`
        <p>
        <img src="${l}" alt="logo" />
        copyright <i class="fa-regular fa-copyright"></i> 2024 -
        <span class="j">J</span>anvier<span class="e">E</span>ric
        </p>
        `};c();a();const d=()=>{const t=document.querySelector("main");t.innerHTML="<h1> Accueil </h1>"};c();a();const u=()=>{const t=document.querySelector("main");t.innerHTML="<h1> FrontEnd </h1>"};c();a();const f=()=>{const t=document.querySelector("main");t.innerHTML="<h1> BackEnd </h1>"};c();a();const p=()=>{const t=document.querySelector("main");t.innerHTML="<h1> FullStack </h1>"};c();a();const m=()=>{const t=document.querySelector("main");t.innerHTML="<h1> Contact </h1>"},g=()=>{location.pathname==="/"?d():location.pathname==="/frontend"?u():location.pathname==="/backend"?f():location.pathname==="/fullstack"?p():location.pathname==="/contact"&&m()},h=()=>{c(),g(),a()};h();
