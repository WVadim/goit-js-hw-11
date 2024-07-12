import{S as g,i as h}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const b="44868548-19b7672d7149b9084b4c3edb5",L="https://pixabay.com/api/";async function d(e){const t=await fetch(`${L}?key=${b}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return t.json()}let u;function f(e){const t=document.querySelector(".gallery"),a=e.map(n=>v(n)).join("");t.innerHTML+=a,u?u.refresh():u=new g(".gallery a",{captionsData:"alt",captionDelay:250})}function v({webformatURL:e,largeImageURL:t,tags:a,likes:n,views:r,comments:o,downloads:i}){return`
    <a href="${t}" class="gallery-link">
      <div class="photo-card">
        <img src="${e}" alt="${a}" loading="lazy" class="gallery-image"/>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${n}</p>
          <p class="info-item"><b>Views:</b> ${r}</p>
          <p class="info-item"><b>Comments:</b> ${o}</p>
          <p class="info-item"><b>Downloads:</b> ${i}</p>
        </div>
      </div>
    </a>
  `}function q(){const e=document.querySelector(".gallery");e.innerHTML=""}function c(e){h.error({title:"Error",message:e})}function l(e){const t=document.querySelector(".loader");e?t.classList.add("loader-active"):t.classList.remove("loader-active")}const S=document.querySelector("#search-form"),y=document.querySelector("#load-more");let s=1,m="";S.addEventListener("submit",$);y.addEventListener("click",w);async function $(e){e.preventDefault();const t=e.currentTarget.elements.query.value.trim();if(!t)return c("Please enter a search query");s=1,m=t,q(),l(!0);try{const a=await d(t,s);if(a.hits.length===0)return c("Sorry, there are no images matching your search query. Please try again!");f(a.hits),p(a.totalHits)}catch{c("Failed to fetch images")}finally{l(!1)}}async function w(){s+=1,l(!0);try{const e=await d(m,s);f(e.hits),p(e.totalHits)}catch{c("Failed to fetch more images")}finally{l(!1)}}function p(e){y.style.display=s*12<e?"block":"none"}
//# sourceMappingURL=commonHelpers.js.map
