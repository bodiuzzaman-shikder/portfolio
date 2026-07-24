/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT — Md. Bodiuzzaman Shikder
   All interactive behaviour lives here. The only thing you'll
   usually want to edit is the TYPEWRITER_PHRASES list right below.
   ═══════════════════════════════════════════════════════════════ */

/* ✏️ EDIT: the rotating phrases in the hero typewriter */
const TYPEWRITER_PHRASES = [
  'Electrical & Mechanical Design Engineer',
  'R&D Researcher',
  'Switchgear & Transformer Designer',
  'Robotics & Mechatronics Engineer',
  'SOLIDWORKS Champion'
];

/* ─────────────── Typewriter effect ─────────────── */
(function typewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  let phrase = 0, char = 0, deleting = false;

  function tick() {
    const current = TYPEWRITER_PHRASES[phrase];
    el.textContent = current.slice(0, char);

    if (!deleting && char < current.length) {
      char++;
      setTimeout(tick, 70);
    } else if (!deleting && char === current.length) {
      deleting = true;
      setTimeout(tick, 1800);           // pause at full word
    } else if (deleting && char > 0) {
      char--;
      setTimeout(tick, 35);
    } else {
      deleting = false;
      phrase = (phrase + 1) % TYPEWRITER_PHRASES.length;
      setTimeout(tick, 350);
    }
  }
  tick();
})();

/* ─────────────── Navbar scroll state + progress bar ─────────────── */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 40);
  backToTop.classList.toggle('show', y > 500);
  if (scrollProgress) {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
  }
  updateActiveLink();
});

/* ─────────────── Save Portfolio as PDF (browser print → Save as PDF) ─────────────── */
const downloadPortfolio = document.getElementById('downloadPortfolio');
if (downloadPortfolio) {
  downloadPortfolio.addEventListener('click', () => window.print());
}

/* ─────────────── Staggered reveal (children animate one-by-one) ─────────────── */
document.querySelectorAll(
  '.projects-grid, .more-projects, .cert-gallery, .skills-grid, .lead-grid, ' +
  '.research-grid, .intl-timeline, .highlights-grid, .contact-cards, .cert-grid'
).forEach(group => {
  Array.from(group.children).forEach((child, i) => {
    if (child.classList.contains('reveal')) {
      child.classList.add('stagger-' + ((i % 6) + 1));
    }
  });
});

/* ─────────────── Mobile menu toggle ─────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  })
);

/* ─────────────── Active nav link on scroll ─────────────── */
const sections = document.querySelectorAll('section[id]');
function updateActiveLink() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (!link) return;
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ─────────────── Back to top ─────────────── */
backToTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

/* ─────────────── Scroll reveal (IntersectionObserver) ─────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─────────────── Animated stat counters ─────────────── */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      n += step;
      if (n >= target) { n = target; clearInterval(timer); }
      el.textContent = n;
    }, 35);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

/* ─────────────── Animated skill bars ─────────────── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const fill = entry.target;
    fill.style.width = fill.dataset.level + '%';
    skillObserver.unobserve(fill);
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

/* ─────────────── Footer year (auto-updates) ─────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
