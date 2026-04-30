/* ═══════════════════════════════════════════════════
   Portfolio — Développeur BTS SIO SLAM
   main.js
   ═══════════════════════════════════════════════════ */

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

/* ── Effet de frappe (typing effect) ── */
const roles = ['Développeur Web', 'Étudiant BTS SIO SLAM', 'Passionné de code', 'Futur dev pro'];
let ri = 0, ci = 0, deleting = false;
const typed = document.getElementById('typed-role');
typed.innerHTML = '<span class="type-cursor"></span>';

function type() {
  const word = roles[ri];
  if (!deleting) {
    ci++;
    typed.innerHTML = word.slice(0, ci) + '<span class="type-cursor"></span>';
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    ci--;
    typed.innerHTML = word.slice(0, ci) + '<span class="type-cursor"></span>';
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 400); return; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

/* ── Navbar au scroll + barre de progression ── */
const navbar      = document.getElementById('navbar');
const progressBar = document.getElementById('progress-bar');
const backTop     = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const s = window.scrollY;
  navbar.classList.toggle('scrolled', s > 50);
  backTop.classList.toggle('visible', s > 400);
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (s / total * 100) + '%';
});

/* ── Menu mobile ── */
const hamburger  = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(l =>
  l.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

/* ── Reveal au scroll (IntersectionObserver) ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.classList.add('visible');

        // Animate skill bars
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });

        // Animate stat counters
        e.target.querySelectorAll('.stat-num').forEach(el => {
          const target = +el.dataset.target;
          let current = 0;
          const inc = target / 40;
          const t = setInterval(() => {
            current = Math.min(current + inc, target);
            el.textContent = Math.floor(current) + (target > 3 ? '+' : '');
            if (current >= target) clearInterval(t);
          }, 30);
        });
      }, 100);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Formulaire de contact (fallback mailto) ── */
function handleFormSubmit() {
  const name    = document.getElementById('form-name').value;
  const email   = document.getElementById('form-email').value;
  const subject = document.getElementById('form-subject').value;
  const message = document.getElementById('form-message').value;

  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  const mailto = `mailto:adam.dorian37@gmail.com?subject=${encodeURIComponent(subject || 'Contact depuis le portfolio')}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)}`;
  window.location.href = mailto;
  document.getElementById('form-msg').style.display = 'block';
}

/* ── Année dynamique dans le footer ── */
document.getElementById('footer-year').textContent = new Date().getFullYear();