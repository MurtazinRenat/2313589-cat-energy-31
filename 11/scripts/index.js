var i=document.querySelector(".navigation"),e=document.querySelector(".site-list"),t=document.querySelector(".navigation__toggle"),s=document.querySelector(".navigation__open");e.classList.remove("site-list--nojs");t.classList.remove("navigation__toggle--nojs");t.addEventListener("click",()=>{e.classList.contains("site-list--closed")?(e.classList.remove("site-list--closed"),t.classList.add("navigation__toggle--closed"),s.textContent="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E."):(e.classList.add("site-list--closed"),t.classList.remove("navigation__toggle--closed"),s.textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E.")});e.style.top=`${i.offsetHeight}px`;window.addEventListener("resize",a=>{e.style.top=`${i.offsetHeight}px`});var o=document.querySelector(".invite__map"),n=document.querySelector(".cinvite__map-image");o.classList.remove("invite__map--nojs");n.classList.add("invite__map-image--nojs");
