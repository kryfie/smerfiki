const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav-links');
navToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(!a.closest('.lang-switch')){nav.classList.remove('open');navToggle?.setAttribute('aria-expanded','false');}}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
