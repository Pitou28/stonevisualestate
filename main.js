// Menu mobile
const burger = document.getElementById('burger');
const links = document.getElementById('links');
if (burger) burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

// Apparition au défilement (avec filet de sécurité)
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.1 });
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add('in'));
setTimeout(() => els.forEach(el => el.classList.add('in')), 2500);

// Curseurs avant / après
document.querySelectorAll('.ba-slider').forEach(s => {
  const r = s.querySelector('.ba-range');
  const set = v => s.style.setProperty('--pos', v + '%');
  r.addEventListener('input', () => set(r.value));
});

// Formulaire -> WhatsApp
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const services = d.getAll('s');
  let msg = `Bonjour Stone Visual Estate,\n\nJe suis ${d.get('nom')}, de l'agence ${d.get('agence')}`;
  if (d.get('ville')) msg += ` (${d.get('ville')})`;
  msg += `.\nJe souhaite bénéficier de l'essai gratuit.`;
  if (services.length) msg += `\nCe qui m'intéresse : ${services.join(', ')}.`;
  if (d.get('message')) msg += `\n\n${d.get('message')}`;
  window.location.href = 'https://wa.me/32491727580?text=' + encodeURIComponent(msg);
});
