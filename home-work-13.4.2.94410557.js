const e=e=>new Promise(s=>setTimeout(()=>s(e),e)),s=e=>console.log(`Resolved after ${e}ms`);document.querySelectorAll(".delay").forEach(t=>{t.addEventListener("click",()=>{t.classList.contains("delay-1")&&e(1e3).then(s),t.classList.contains("delay-2")&&e(2e3).then(s)})});
//# sourceMappingURL=home-work-13.4.2.94410557.js.map
