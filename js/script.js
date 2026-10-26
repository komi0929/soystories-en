// 1. Mobile Drawer Navigation Toggle
const drawerIcon = document.querySelector('#js-drawer-icon');
const drawerContent = document.querySelector('#js-drawer-content');
const drawerLinks = document.querySelectorAll('.drawer-content__link, .drawer-content__button');
const siteHeader = document.querySelector('#js-header');

if (drawerIcon && drawerContent) {
  drawerIcon.addEventListener('click', function (e) {
    e.preventDefault();
    const isChecked = drawerIcon.classList.toggle('is-checked');
    drawerContent.classList.toggle('is-checked');
    drawerIcon.setAttribute('aria-expanded', isChecked ? 'true' : 'false');
    if (siteHeader) siteHeader.classList.toggle('is-open', isChecked);
  });
}

if (drawerLinks.length > 0 && drawerIcon && drawerContent) {
  for (let i = 0; i < drawerLinks.length; i++) {
    drawerLinks[i].addEventListener('click', function () {
      drawerIcon.classList.remove('is-checked');
      drawerContent.classList.remove('is-checked');
      drawerIcon.setAttribute('aria-expanded', 'false');
      if (siteHeader) siteHeader.classList.remove('is-open');
    });
  }
}

// 1b. Header becomes solid after scrolling; mobile action dock appears after the hero
(function () {
  const dock = document.querySelector('#js-dock');
  const hero = document.querySelector('.hero');
  const onScroll = function () {
    const y = window.scrollY || window.pageYOffset;
    if (siteHeader && hero) siteHeader.classList.toggle('is-solid', y > 40);
    if (dock && hero) {
      dock.classList.toggle('is-visible', y > hero.offsetHeight * 0.6);
    }
  };
  if (siteHeader || dock) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

// 1c. Keep the current category tab visible on sub-pages
(function () {
  const cur = document.querySelector('.tabs__track .is-current');
  const track = document.querySelector('.tabs__track');
  if (cur && track) track.scrollLeft = cur.offsetLeft - (track.clientWidth - cur.offsetWidth) / 2;
})();

// 1c. Live open / closed status (Fukuoka time, open daily 11:00–22:00, L.O. 21:45)
(function () {
  const el = document.querySelector('#js-open-status');
  if (!el || typeof Intl === 'undefined') return;
  const text = el.querySelector('.hero__status-text');
  const update = function () {
    let h = 0, m = 0;
    try {
      const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      parts.forEach(function (p) { if (p.type === 'hour') h = parseInt(p.value, 10) % 24; if (p.type === 'minute') m = parseInt(p.value, 10); });
    } catch (e) { return; }
    const t = h * 60 + m;
    el.classList.remove('is-closed', 'is-soon');
    if (t >= 660 && t < 1275) {
      text.textContent = 'Open now · until 10:00 PM (L.O. 9:45 PM)';
    } else if (t >= 1275 && t < 1305) {
      el.classList.add('is-soon');
      text.textContent = 'Open now · last order at 9:45 PM';
    } else if (t >= 1305 && t < 1320) {
      el.classList.add('is-soon');
      text.textContent = 'Last order has passed · opens 11:00 AM';
    } else {
      el.classList.add('is-closed');
      text.textContent = 'Closed now · opens daily at 11:00 AM';
    }
  };
  update();
  setInterval(update, 60000);
})();

// 1d. Allergen checker
(function () {
  const chips = document.querySelectorAll('.fchip');
  const items = document.querySelectorAll('#js-checker-list li');
  const result = document.querySelector('#js-checker-result');
  if (!chips.length || !items.length) return;
  const labels = { soy: 'soy', nuts: 'tree nuts', sesame: 'sesame' };
  const apply = function () {
    const avoid = [];
    chips.forEach(function (c) { if (c.getAttribute('aria-pressed') === 'true') avoid.push(c.dataset.avoid); });
    let ok = 0;
    items.forEach(function (li) {
      const contains = (li.dataset.contains || '').split(' ').filter(Boolean);
      const out = avoid.some(function (a) { return contains.indexOf(a) !== -1; });
      li.classList.toggle('is-out', out);
      if (!out) ok++;
    });
    if (!result) return;
    if (!avoid.length) {
      result.textContent = 'Select an allergen to filter the list.';
    } else {
      result.textContent = ok + ' of ' + items.length + ' items are free from ' + avoid.map(function (a) { return labels[a]; }).join(' & ') + '.';
    }
  };
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      apply();
    });
  });
})();

