gsap.registerPlugin(ScrollTrigger);

// ── Navbar ─────────────────────────────────────────────────────────────────
gsap.from('.navbar', {
  y: -80,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.navbar-nav .nav-item', {
  opacity: 0,
  y: -20,
  duration: 0.5,
  stagger: 0.08,
  delay: 0.4,
  ease: 'power2.out'
});

// ── Shared: Hero heading (inner pages) ─────────────────────────────────────
const heroH1 = document.querySelector('.hero h1');
if (heroH1) {
  gsap.from(heroH1, {
    opacity: 0,
    y: 70,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  });
}

// ── Shared: CTA section ────────────────────────────────────────────────────
gsap.utils.toArray('.cta-heading').forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 85%' },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  });
});

gsap.utils.toArray('.cta-button').forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 90%' },
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: 'back.out(1.7)'
  });

  el.addEventListener('mouseenter', () =>
    gsap.to(el, { scale: 1.07, duration: 0.25, ease: 'power2.out' })
  );
  el.addEventListener('mouseleave', () =>
    gsap.to(el, { scale: 1, duration: 0.25, ease: 'power2.inOut' })
  );
});

// ── Shared: Footer ─────────────────────────────────────────────────────────
gsap.from('.footer .col-md-3', {
  scrollTrigger: { trigger: '.footer', start: 'top 90%' },
  opacity: 0,
  y: 40,
  duration: 0.7,
  stagger: 0.15,
  ease: 'power2.out'
});

// ── Helper: image hover effect ─────────────────────────────────────────────
function addImageHover(selector, options = {}) {
  const {
    scale = 1.06,
    brightness = 1.1,
    duration = 0.4,
    shadow = true
  } = options;

  gsap.utils.toArray(selector).forEach(el => {
    const wrapper = el.closest('.portfolio-item, .project-card') || el.parentElement;

    el.style.willChange = 'transform';
    if (shadow) wrapper.style.overflow = 'hidden';

    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        scale,
        duration,
        ease: 'power2.out',
        filter: `brightness(${brightness})`
      });
      if (shadow) {
        gsap.to(wrapper, {
          boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
          duration,
          ease: 'power2.out'
        });
      }
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        scale: 1,
        duration,
        ease: 'power2.inOut',
        filter: 'brightness(1)'
      });
      if (shadow) {
        gsap.to(wrapper, {
          boxShadow: '0 0px 0px rgba(0,0,0,0)',
          duration,
          ease: 'power2.inOut'
        });
      }
    });
  });
}

