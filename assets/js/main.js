(function () {
  var toggle = document.querySelector('[data-mobile-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');

  if (toggle && menu) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function track(eventName, payload) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, payload || {}));
  }

  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('cta_click', {
        cta_name: el.getAttribute('data-track'),
        cta_href: el.getAttribute('href') || ''
      });
    });
  });

  var lightbox = document.querySelector('[data-lightbox]');
  var lightboxImage = document.querySelector('[data-lightbox-image]');
  var lightboxClose = document.querySelector('[data-lightbox-close]');
  var galleryImages = document.querySelectorAll('.realizacje-grid img');

  if (lightbox && lightboxImage && galleryImages.length) {
    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }

    galleryImages.forEach(function (img) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Powieksz zdjecie realizacji');

      function openLightbox() {
        lightboxImage.src = img.currentSrc || img.src;
        lightboxImage.alt = img.alt || '';
        lightbox.removeAttribute('hidden');
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      img.addEventListener('click', openLightbox);
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox();
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }

})();