// 1e. "Show staff" ordering card
(function () {
  const overlay = document.querySelector('#js-staff');
  const triggers = document.querySelectorAll('.js-show-staff');
  if (!overlay || !triggers.length) return;
  const item = overlay.querySelector('#js-staff-item');
  const en = overlay.querySelector('#js-staff-en');
  const close = overlay.querySelector('#js-staff-close');
  const modes = overlay.querySelectorAll('[data-mode]');
  let lastFocus = null;
  const open = function (btn) {
    lastFocus = btn;
    item.textContent = btn.dataset.ja || '';
    en.textContent = btn.dataset.en || '';
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    close.focus();
  };
  const hide = function () {
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };
  triggers.forEach(function (b) { b.addEventListener('click', function () { open(b); }); });
  close.addEventListener('click', hide);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) hide(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !overlay.hidden) hide(); });
  modes.forEach(function (m) {
    m.addEventListener('click', function () {
      modes.forEach(function (x) { x.classList.remove('is-on'); });
      m.classList.add('is-on');
    });
  });
})();

// 1f. Lightweight YouTube facade (loads the player only when tapped)
(function () {
  const v = document.querySelector('#js-video');
  if (!v) return;
  v.addEventListener('click', function () {
    const id = v.dataset.id;
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&playsinline=1';
    f.title = 'SoyStories video';
    f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    v.innerHTML = '';
    v.appendChild(f);
  }, { once: true });
})();

// 2. Eat-In Swiper Slider (Only initialize if .swiper exists on page)
const swiperEl = document.querySelector('.swiper');
if (swiperEl && typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2800,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    speed: 1200,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

// 3. International Guest Reviews Carousel & Category Filter
const reviewsTrack = document.querySelector('#js-reviews-track');
const prevBtn = document.querySelector('#js-reviews-prev');
const nextBtn = document.querySelector('#js-reviews-next');
const filterBtns = document.querySelectorAll('.reviews__filter-btn');

if (reviewsTrack) {
  const getScrollStep = function () {
    const firstVisibleCard = reviewsTrack.querySelector('.review-card:not(.is-hidden)');
    if (firstVisibleCard) {
      return firstVisibleCard.offsetWidth + 24;
    }
    return 360;
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      reviewsTrack.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      reviewsTrack.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });
  }

  if (filterBtns.length > 0) {
    const allCards = reviewsTrack.querySelectorAll('.review-card');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach(function (b) {
          b.classList.remove('is-active');
        });
        btn.classList.add('is-active');

        allCards.forEach(function (card) {
          const categories = card.getAttribute('data-category') || '';
          if (filter === 'all' || categories.indexOf(filter) !== -1) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });

        reviewsTrack.scrollTo({ left: 0, behavior: 'smooth' });
      });
    });
  }
}

// 4. Taxi Driver Card - Copy Japanese Address Button
const copyBtn = document.querySelector('#js-copy-address');
const copyFeedback = document.querySelector('#js-copy-feedback');

if (copyBtn) {
  copyBtn.addEventListener('click', function () {
    const address = copyBtn.getAttribute('data-address') || '〒810-0022 福岡県福岡市中央区薬院2丁目2-24 チサンマンション第3博多 1F';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(function () {
        if (copyFeedback) {
          copyFeedback.textContent = '✓ Copied! Ready to paste into Google Maps, Uber, or GO Taxi.';
        }
        copyBtn.textContent = 'Copied!';
        setTimeout(function () {
          copyBtn.textContent = 'Copy Japanese Address';
        }, 3000);
      }).catch(function () {
        if (copyFeedback) {
          copyFeedback.textContent = address;
        }
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      if (copyFeedback) {
        copyFeedback.textContent = '✓ Copied! Ready to paste into Google Maps, Uber, or GO Taxi.';
      }
    }
  });
}
