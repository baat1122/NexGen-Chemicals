/* ==========================================================================
   NexGen Chemicals - Global Core Javascript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initLanguageSwitcher();
  initWhatsAppWidget();
  initGlobalNavigation();
  initSmartHeader();
});

/**
 * Global Theme Engine (Day/Night Mode)
 * Dynamic toggle with local storage persistence
 */
function initThemeEngine() {
  const themeBtn = document.querySelector('.theme-toggle-btn');
  if (!themeBtn) return;

  // Check persisted preference or system setting
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
  }

  // Toggle switch handler
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Smooth rotate micro-animation on toggle
    themeBtn.style.transform = 'scale(1.1) rotate(180deg)';
    setTimeout(() => {
      themeBtn.style.transform = '';
    }, 300);
  });
}

/**
 * Smart Scroll Header Physics
 * Replicates premium template header scroll-state tracking
 */
function initSmartHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  
  // Set initial scroll state
  if (lastScrollY > 50) {
    header.classList.add('header-scrolled');
  }

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Scroll Down - hide header, but only if we scrolled past the top zone
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      header.classList.add('header-hidden');
    } 
    // Scroll Up - show header
    else {
      header.classList.remove('header-hidden');
    }

    // Top Anchor Lock & Backdrop Blur Physics
    if (currentScrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}


/**
 * Global Communications Anchor (WhatsApp Widget)
 * Persistent bottom-right action and timed 4s Urdu pop-up
 */
function initWhatsAppWidget() {
  const popup = document.querySelector('.whatsapp-popup-bubble');
  const closeBtn = document.querySelector('.whatsapp-popup-close-btn');
  const widgetContainer = document.querySelector('.whatsapp-widget-container');

  if (!popup || !widgetContainer) return;

  // Check if closed previously in this session
  const popupClosed = sessionStorage.getItem('wa_popup_closed');

  if (!popupClosed) {
    // Timed pop-up notification container after 4 seconds
    setTimeout(() => {
      popup.classList.add('show');
    }, 4000);
  }

  // Close popup listener
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      popup.classList.remove('show');
      sessionStorage.setItem('wa_popup_closed', 'true');
    });
  }
}

/**
 * Global Responsive Navigation Menu Engine
 * Equips both desktop hover behaviors and mobile touch toggles
 */
function initGlobalNavigation() {
  const hamburger = document.getElementById('mobile-menu-hamburger');
  const mainNav = document.getElementById('main-navigation-menu');
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  const megaTrigger = document.querySelector('.mega-menu-trigger');

  // Toggle mobile drawer menu
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('hamburger-active');
      mainNav.classList.toggle('mobile-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        mainNav.classList.remove('mobile-active');
      }
    });
  }

  // Handle dropdown and mega menu toggles on mobile touch screens
  dropdownTriggers.forEach(trigger => {
    const link = trigger.querySelector('.nav-link');
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        // Only prevent default if clicking on the parent nav-link to toggle dropdown
        if (e.target === link || (trigger.contains(e.target) && !e.target.classList.contains('dropdown-item-link'))) {
          e.preventDefault();
          e.stopPropagation();
          trigger.classList.toggle('active');
          
          // Close other open dropdowns
          dropdownTriggers.forEach(t => {
            if (t !== trigger) t.classList.remove('active');
          });
          if (megaTrigger) megaTrigger.classList.remove('active');
        }
      }
    });
  });

  if (megaTrigger) {
    const megaLink = megaTrigger.querySelector('.nav-link');
    megaTrigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        if (e.target === megaLink || (megaTrigger.contains(e.target) && !e.target.classList.contains('mega-item-link') && !e.target.closest('.mega-promo'))) {
          e.preventDefault();
          e.stopPropagation();
          megaTrigger.classList.toggle('active');

          // Close other dropdowns
          dropdownTriggers.forEach(t => t.classList.remove('active'));
        }
      }
    });
  }
}




/**
 * Language Switcher Preservation & Click Tracking
 */
function initLanguageSwitcher() {
  const switchLinks = document.querySelectorAll('.lang-switch-link');
  if (switchLinks.length === 0) return;

  const currentSearch = window.location.search;
  switchLinks.forEach(link => {
    // Append query string if any
    if (currentSearch) {
      const baseHref = link.getAttribute('href');
      if (baseHref && !baseHref.includes(currentSearch)) {
        link.setAttribute('href', baseHref + currentSearch);
      }
    }

    // Save selection on click
    link.addEventListener('click', () => {
      const targetLang = link.dataset.lang;
      localStorage.setItem('preferred-language', targetLang);
    });
  });
}
