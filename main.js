// ITConnect — Main JS

// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

// Add reveal styles inline
const style = document.createElement('style');
style.textContent = `
  .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.delay-1 { transition-delay: 0.1s; }
  .reveal.delay-2 { transition-delay: 0.2s; }
  .reveal.delay-3 { transition-delay: 0.3s; }
  .reveal.delay-4 { transition-delay: 0.4s; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

// Apply reveal to elements
const revealSelectors = [
  '.fitur-card', '.page-card', '.mono-card', '.prob-card',
  '.step', '.survei-bar-card', '.pie-card', '.quote-card',
  '.segmen-card', '.tentang-text', '.tentang-visual',
  '.section-title', '.section-sub', '.bar-item'
];
revealSelectors.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 4 === 1) el.classList.add('delay-1');
    if (i % 4 === 2) el.classList.add('delay-2');
    if (i % 4 === 3) el.classList.add('delay-3');
    observer.observe(el);
  });
});

// CTA form submit
const ctaBtn = document.querySelector('.cta-btn');
const ctaInput = document.querySelector('.cta-input');
const ctaSelect = document.querySelector('.cta-select');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    const email = ctaInput?.value.trim();
    const prodi = ctaSelect?.value;
    if (!email || !email.includes('@')) {
      ctaInput.style.borderColor = '#ff5f57';
      ctaInput.placeholder = 'Masukkan email yang valid';
      setTimeout(() => { ctaInput.style.borderColor = ''; }, 2000);
      return;
    }
    if (!prodi) {
      ctaSelect.style.borderColor = '#ff5f57';
      setTimeout(() => { ctaSelect.style.borderColor = ''; }, 2000);
      return;
    }
    ctaBtn.textContent = '✅ Berhasil Daftar!';
    ctaBtn.style.background = 'linear-gradient(135deg, #28c840, #20a030)';
    ctaBtn.disabled = true;
    ctaInput.value = '';
    ctaSelect.value = '';
  });
}

// Animate bars when visible
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const bars = e.target.querySelectorAll('.bar');
      bars.forEach(bar => {
        const target = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = target; }, 200);
      });
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.survei-bar-card').forEach(el => barObserver.observe(el));

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});
