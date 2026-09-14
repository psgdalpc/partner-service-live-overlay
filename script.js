// Animación de comentarios de demostración.
// Para comentarios reales de Facebook, conecta una fuente de comentarios en OBS.
const feed=document.getElementById('chatFeed');
const demo=[['C','Carlos','¿Qué campaña tienen disponible?'],['L','Lucía','¿Cómo puedo postular?'],['D','Diego','¿El trabajo es presencial?'],['A','Andrea','¿Cuál es el horario?']];
let n=0;
setInterval(()=>{if(!feed)return;const [l,name,text]=demo[n++%demo.length];const e=document.createElement('article');e.innerHTML=`<span class="avatar">${l}</span><div><b>${name}</b><p>${text}</p></div><time>ahora</time>`;feed.appendChild(e);while(feed.children.length>4)feed.removeChild(feed.firstElementChild)},4200);
