(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function l(n){let a=(n-r)/o;a>1&&(a=1);let s=e(a);t(s),a<1&&requestAnimationFrame(l)}))},t=({formID:e,isPopup:t=!1,extraData:o=[]})=>{const r=document.getElementById(e),l=document.createElement("div");try{if(!r)throw new Error(`Форма ${e} отсутствует`);r.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=new FormData(r),n=r.querySelectorAll("input"),a={},s=()=>{r.closest(".popup").style.display="none"};var c;e.forEach(((e,t)=>{a[t]=e})),o.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&(a[e.id]=t.value)})),l.textContent="Отправка...",t?(r.parentNode.querySelector("h3").textContent="Статус отправки формы",l.style.color="silver",l.style.fontSize="1.5rem",r.innerHTML="",r.append(l)):r.append(l),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("validError")&&(t=!1)})),t})(n)?(c=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{l.textContent="Форма успешно отправлена",setTimeout((()=>{t?(s(),l.innerHTML="Вы уже отправили форму.<br>Для повторной отправки перезагрузите страницу."):l.textContent=""}),2500),n.forEach((e=>{e.value="",(e=>{e.classList.remove("validOk"),e.classList.remove("validOk"),e.style.borderBottom="",e.style.color="",e.style.backgroundColor=""})(e)}))})).catch((e=>{l.textContent="Ошибка отправки =(",setTimeout((()=>{t?(l.innerHTML="Что-то пошло не так. Попробуйте еще раз.<br>Для повторной попытки перезагрузите страницу.",s()):l.textContent="Что-то пошло не так. Попробуйте еще раз.<br>Для повторной попытки перезагрузите страницу."}),2500),console.error(e.message)})):console.error("Данные не введены или неверны")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer"),o=document.getElementById("timer-days"),r=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let a;const s=()=>{let e=(e=>{let t=new Date("14 january 2022 13:00").getTime(),o=(new Date).getTime(),r=Math.floor((t-o)/1e3);return{days:Math.floor(r/60/60/24),hours:Math.floor(r/60/60),minutes:Math.floor(r/60%60),seconds:Math.floor(r%60),remTime:r}})();o.textContent=`${c(e.days)} дня, `,r.textContent=c(e.hours),l.textContent=c(e.minutes),n.textContent=c(e.seconds),e.remTime<=0&&(clearInterval(a),setTimeout(i,1e3),o.textContent="",r.textContent="00",l.textContent="00",n.textContent="00")},c=e=>{let t=String(e);return t.length<2&&(t=`0${t}`),t},i=()=>{t.innerHTML="Акция завершена!"};s(),a=setInterval(s,1e3)})(),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a"),o=(document.querySelector("a[href='#service-block']"),()=>{e.classList.toggle("active-menu")});document.addEventListener("click",(r=>{e.classList.contains("active-menu")&&!r.target.closest("menu")&&o(),r.target.closest(".menu")&&o(),r.target.classList.contains("close-btn")&&o(),t.forEach((e=>{e===r.target&&(r.preventDefault(),o(),window.scrollBy({top:document.querySelector(e.attributes.href.value).offsetTop,behavior:"smooth"}))})),r.target.closest("a[href='#service-block']")&&(r.preventDefault(),window.scrollBy({top:document.querySelector("#service-block").offsetTop,behavior:"smooth"}))}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),r=t.querySelector("form");o.forEach((e=>{e.addEventListener("click",(()=>{n()}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none",l())}));const l=()=>{r.style.opacity="",r.style.transform=""},n=()=>{t.style.display="block",l(),document.documentElement.clientWidth<=768?(r.style.opacity=1,r.style.transform="scale(1)"):e({duration:600,timing:e=>e,draw(e){r.style.opacity=e,r.style.transform=`scale(${e})`}})}})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input"),t=document.querySelector(".main-form-input").querySelectorAll("input"),o=document.querySelector(".footer-form-input").querySelectorAll("input"),r=document.getElementById("form3").querySelectorAll("input"),l=e=>{e.classList.remove("validError"),e.classList.add("validOk"),e.style.borderBottom="2px solid green",e.style.color="green",e.style.backgroundColor="#88ff88",setTimeout((()=>{e.style.borderBottom="",e.style.color="",e.style.backgroundColor=""}),1e3)},n=(e,t)=>{e.classList.remove("validOk"),e.classList.add("validError"),e.style.borderBottom="2px solid red",e.style.color="red",e.style.backgroundColor="#ff8888",t&&(t=>{const o=document.createElement("span");o.style.position="absolute",o.style.left="50%",o.style.top="25px",o.style.color="red",o.style.fontFamily="inherit",o.style.fontSize="12px",o.style.background="white",o.style.border="1px solid red",o.style.padding="5px",o.style.borderRadius="10px",o.style.borderTopLeftRadius="0",o.textContent=t,e.closest("div").style.position="relative",e.closest("div").append(o),setTimeout((()=>{e.closest("div").removeChild(o)}),1e3)})(t)},a=e=>{e.required&&e.addEventListener("invalid",(t=>{t.preventDefault(),s(e)}))},s=e=>{""===e.value?n(e,"Обязательное поле"):"user_name"===e.name?e.value.length<2?n(e,"Минимум 2 символа"):l(e):"user_email"===e.name?/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e.value)?l(e):n(e,"Некорректный адрес"):"user_phone"===e.name&&(e.value.length<6||e.value.length>12?n(e,"Укажите минимум 6 цифр "):l(e))},c={words:{cyr:e=>e.replace(/[^а-яА-Я\- ]/g,""),lat:e=>e.replace(/[^a-zA-Z\- ]/g,"")},digits:e=>e.replace(/\D/g,""),mail:e=>e.replace(/[^a-zA-Z0-9\-@_.~!'*]/g,""),phone:e=>e.replace(/[^\d\(\)\+\-]/g,""),input:e=>{"text"==e.type||"Ваше сообщение"==e.placeholder?e.value=c.words.cyr(e.value):"email"==e.type?e.value=c.mail(e.value):"tel"==e.type&&(e.value=c.phone(e.value),e.value=e.value.slice(0,12))},onBlur:e=>{e.value=e.value.trim(),e.value=e.value.replace(/\s+\b/g," "),e.value=e.value.replace(/\b\s+/g," "),e.value=e.value.replace(/\s+/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/(^-)|(-$)/g,""),e.value=e.value.replace(/(^ +)|( +$)/g,""),"text"===e.type&&""!==e.value&&"Ваше сообщение"!==e.placeholder&&(e.value=e.value.split(/\s/).map((e=>e[0].toUpperCase()+e.substring(1))).join(" "))}};t.forEach((e=>{e.required&&(e.addEventListener("input",(()=>{c.input(e)})),e.addEventListener("change",(()=>{c.input(e),s(e)})),e.addEventListener("blur",(()=>{c.onBlur(e)})),a(e))})),o.forEach((e=>{e.addEventListener("input",(()=>{c.input(e)})),e.addEventListener("change",(()=>{c.input(e),s(e)})),e.addEventListener("blur",(()=>{c.onBlur(e)})),a(e)})),r.forEach((e=>{e.addEventListener("input",(()=>{c.input(e)})),e.addEventListener("change",(()=>{c.input(e),s(e)})),e.addEventListener("blur",(()=>{c.onBlur(e)})),a(e)})),e.forEach((e=>{e.addEventListener("input",(()=>{e.value=c.digits(e.value)})),e.addEventListener("blur",(()=>{c.onBlur(e)}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{e.target.closest(".service-header-tab")&&t.forEach(((t,r)=>{t===e.target.closest(".service-header-tab")?(t.classList.add("active"),o[r].classList.remove("d-none")):(t.classList.remove("active"),o[r].classList.add("d-none"))}))}))})(),((e=!1)=>{const t=document.querySelector(".portfolio-content"),o=document.querySelectorAll(".portfolio-item");if(e){const e=document.createElement("ul");e.classList.add("portfolio-dots"),t.append(e),o.forEach(((t,o)=>{const r=document.createElement("li");0===o?r.classList.add("dot","dot-active"):r.classList.add("dot"),e.append(r)}))}const r=!!e&&document.querySelectorAll(".dot");let l,n=0;const a=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},c=()=>{a(o,n,"portfolio-item-active"),r&&a(r,n,"dot-active"),n++,n>=o.length&&(n=0),s(o,n,"portfolio-item-active"),r&&s(r,n,"dot-active")},i=(e=1500)=>{l=setInterval(c,e)};t.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".portfolio-btn, .dot")&&(a(o,n,"portfolio-item-active"),r&&a(r,n,"dot-active"),e.target.matches("#arrow-left")?n--:e.target.matches("#arrow-right")?n++:e.target.classList.contains("dot")&&r.forEach(((t,o)=>{e.target===t&&(n=o)})),n>=o.length?n=0:n<0&&(n=o.length-1),s(o,n,"portfolio-item-active"),r&&s(r,n,"dot-active"))})),t.addEventListener("mouseenter",(e=>{e.target.matches(".portfolio-btn, .dot")&&clearInterval(l)}),!0),t.addEventListener("mouseleave",(e=>{e.target.matches(".portfolio-btn, .dot")&&i(2e3)}),!0),i(2e3)})(!0),((t=100)=>{const o=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),s=document.getElementById("total");let c=0;o.addEventListener("change",(o=>{(()=>{const o=+r.options[r.selectedIndex].value,i=+l.value;let d,u=1;+n.value>1&&(u+=+n.value/10),d=0==+a.value?1:+a.value<5?2:+a.value<10?1.5:1,o&&0!==i?(c=t*o*i*u*d,e({duration:750,timing:e=>e,draw(e){s.textContent=Math.ceil(c*e)}})):0!==i&&o||(s.textContent=0)})()}))})(),t({formID:"form1",extraData:[{type:"block",id:"total"}]}),t({formID:"form2"}),t({formID:"form3",isPopup:!0})})();