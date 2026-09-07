
async function copyText(text, msgId) {
  try {
    await navigator.clipboard.writeText(text);
    if (msgId) document.getElementById(msgId).textContent = 'Copiado.';
  } catch {
    if (msgId) document.getElementById(msgId).textContent = 'No se pudo copiar automáticamente.';
  }
}
