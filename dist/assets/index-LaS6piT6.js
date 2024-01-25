(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const r="/assets/logo-6Mk-ll80.jpg",c=()=>{const t=document.querySelector("header");t.innerHTML=`
    <div id="container-header">
      <div class="container-logo">
        <div class="logo-image">
            <img src="${r}" alt="Janvier Eric" />
        </div>
        <div class="logo-name"><span class="text-menu">JanvierEric</span></div>
      </div>
      <ul id="container-menu">
        <li><i class="fa-solid fa-desktop icon-frontend"></i><span class="text-menu"> FrontEnd </span></li>
        <li><i class="fa-solid fa-server icon-backend"></i><span class="text-menu"> BackEnd </span></li>
        <li><i class="fa-solid fa-database icon-fullstack"></i><span class="text-menu"> FullStack </span></li>
        <li><i class="fa-solid fa-envelope icon-contact"></i><span class="text-menu"> Contact </span></li>
      </ul>
    </div>
  `};c();const l=()=>{const t=document.querySelector("footer");t.innerHTML=`
        <p>
        <img src="${r}" alt="logo" />
        copyright <i class="fa-regular fa-copyright"></i> 2024 -
        <span class="j">J</span>anvier<span class="e">E</span>ric
        </p>
        `};l();
