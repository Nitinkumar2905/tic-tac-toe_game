(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();console.log("welcome");new Audio("audios/bg.mp3");let u=new Audio("audios/ting.mp3"),a=new Audio("audios/gameover.mp3"),d=document.getElementById("reset"),i="X",l=!1;const f=()=>i==="X"?"0":"X",m=()=>{let t=document.getElementsByClassName("boxtext");[[0,1,2,5,5,0],[3,4,5,5,5,15],[6,7,8,5,25,0],[0,3,6,-5,15,90],[1,4,7,5,15,90],[2,5,8,15,15,90],[0,4,8,5,15,45],[2,4,6,5,15,135]].forEach(o=>{t[o[0]].innerText===t[o[1]].innerText&&t[o[2]].innerText===t[o[1]].innerText&&t[o[0]].innerText!==""&&(document.querySelector(".info").innerText=t[o[0]].innerText+"   won",l=!0,a.play(),setTimeout(()=>{alert(`${i} lose the game`)},500))})};let x=document.getElementsByClassName("box");Array.from(x).forEach(t=>{let n=t.querySelector(".boxtext");t.addEventListener("click",()=>{n.innerText===""&&(n.innerText=i,i=f(),u.play(),m(),l?document.querySelector(".container").style.cursor="not-allowed":document.getElementsByClassName("info")[0].innerText="turn for   "+i)})});d.addEventListener("click",()=>{let t=document.querySelectorAll(".boxtext");Array.from(t).forEach(n=>{n.innerText=""}),i="X",l=!1,document.getElementsByClassName("info")[0].innerText="turn for "+i});