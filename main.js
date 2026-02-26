// ============================
// GORIANKA — main.js
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // --- Header scroll effect ---
  const header = document.getElementById('header');
  if (header) {
    // Inner pages already start with 'scrolled' class hardcoded.
    // Keep it always on non-index pages so header stays opaque.
    const isInnerPage = !['', 'index.html'].includes(window.location.pathname.split('/').pop());
    const langBtn = document.getElementById('langToggleBtn');
    const onScroll = () => {
      if (isInnerPage || window.scrollY > 60) {
        header.classList.add('scrolled');
        // On homepage when scrolled: red-tinted button (visible on white header)
        if (!isInnerPage && langBtn) {
          langBtn.classList.remove('bg-white/20', 'hover:bg-white/30', 'backdrop-blur', 'border-white/30', 'text-white');
          langBtn.classList.add('bg-gorianka-red/10', 'hover:bg-gorianka-red/20', 'border-gorianka-red/30', 'text-gorianka-red');
        }
      } else {
        header.classList.remove('scrolled');
        // On homepage at top: white ghost button (visible on dark hero)
        if (langBtn) {
          langBtn.classList.remove('bg-gorianka-red/10', 'hover:bg-gorianka-red/20', 'border-gorianka-red/30', 'text-gorianka-red');
          langBtn.classList.add('bg-white/20', 'hover:bg-white/30', 'backdrop-blur', 'border-white/30', 'text-white');
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  // --- Mobile hamburger menu ---
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburgerIcon = menuBtn ? menuBtn.querySelector('.hamburger-icon') : null;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      if (hamburgerIcon) hamburgerIcon.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        if (hamburgerIcon) hamburgerIcon.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Highlight active page in nav ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // --- Scroll-into-view animations ---
  const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.island, .brand-card, .contact-card, .product-cat-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // CSS class that triggers the animation
    const style = document.createElement('style');
    style.textContent = `.in-view { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
  };
  animateOnScroll();

});
