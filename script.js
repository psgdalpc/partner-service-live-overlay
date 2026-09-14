// Demo comments are visual placeholders.
// Real Facebook comments cannot be pulled automatically by a transparent HTML overlay alone.
// Replace the demo messages or connect a separate OBS Browser Source/plugin that exposes
// Facebook Live comments, keeping this panel as the visual container.
//
// Optional demo rotation:
const feed = document.getElementById('chatFeed');
const demo = [
  ['C','Carlos','¿Qué campaña tienen disponible?'],
  ['L','Lucía','¿Cómo puedo postular?'],
  ['D','Diego','¿El trabajo es presencial?'],
  ['A','Andrea','¿Cuál es el horario?']
];
let idx = 0;
setInterval(() => {
  if (!feed) return;
  const [letter,name,text] = demo[idx % demo.length];
  idx++;
  const el = document.createElement('div');
  el.className = 'chat-message';
  el.innerHTML = `<div class="chat-avatar">${letter}</div><div><b>${name}</b><span>${text}</span></div>`;
  feed.appendChild(el);
  while (feed.children.length > 4) feed.removeChild(feed.firstElementChild);
}, 4200);
