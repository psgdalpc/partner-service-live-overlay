// Small JavaScript layer for the OBS overlay.
// The animation itself is CSS-based, so it keeps running smoothly in a Browser Source.

const root = document.documentElement;

// Add a subtle time-based hue/brightness variation without changing the brand colors.
let t = 0;
function ambientTick() {
  t += 0.006;
  const glow = 0.72 + Math.sin(t) * 0.08;
  root.style.setProperty('--ambient-glow', glow.toFixed(3));
  requestAnimationFrame(ambientTick);
}
ambientTick();

// Optional keyboard shortcuts while previewing in a normal browser.
// 1 = live, 2 = pause, 3 = closing. The default state remains LIVE.
document.addEventListener('keydown', (event) => {
  const body = document.body;
  body.classList.remove('mode-live', 'mode-pause', 'mode-close');

  if (event.key === '1') body.classList.add('mode-live');
  if (event.key === '2') body.classList.add('mode-pause');
  if (event.key === '3') body.classList.add('mode-close');
});
