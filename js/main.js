/* ═══════════════════════════════════════════════
   Portfolio BTS SIO SLAM — main.js
   ═══════════════════════════════════════════════ */

   /* ── Cursor personnalisé ── */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animTrail() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx + 'px';
  trail.style.top  = ty + 'px';
  requestAnimationFrame(animTrail);
}
animTrail();

document.querySelectorAll('a, button, .skill-category, .project-card, .cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
    cursor.style.opacity = '0.5';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.opacity = '1';
  });
});

/* ── Active nav link ── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Progress bar + Scroll events ── */
const progressBar = document.getElementById('progress-bar');
const navbar      = document.getElementById('navbar');
const backTop     = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const s     = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = (s / total * 100) + '%';
  if (navbar)      navbar.classList.toggle('scrolled', s > 50);
  if (backTop)     backTop.classList.toggle('visible', s > 400);
});

/* ── Mobile menu ── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');
const mobileClose  = document.getElementById('mobileClose');

if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
if (mobileClose)  mobileClose.addEventListener('click',  () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(l =>
  l.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

/* ── Reveal on scroll (IntersectionObserver) ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    setTimeout(() => {
      e.target.classList.add('visible');

      // Animate skill bars
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });

      // Animate counters
      e.target.querySelectorAll('[data-target]').forEach(el => {
        const target = +el.dataset.target;
        let current  = 0;
        const inc    = target / 40;
        const timer  = setInterval(() => {
          current = Math.min(current + inc, target);
          el.textContent = Math.floor(current) + (target > 3 ? '+' : '');
          if (current >= target) clearInterval(timer);
        }, 28);
      });
    }, 80);
    observer.unobserve(e.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Typing effect (hero index only) ── */
const typedEl = document.getElementById('typed-role');
if (typedEl) {
  const roles = ['Développeur Web', 'Étudiant BTS SIO SLAM', 'Passionné de code', 'Futur dev full-stack'];
  let ri = 0, ci = 0, deleting = false;
  typedEl.innerHTML = '<span class="type-cursor"></span>';

  function type() {
    const word = roles[ri];
    if (!deleting) {
      ci++;
      typedEl.innerHTML = word.slice(0, ci) + '<span class="type-cursor"></span>';
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      ci--;
      typedEl.innerHTML = word.slice(0, ci) + '<span class="type-cursor"></span>';
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 400); return; }
    }
    setTimeout(type, deleting ? 55 : 95);
  }
  type();
}

/* ── Contact form (mailto fallback) ── */
window.handleFormSubmit = async function () {
  const fields = {
    name:    document.getElementById('form-name'),
    email:   document.getElementById('form-email'),
    subject: document.getElementById('form-subject'),
    message: document.getElementById('form-message'),
  };
  const btn   = document.getElementById('submit-btn');
  const label = document.getElementById('btn-label');
  const msg   = document.getElementById('form-msg');

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.value.trim());
  const errors  = {
    name:    !fields.name.value.trim(),
    email:   !fields.email.value.trim() || !emailOk,
    subject: !fields.subject.value.trim(),
    message: !fields.message.value.trim(),
  };

  Object.entries(errors).forEach(([k, err]) => {
    fields[k].classList.toggle('invalid', err);
    document.getElementById('err-' + k).style.display = err ? 'block' : 'none';
  });

  msg.style.display = 'none';
  if (Object.values(errors).some(Boolean)) return;

  btn.disabled = true;
  label.textContent = 'Envoi en cours...';

  try {
    const res = await fetch('https://formspree.io/f/xpqbzgpo', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:    fields.name.value.trim(),
        email:   fields.email.value.trim(),
        subject: fields.subject.value.trim(),
        message: fields.message.value.trim(),
      }),
    });

    if (res.ok) {
      msg.className = 'form-msg';
      msg.textContent = '✓ Message envoyé ! Je vous répondrai dans les plus brefs délais.';
      msg.style.display = 'block';
      Object.values(fields).forEach(f => { f.value = ''; f.classList.remove('invalid'); });
    } else {
      msg.className = 'form-msg error';
      msg.textContent = "Une erreur est survenue. Réessaie ou contacte-moi directement.";
      msg.style.display = 'block';
      btn.disabled = false;
    }
  } catch {
    msg.className = 'form-msg error';
    msg.textContent = "Impossible d'envoyer. Vérifie ta connexion et réessaie.";
    msg.style.display = 'block';
    btn.disabled = false;
  }

  label.textContent = 'Envoyer le message';
};

/* ── Footer year ── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();