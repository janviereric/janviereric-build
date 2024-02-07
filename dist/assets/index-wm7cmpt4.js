(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const s="/assets/logo-6Mk-ll80.jpg",r=()=>{const t=document.querySelector("header");t.innerHTML=`
    <div id="container-header">
      <div id="button-home">
        <div class="logo-image">
            <img src="${s}" alt="Janvier Eric" />
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
  `;const c=t.querySelector("#button-home"),i=t.querySelector("#button-frontend"),a=t.querySelector("#button-backend"),e=t.querySelector("#button-fullstack"),n=t.querySelector("#button-contact");c.addEventListener("click",o=>{o.stopPropagation(),location.assign("./")}),i.addEventListener("click",o=>{o.stopPropagation(),location.assign("./frontend")}),a.addEventListener("click",o=>{o.stopPropagation(),location.assign("./backend")}),e.addEventListener("click",o=>{o.stopPropagation(),location.assign("./fullstack")}),n.addEventListener("click",o=>{o.stopPropagation(),location.assign("./contact")})},l=()=>{const t=document.querySelector("footer");t.innerHTML=`
        <p>
        <img src="${s}" alt="logo" />
        copyright <i class="fa-regular fa-copyright"></i> 2024 -
        <span class="j">J</span>anvier<span class="e">E</span>ric
        </p>
        `},d=()=>{const t=document.querySelector("main");t.innerHTML="<h1> Accueil </h1>"},u=()=>{const t=document.querySelector("main");t.innerHTML="<h1> FrontEnd </h1>"},f=()=>{const t=document.querySelector("main");t.innerHTML="<h1> BackEnd </h1>"},p=()=>{const t=document.querySelector("main");t.innerHTML="<h1> FullStack </h1>"},m=()=>{const t=document.querySelector("main");t.innerHTML="<h1> Contact </h1>"},g=()=>{location.pathname==="/"?d():location.pathname==="/frontend"?u():location.pathname==="/backend"?f():location.pathname==="/fullstack"?p():location.pathname==="/contact"&&m()},h=()=>{r(),g(),l()};h();
