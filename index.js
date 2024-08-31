import{S as f,i as p}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const m="https://pixabay.com/api/?",u=t=>{const r=new URLSearchParams({key:"45539852-e7385dbf9677b23660ec365b6",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${r}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})},g=t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-img"
        src="${t.webformatURL}"
        alt="${t.tags}"
        loading="lazy" />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <p class="gallery-info-title">Likes</p>
          <p class="gallery-info-text">${t.likes}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Views</p>
          <p class="gallery-info-text">${t.views}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Comments</p>
          <p class="gallery-info-text">${t.comments}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Downloads</p>
          <p class="gallery-info-text">${t.downloads}</p>
        </li>
      </ul>
    </li>
    `,d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cpath%20fill='%23FAFAFB'%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20fill='%23FAFAFB'%20d='M6.969%206.97a.75.75%200%200%201%201.062%200L12%2010.94l3.969-3.97a.75.75%200%201%201%201.062%201.061l-3.97%203.97%203.97%203.968a.753.753%200%200%201%200%201.062.749.749%200%200%201-1.062%200L12%2013.061l-3.969%203.97a.75.75%200%200%201-1.225-.243.751.751%200%200%201%20.163-.819L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/svg%3e",l=document.querySelector(".form"),n=document.querySelector(".gallery-list"),c=document.querySelector(".loader-box");l.addEventListener("submit",y);const h=new f(".gallery-list a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});function y(t){t.preventDefault();const r=l.elements.search.value.trim();r.trim()!==""&&(n.innerHTML="",c.classList.add("loader-box-active"),u(r).then(i=>{if(c.classList.add("loader-box-active"),i.hits.length===0){p.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:d,maxWidth:"385px",timeout:5e3}),n.innerHTML="",l.reset(),l.elements.search.focus();return}const o=i.hits.map(e=>g(e)).join("");n.innerHTML=o,h.refresh(),l.reset(),l.elements.search.focus()}).catch(i=>{console.log(i)}).finally(()=>{c.classList.remove("loader-box-active")}))}
//# sourceMappingURL=index.js.map
