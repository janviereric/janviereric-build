(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const c="/assets/janviereric-6Mk-ll80.jpg",l=()=>{const o=document.querySelector("header");o.innerHTML=`
    <div id="container-header">
      <div class="container-logo">
        <div class="logo-image">
            <img src="${c}" alt="Janvier Eric" />
        </div>
        <div class="logo-name">JanvierEric</div>
      </div>
      <ul id="container-menu">
        <li><i class="fa-solid fa-desktop icon-frontend"></i> FrontEnd </li>
        <li><i class="fa-solid fa-server icon-backend"></i> BackEnd </li>
        <li><i class="fa-solid fa-database icon-fullstack"></i> FullStack </li>
        <li><i class="fa-solid fa-envelope icon-contact"></i> Contact </li>
      </ul>
    </div>
  `};l();
