// 1. Mobile Drawer Navigation Toggle
const drawerIcon = document.querySelector('#js-drawer-icon');
const drawerContent = document.querySelector('#js-drawer-content');
const drawerLinks = document.querySelectorAll('.drawer-content__link, .drawer-content__button');

if (drawerIcon && drawerContent) {
  drawerIcon.addEventListener('click', function (e) {
    e.preventDefault();
    const isChecked = drawerIcon.classList.toggle('is-checked');
    drawerContent.classList.toggle('is-checked');
    drawerIcon.setAttribute('aria-expanded', isChecked ? 'true' : 'false');
  });
}

if (drawerLinks.length > 0 && drawerIcon && drawerContent) {
  for (let i = 0; i < drawerLinks.length; i++) {
    drawerLinks[i].addEventListener('click', function () {
      drawerIcon.classList.remove('is-checked');
      drawerContent.classList.remove('is-checked');
      drawerIcon.setAttribute('aria-expanded', 'false');
    });
  }
}

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
