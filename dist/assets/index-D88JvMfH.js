(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let n=Math.trunc(Math.random()*20)+1,o=20,i=0;const c=function(r){document.querySelector(".guess-message").textContent=r};document.querySelector(".check").addEventListener("click",function(){const r=Number(document.querySelector(".number-input").value);r?r===n?(c("Правильно!"),document.querySelector("body").style.backgroundColor="rgb(9, 250, 21)",document.querySelector(".question").style.width="50rem",document.querySelector(".question").textContent=n,o>i&&(i=o,document.querySelector(".highscore").textContent=i)):r!==n&&(o>1?(c(r>n?"Слишком много!":"Слишком мало!"),o--,document.querySelector(".score").textContent=o):(c("Вы проиграли!"),document.querySelector(".score").textContent=0)):c("Укажите число!")});document.querySelector(".again").addEventListener("click",function(){n=Math.trunc(Math.random()*20)+1,document.querySelector("body").style.backgroundColor="rgb(0, 0, 0)",document.querySelector(".question").textContent="???",document.querySelector(".question").style.width="25rem",c("Начни угадывать"),o=20,document.querySelector(".score").textContent=o,document.querySelector(".number-input").value=""});
