(function () {
  const GA_ID = 'G-Y16GMPF2PP';

  // Google Analytics 4
  if (!document.querySelector('script[data-toolvero-ga]')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    s.dataset.toolveroGa = '1';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  const saved = localStorage.getItem('toolvero-theme');
  if (saved === 'dark') document.documentElement.dataset.theme = 'dark';

  window.toggleTheme = function () {
    const dark = document.documentElement.dataset.theme === 'dark';
    if (dark) document.documentElement.removeAttribute('data-theme');
    else document.documentElement.dataset.theme = 'dark';
    localStorage.setItem('toolvero-theme', dark ? 'light' : 'dark');
    updateThemeButton();
  };

  function updateThemeButton(){
    const b=document.getElementById('themeToggle');
    if(!b) return;
    b.textContent=document.documentElement.dataset.theme==='dark'?'☀️ Light':'🌙 Dark';
  }

  function enhanceFooter(){
    const footer=document.querySelector('footer');
    if(!footer) return;
    footer.innerHTML='<div class="container">Toolvero · Free tools for SysAdmins & DevOps'
      +'<div class="footer-links"><a href="about.html">About</a><a href="privacy.html">Privacy</a>'
      +'<a href="contact.html">Contact</a><a href="guides.html">Guides</a><a href="networking.html">Networking</a><a href="security.html">Security</a><a href="developer.html">Developer</a><a href="automation.html">Linux &amp; Automation</a></div></div>';
  }

  document.addEventListener('DOMContentLoaded', function(){
    updateThemeButton();
    enhanceFooter();
  });
})();

async function copyToolOutput(targetId, button){
  const el=document.getElementById(targetId); if(!el) return;
  try{ await navigator.clipboard.writeText(el.value || el.textContent || ''); const old=button.textContent; button.textContent='Copied!'; setTimeout(()=>button.textContent=old,1400); }
  catch(e){ el.focus(); if(el.select) el.select(); document.execCommand('copy'); const old=button.textContent; button.textContent='Copied!'; setTimeout(()=>button.textContent=old,1400); }
}
