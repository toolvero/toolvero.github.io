
(function initTheme(){
  const saved = localStorage.getItem('toolvero-theme');
  const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = saved || preferred;
  document.documentElement.setAttribute('data-theme', theme);
  document.addEventListener('DOMContentLoaded', updateThemeButton);
})();

function updateThemeButton(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = dark ? '☀️ Light' : '🌙 Dark';
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('toolvero-theme', next);
  updateThemeButton();
}
async function copyText(text, msgId) {
  try {
    await navigator.clipboard.writeText(text);
    if (msgId) document.getElementById(msgId).textContent = 'Copied.';
  } catch {
    if (msgId) document.getElementById(msgId).textContent = 'Could not copy automatically.';
  }
}

// Google Analytics 4 — Toolvero Web (G-Y16GMPF2PP)
(function initAnalytics(){
  const measurementId = 'G-Y16GMPF2PP';
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
  document.head.appendChild(gtagScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
})();
