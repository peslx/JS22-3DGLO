(()=>{"use strict";(e=>{console.log("'heroTimer.js' подключен");const t=document.getElementById("timer"),l=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),a=()=>{let e=(e=>{let t=new Date("10 january 2022 13:00").getTime(),l=(new Date).getTime(),o=Math.floor((t-l)/1e3);return{days:Math.floor(o/60/60/24),hours:Math.floor(o/60/60),minutes:Math.floor(o/60%60),seconds:Math.floor(o%60),remTime:o}})();l.textContent=`${u(e.days)} дня, `,o.textContent=u(e.hours),n.textContent=u(e.minutes),r.textContent=u(e.seconds),e.remTime<=0&&(clearInterval(s),setInterval(c,2e3),l.textContent="",o.textContent="00",n.textContent="00",r.textContent="00")},u=e=>{let t=String(e);return t.length<2&&(t=`0${t}`),t},c=()=>{t.innerHTML="Акция завершена!"};a();let s=setInterval(a,1e3)})(),(()=>{console.log("'menu.js' подключен");const e=document.querySelector(".menu"),t=document.querySelector("menu"),l=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),n=document.querySelector("a[href='#service-block']"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),l.addEventListener("click",r),o.forEach((e=>e.addEventListener("click",r))),o.forEach((e=>{e.attributes.href.value.length>1&&e.addEventListener("click",(t=>{t.preventDefault(),window.scrollBy({top:document.querySelector(e.attributes.href.value).offsetTop,behavior:"smooth"})}))})),n.addEventListener("click",(e=>{e.preventDefault(),window.scrollBy({top:document.querySelector("#service-block").offsetTop,behavior:"smooth"})}))})(),(()=>{console.log("'popup.js' подключен");const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),l=e.querySelector(".popup-close"),o=e.querySelector("form");let n,r=0;t.forEach((e=>{e.addEventListener("click",(()=>{c()}))})),l.addEventListener("click",(()=>{e.style.display="none",a()}));const a=()=>{o.style.opacity="",o.style.transform="",r=0},u=()=>{document.documentElement.clientWidth<=768?(o.style.opacity=1,o.style.transform="scale(1)"):(r+=.05,o.style.opacity=r,o.style.transform=`scale(${r})`,r<1&&(n=requestAnimationFrame(u)),1==r&&cancelAnimationFrame(n))},c=()=>{e.style.display="block",a(),u()}})(),(()=>{console.log("'validation.js' подключен");const e=document.querySelector(".calc-block").querySelectorAll("input"),t=document.querySelector(".main-form-input").querySelectorAll("input"),l=document.querySelector(".footer-form-input").querySelectorAll("input"),o=document.getElementById("form3").querySelectorAll("input"),n={words:{cyr:e=>e.replace(/[^а-яА-Я\- ]/g,""),lat:e=>e.replace(/[^a-zA-Z\- ]/g,"")},digits:e=>e.replace(/\D/g,""),mail:e=>e.replace(/[^a-zA-Z0-9\-@_.~!'*]/g,""),phone:e=>e.replace(/[^\d\(\)\-]/g,""),input:e=>{"text"==e.type||"Ваше сообщение"==e.placeholder?e.value=n.words.cyr(e.value):"email"==e.type?e.value=n.mail(e.value):"tel"==e.type&&(e.value=n.phone(e.value))},onBlur:e=>{e.value=e.value.trim(),e.value=e.value.replace(/\s+\b/g," "),e.value=e.value.replace(/\b\s+/g," "),e.value=e.value.replace(/\s+/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/(^-)|(-$)/g,""),e.value=e.value.replace(/(^ +)|( +$)/g,""),"text"===e.type&&""!==e.value&&"Ваше сообщение"!==e.placeholder&&(e.value=e.value.split(/\s/).map((e=>e[0].toUpperCase()+e.substring(1))).join(" "))}};t.forEach((e=>{e.addEventListener("input",(()=>{n.input(e)})),e.addEventListener("blur",(t=>{n.onBlur(e),console.log("**"+t.target.value+"**")}))})),l.forEach((e=>{e.addEventListener("input",(()=>{n.input(e)})),e.addEventListener("blur",(()=>{n.onBlur(e)}))})),o.forEach((e=>{e.addEventListener("input",(()=>{n.input(e)})),e.addEventListener("blur",(()=>{n.onBlur(e)}))})),e.forEach((e=>{e.addEventListener("input",(()=>{e.value=n.words.lat(e.value)})),e.addEventListener("blur",(()=>{n.onBlur(e)}))}))})(),console.log("'tabs.js' подключен")})();