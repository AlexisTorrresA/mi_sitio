(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('atl-theme');
  if(saved) root.dataset.theme=saved;
  const btn=document.querySelector('[data-theme-toggle]');
  const update=()=>{ if(btn) btn.textContent=root.dataset.theme==='light'?'☾':'☀'; };
  update();
  if(btn) btn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';localStorage.setItem('atl-theme',root.dataset.theme);update();});
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
