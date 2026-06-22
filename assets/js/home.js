/* ==========================================================================
   NexGen Chemicals - Home Page Specific Interactions (Langard Framer Rebuild)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initCropPortfolioExpansion();
  initTestimonialsSlider();
  initParallaxHero();
  initCounters();
});

/**
 * Crop Portfolio Split-Expansion Grid
 * Center valley expands parent container width and shifts outer items on scroll entry
 */
function initCropPortfolioExpansion() {
  const section = document.querySelector('.crop-portfolio-section');
  const grid = document.querySelector('.portfolio-grid');

  if (!section || !grid) return;

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Viewport position progress calculation (from entrance to exit)
    const rawProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
    const progress = Math.max(0, Math.min(1, rawProgress));

    // Smooth animation envelope: delay expansion start, finish before exiting
    const animationProgress = Math.max(0, Math.min(1, (progress - 0.22) / 0.45));

    grid.style.setProperty('--portfolio-progress', animationProgress);
  });
}

/**
 * Testimonials Slider physics
 * Mouse-drag scroll tracking equipped with inertial dampening momentum decay
 * Added Next/Prev arrow button smooth navigation overrides
 */
function initTestimonialsSlider() {
  const slider = document.querySelector('.testimonials-slider-container');
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;
  let velX = 0;
  let lastX = 0;
  let momentumID;

  // Next/Prev Navigation Button Click Handlers
  const prevBtn = document.getElementById('testimonial-prev-btn');
  const nextBtn = document.getElementById('testimonial-next-btn');

  if (prevBtn && nextBtn) {
    const getScrollStep = () => {
      const card = slider.querySelector('.testimonial-card');
      if (card) {
        const style = window.getComputedStyle(slider);
        const gap = parseInt(style.gap) || 35;
        return card.offsetWidth + gap;
      }
      return 495; // Fallback scroll distance
    };

    prevBtn.addEventListener('click', () => {
      cancelAnimationFrame(momentumID);
      slider.scrollBy({
        left: -getScrollStep(),
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      cancelAnimationFrame(momentumID);
      slider.scrollBy({
        left: getScrollStep(),
        behavior: 'smooth'
      });
    });
  }

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    lastX = e.pageX;
    velX = 0;
    cancelAnimationFrame(momentumID);
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('dragging');
    if (Math.abs(velX) > 0.5) {
      startMomentumLoop();
    }
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging');
    if (Math.abs(velX) > 0.5) {
      startMomentumLoop();
    }
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    
    // Capture release velocity
    velX = e.pageX - lastX;
    lastX = e.pageX;
    
    slider.scrollLeft = scrollLeft - walk;
  });

  function startMomentumLoop() {
    // Dampen speed exponentially on release
    velX *= 0.92;
    slider.scrollLeft -= velX * 1.2;

    if (Math.abs(velX) > 0.5) {
      momentumID = requestAnimationFrame(startMomentumLoop);
    }
  }
}

/**
 * Asynchronous Marquee Parallax Cards & Parallax Hero Text
 * Forces image cards to drift independently over the moving typography track
 */
function initParallaxHero() {
  const kineticText = document.querySelector('.hero-kinetic-text');

  window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    
    // Kinetic Typography Translation (Hero section is at the top)
    if (kineticText) {
      kineticText.style.transform = `translateX(${scrollVal * 0.15}px)`;
    }
  });
}

/**
 * Scroll-triggered statistics count-up counter animation
 * Interpolates values smoothly over time with quadratic ease-out deceleration
 */
function initCounters() {
  const statsSection = document.querySelector('.about-us-section');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = statsSection.querySelectorAll('.stat-card');
        counters.forEach(card => {
          const numEl = card.querySelector('.stat-number');
          const target = parseInt(card.dataset.target);
          if (numEl && target) {
            animateCounter(numEl, target, 2000);
          }
        });
        observer.unobserve(statsSection); // Only animate once
      }
    });
  }, { threshold: 0.15 });

  observer.observe(statsSection);
}

function animateCounter(el, target, duration = 2000) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Easing out quadratic: progress * (2 - progress)
    const easeProgress = progress * (2 - progress);
    const currentVal = Math.floor(easeProgress * target);
    
    // Format numbers with commas (e.g. 4,000 instead of 4000)
    el.textContent = currentVal.toLocaleString('en-US');
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString('en-US');
    }
  };
  window.requestAnimationFrame(step);
}

/**
 * Interactive Multi-Slide Hero Slider
 * Rotates slides automatically and handles manual navigation overrides with active class toggling
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  if (slides.length === 0) return;

  let currentIdx = 0;
  let autoPlayTimer = null;
  const rotationDelay = 6000; // 6 seconds

  function showSlide(index) {
    // Clamp index boundaries
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    // Reset active classes
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Set active
    slides[index].classList.add('active');
    if (dots[index]) {
      dots[index].classList.add('active');
    }

    currentIdx = index;
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      showSlide(currentIdx + 1);
    }, rotationDelay);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function handleInteraction(action) {
    stopAutoPlay();
    action();
    startAutoPlay(); // Restart timer after interaction
  }

  // Next / Prev click handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      handleInteraction(() => showSlide(currentIdx + 1));
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      handleInteraction(() => showSlide(currentIdx - 1));
    });
  }

  // Dots click handlers
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.dataset.index) - 1;
      handleInteraction(() => showSlide(targetIdx));
    });
  });

  // Start initial timer
  startAutoPlay();
}
