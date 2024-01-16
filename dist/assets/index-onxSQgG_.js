(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a="/assets/janviereric-6Mk-ll80.jpg",c=()=>{const n=document.querySelector("header");n.innerHTML=`
    <div id="container-header">
      <div class="container-logo">
        <div class="logo-image">
            <img src="${a}" alt="Janvier Eric" />
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
  `};c();
