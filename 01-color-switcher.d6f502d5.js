const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e;t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(function(){t.btnStop.disabled=!1,t.btnStart.disabled=!0,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.d6f502d5.js.map