// ── Helper: card tilt hover ────────────────────────────────────────────────
function addTiltHover(selector) {
  gsap.utils.toArray(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      gsap.to(card, {
        rotateX,
        rotateY,
        scale: 1.04,
        transformPerspective: 800,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power3.out'
      });
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════════════════════
if (document.querySelector('.hero-left')) {

  // Hero text slides from left
  gsap.from('.hero-left .texts', {
    opacity: 0,
    x: -90,
    duration: 1.1,
    delay: 0.3,
    ease: 'power3.out'
  });

  // Hero image slides from right
  gsap.from('.hero-client-image', {
    opacity: 0,
    x: 90,
    duration: 1.1,
    delay: 0.5,
    ease: 'power3.out'
  });

  // Hero footer bar fades up
  gsap.from('.hero .footers .col-md-6', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.2,
    delay: 1.1,
    ease: 'power2.out'
  });

  // Recent projects heading
  gsap.from('.project-title', {
    scrollTrigger: { trigger: '.project-title', start: 'top 85%' },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out'
  });

  gsap.from('.project-subtitle', {
    scrollTrigger: { trigger: '.project-subtitle', start: 'top 85%' },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 0.15,
    ease: 'power2.out'
  });

  // Project images stagger scale-in on scroll
  gsap.utils.toArray('.project-image').forEach((img, i) => {
    gsap.from(img, {
      scrollTrigger: { trigger: img, start: 'top 92%' },
      opacity: 0,
      scale: 0.88,
      y: 40,
      duration: 0.65,
      delay: (i % 2) * 0.1,
      ease: 'power2.out'
    });
  });

  // Hover on recent project images
  addImageHover('.project-image', { scale: 1.05, brightness: 1.08 });

  // 4+ number pops in
  gsap.from('.number-graphic', {
    scrollTrigger: { trigger: '.number-graphic', start: 'top 80%' },
    opacity: 0,
    scale: 0.4,
    duration: 0.9,
    ease: 'back.out(2)'
  });

  gsap.from('.experience-text', {
    scrollTrigger: { trigger: '.experience-text', start: 'top 80%' },
    opacity: 0,
    x: -40,
    duration: 0.7,
    delay: 0.2,
    ease: 'power2.out'
  });

  // Agency title slides from right
  gsap.from('.agency-title', {
    scrollTrigger: { trigger: '.agency-title', start: 'top 85%' },
    opacity: 0,
    x: 60,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.description', {
    scrollTrigger: { trigger: '.description', start: 'top 85%' },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out'
  });

  gsap.from('.learn-more-btn', {
    scrollTrigger: { trigger: '.learn-more-btn', start: 'top 90%' },
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    ease: 'back.out(2)'
  });

  const learnBtn = document.querySelector('.learn-more-btn');
  if (learnBtn) {
    learnBtn.addEventListener('mouseenter', () =>
      gsap.to(learnBtn, { scale: 1.08, duration: 0.25, ease: 'power2.out' })
    );
    learnBtn.addEventListener('mouseleave', () =>
      gsap.to(learnBtn, { scale: 1, duration: 0.25, ease: 'power2.inOut' })
    );
  }

  // Services section
  gsap.from('.services-main h1, .services-main .subtitle', {
    scrollTrigger: { trigger: '.services-main', start: 'top 80%' },
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out'
  });

  gsap.utils.toArray('.services-main .card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 92%' },
      opacity: 0,
      y: 70,
      duration: 0.7,
      delay: i * 0.12,
      ease: 'power3.out'
    });
  });

  // Tilt hover on service cards
  addTiltHover('.services-main .card');

  // Client logos fade + scale stagger
  gsap.utils.toArray('.client-logo').forEach((logo, i) => {
    gsap.from(logo, {
      scrollTrigger: { trigger: logo, start: 'top 95%' },
      opacity: 0,
      scale: 0.7,
      duration: 0.4,
      delay: (i % 4) * 0.07,
      ease: 'power2.out'
    });

    logo.addEventListener('mouseenter', () =>
      gsap.to(logo, { scale: 1.12, filter: 'grayscale(0%) brightness(1.1)', duration: 0.3, ease: 'power2.out' })
    );
    logo.addEventListener('mouseleave', () =>
      gsap.to(logo, { scale: 1, filter: 'grayscale(100%) brightness(1)', duration: 0.3, ease: 'power2.inOut' })
    );
  });

  // WhatsApp CTA
  gsap.from('.whatsapp-heading', {
    scrollTrigger: { trigger: '.whatsapp-section', start: 'top 80%' },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.whatsapp-subtext', {
    scrollTrigger: { trigger: '.whatsapp-section', start: 'top 80%' },
    opacity: 0,
    y: 25,
    duration: 0.6,
    delay: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.whatsapp-button', {
    scrollTrigger: { trigger: '.whatsapp-section', start: 'top 80%' },
    opacity: 0,
    scale: 0.7,
    duration: 0.6,
    delay: 0.4,
    ease: 'back.out(2)'
  });

  const waBtn = document.querySelector('.whatsapp-button');
  if (waBtn) {
    waBtn.addEventListener('mouseenter', () =>
      gsap.to(waBtn, { scale: 1.07, duration: 0.25, ease: 'power2.out' })
    );
    waBtn.addEventListener('mouseleave', () =>
      gsap.to(waBtn, { scale: 1, duration: 0.25, ease: 'power2.inOut' })
    );
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════════════════════════════
if (document.querySelector('.main-heading') && !document.querySelector('#contactForm')) {
  gsap.from('.main-heading', {
    scrollTrigger: { trigger: '.main-heading', start: 'top 80%' },
    opacity: 0,
    x: -70,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.content-text', {
    scrollTrigger: { trigger: '.content-text', start: 'top 80%' },
    opacity: 0,
    x: 60,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.stat-heading', {
    scrollTrigger: { trigger: '.stats-section', start: 'top 75%' },
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.stat-description', {
    scrollTrigger: { trigger: '.stats-section', start: 'top 75%' },
    opacity: 0,
    y: 35,
    duration: 0.7,
    delay: 0.25,
    ease: 'power2.out'
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// PROJECT PAGE
// ═══════════════════════════════════════════════════════════════════════════
if (document.querySelector('.portfolio-item')) {
  gsap.from('.main-pg .navbar-nav .nav-item', {
    opacity: 0,
    x: -30,
    duration: 0.4,
    stagger: 0.1,
    delay: 0.6,
    ease: 'power2.out'
  });

  // ScrollTrigger: each portfolio item fades in as it enters viewport
  gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 92%' },
      opacity: 0,
      y: 60,
      scale: 0.93,
      duration: 0.65,
      delay: (i % 2) * 0.12,
      ease: 'power2.out'
    });
  });

  // Hover: tilt + scale on each portfolio item image
  gsap.utils.toArray('.portfolio-item').forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;

    item.style.overflow = 'hidden';

    item.addEventListener('mouseenter', () => {
      gsap.to(img, {
        scale: 1.04,
        filter: 'brightness(1.08)',
        duration: 0.45,
        ease: 'power2.out'
      });
      gsap.to(item, {
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(img, {
        scale: 1,
        filter: 'brightness(1)',
        duration: 0.45,
        ease: 'power2.inOut'
      });
      gsap.to(item, {
        boxShadow: '0 0px 0px rgba(0,0,0,0)',
        duration: 0.4,
        ease: 'power2.inOut'
      });
    });

    // Cursor-tracking zoom inside image
    item.addEventListener('mousemove', e => {
      const rect = item.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      gsap.to(img, {
        x,
        y,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(img, { x: 0, y: 0, duration: 0.5, ease: 'power3.out' });
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SERVICE PAGE
// ═══════════════════════════════════════════════════════════════════════════
if (document.querySelector('.main-bd')) {

  const isNarrow = window.matchMedia('(max-width: 767px)').matches;

  // Service panels alternate slide direction (mobile: fade only, no horizontal slide)
  document.querySelectorAll('.main-bd > .container-fluid').forEach((panel, i) => {
    const text = panel.querySelector('.alldesign');
    const color = panel.querySelector('[class*="bg-custom-"]:not(.bg-custom-black)');
    const fromX = isNarrow ? 0 : (i % 2 === 0 ? 70 : -70);

    if (text) {
      gsap.from(text, {
        scrollTrigger: { trigger: panel, start: 'top 80%' },
        opacity: 0,
        x: -fromX,
        duration: 0.9,
        ease: 'power3.out'
      });
    }
    if (color) {
      gsap.from(color, {
        scrollTrigger: { trigger: panel, start: 'top 80%' },
        opacity: 0,
        x: fromX,
        duration: 0.9,
        ease: 'power3.out'
      });
    }
  });

  // Craft section
  gsap.from('.craft .main-titles', {
    scrollTrigger: { trigger: '.craft', start: 'top 80%' },
    opacity: 0,
    x: isNarrow ? 0 : -60,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.craft .section-titles').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.craft .section-content').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  // Strength items stagger
  gsap.utils.toArray('.strength-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%' },
      opacity: 0,
      y: 55,
      duration: 0.6,
      delay: (i % 3) * 0.1,
      ease: 'power2.out'
    });

    item.addEventListener('mouseenter', () =>
      gsap.to(item, { y: -8, scale: 1.03, duration: 0.3, ease: 'power2.out' })
    );
    item.addEventListener('mouseleave', () =>
      gsap.to(item, { y: 0, scale: 1, duration: 0.3, ease: 'power2.inOut' })
    );
  });

  // Related project cards hover + scroll
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: '.projects-section', start: 'top 82%' },
      opacity: 0,
      scale: 0.82,
      duration: 0.6,
      delay: i * 0.12,
      ease: 'back.out(1.5)'
    });
  });

  addImageHover('.project-card img', { scale: 1.1, brightness: 1.1 });
  addTiltHover('.project-card');
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTACT PAGE
// ═══════════════════════════════════════════════════════════════════════════
if (document.querySelector('#contactForm')) {
  gsap.from('.form-container .main-heading', {
    opacity: 0,
    y: 60,
    duration: 0.9,
    delay: 0.4,
    ease: 'power3.out'
  });

  gsap.from('.form-container .sub-heading', {
    opacity: 0,
    y: 35,
    duration: 0.7,
    delay: 0.7,
    ease: 'power2.out'
  });

  gsap.from('#contactForm .form-control, #contactForm .form-select', {
    opacity: 0,
    y: 25,
    duration: 0.45,
    stagger: 0.09,
    delay: 0.9,
    ease: 'power2.out'
  });

  gsap.from('.submit-btn', {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    delay: 1.5,
    ease: 'back.out(2)'
  });

  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('mouseenter', () =>
      gsap.to(submitBtn, { scale: 1.07, duration: 0.25, ease: 'power2.out' })
    );
    submitBtn.addEventListener('mouseleave', () =>
      gsap.to(submitBtn, { scale: 1, duration: 0.25, ease: 'power2.inOut' })
    );
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// LOGO PAGE
// ═══════════════════════════════════════════════════════════════════════════
if (document.querySelector('.changes')) {
  gsap.from('.left-column', {
    scrollTrigger: { trigger: '.changes', start: 'top 80%' },
    opacity: 0,
    x: -70,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.right-column', {
    scrollTrigger: { trigger: '.changes', start: 'top 80%' },
    opacity: 0,
    x: 70,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.craft .main-titles', {
    scrollTrigger: { trigger: '.craft', start: 'top 80%' },
    opacity: 0,
    x: -60,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.craft .section-titles').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.craft .section-content').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.strength-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%' },
      opacity: 0,
      y: 55,
      duration: 0.6,
      delay: (i % 3) * 0.1,
      ease: 'power2.out'
    });

    item.addEventListener('mouseenter', () =>
      gsap.to(item, { y: -8, scale: 1.03, duration: 0.3, ease: 'power2.out' })
    );
    item.addEventListener('mouseleave', () =>
      gsap.to(item, { y: 0, scale: 1, duration: 0.3, ease: 'power2.inOut' })
    );
  });

  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: '.projects-section', start: 'top 82%' },
      opacity: 0,
      scale: 0.82,
      duration: 0.6,
      delay: i * 0.12,
      ease: 'back.out(1.5)'
    });
  });

  addImageHover('.project-card img', { scale: 1.1, brightness: 1.1 });
  addTiltHover('.project-card');
}
