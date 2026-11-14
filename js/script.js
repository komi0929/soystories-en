// 0. UI strings across English (default), Japanese, Korean, and Traditional Chinese.
const PAGE_LANG = (document.documentElement.lang || 'en').toLowerCase();
const UI = PAGE_LANG === 'ja' ? {
  openNow: '営業中 · 22:00まで（L.O. 21:45）',
  openLastOrder: '営業中 · ラストオーダーは21:45です',
  lastOrderPassed: 'ラストオーダーは終了しました · 毎日11:00オープン',
  closedNow: '営業時間外 · 毎日11:00オープン',
  allergenLabels: { soy: '大豆', almond: 'アーモンド', pistachio: 'ピスタチオ', cashew: 'カシューナッツ', macadamia: 'マカダミアナッツ', nuts: 'ナッツ類', sesame: 'ごま', yam: 'やまいも', apple: 'りんご', peach: 'もも' },
  allergenJoin: '・',
  allergenIdle: '上の原材料ボタンをタップすると、お召し上がり可能なメニューがその場で表示されます。',
  allergenResult: function (ok, total, names) { return '✓ ' + names + 'を含まないお召し上がり可能メニュー：' + ok + ' / ' + total + ' 区分'; },
  expandList: function (n) { return '全' + n + '区分の内訳を見る ＋'; },
  collapseList: '一覧を閉じる －',
  reviewsMore: 'さらにクチコミを見る（＋4件）',
  reviewsLess: 'クチコミを折りたたむ －',
  copied: '✓ コピーしました。Googleマップやタクシーアプリ（Uber・GO）にそのまま貼り付けられます。',
  copiedBtn: 'コピーしました',
  setDrinks: [
    ['オーガニックコーヒー（HOT）', 'オーガニックコーヒー HOT'],
    ['オーガニックコーヒー（COLD）', 'オーガニックコーヒー COLD'],
    ['黒糖ソイラテ（HOT）', '黒糖ソイラテ HOT'],
    ['黒糖ソイラテ（COLD）', '黒糖ソイラテ COLD'],
    ['抹茶ソイラテ（HOT）', '抹茶ソイラテ HOT'],
    ['抹茶ソイラテ（COLD）', '抹茶ソイラテ COLD'],
    ['甘酒ラテ', '甘酒ラテ（大豆不使用）'],
    ['レモンスカッシュ', 'レモンスカッシュ'],
    ['ミックスベリーティー', 'ミックスベリーティー'],
    ['トロピカルソーダ', 'トロピカルソーダ']
  ]
} : PAGE_LANG === 'ko' ? {
  openNow: '영업 중 · 22:00까지 (라스트오더 21:45)',
  openLastOrder: '영업 중 · 라스트오더 21:45',
  lastOrderPassed: '라스트오더 마감 · 매일 11:00 오픈',
  closedNow: '영업 준비 중 · 매일 11:00 오픈',
  allergenLabels: { soy: '대두(콩)', almond: '아몬드', pistachio: '피스타치오', cashew: '캐슈넛', macadamia: '마카다미아넛', nuts: '견과류', sesame: '참깨(검은깨)', yam: '참마(야마이모)', apple: '사과', peach: '복숭아' },
  allergenJoin: ' · ',
  allergenIdle: '피하고 싶은 원재료를 선택하면 드실 수 있는 메뉴만 바로 펼쳐집니다.',
  allergenResult: function (ok, total, names) { return '✓ ' + names + ' 미포함 추천 메뉴: ' + ok + ' / ' + total + '개 그룹'; },
  expandList: function (n) { return '전체 ' + n + '개 항목 보기 ＋'; },
  collapseList: '목록 접기 －',
  reviewsMore: '리뷰 더 보기 (＋4)',
  reviewsLess: '리뷰 접기 －',
  copied: '✓ 복사되었습니다! 구글 맵이나 택시 앱(Uber·GO)에 바로 붙여넣으세요.',
  copiedBtn: '복사 완료!',
  setDrinks: [
    ['オーガニックコーヒー（HOT）', '유기농 커피 HOT'],
    ['オーガニックコーヒー（COLD）', '유기농 커피 ICE'],
    ['黒糖ソイラテ（HOT）', '흑당 소이라떼 HOT'],
    ['黒糖ソイラテ（COLD）', '흑당 소이라떼 ICE'],
    ['抹茶ソイラテ（HOT）', '말차 소이라떼 HOT'],
    ['抹茶ソイラテ（COLD）', '말차 소이라떼 ICE'],
    ['甘酒ラテ', '아마자케 라떼 (대두 무첨가)'],
    ['レモンスカッシュ', '레몬 스쿼시'],
    ['ミックスベリーティー', '믹스베리 티'],
    ['トロピカルソーダ', '트로피컬 소다 (복숭아 함유)']
  ]
} : PAGE_LANG.indexOf('zh') === 0 ? {
  openNow: '營業中 · 至 22:00（最後點餐 21:45）',
  openLastOrder: '營業中 · 最後點餐 21:45',
  lastOrderPassed: '最後點餐已結束 · 每日 11:00 營業',
  closedNow: '休息中 · 每日 11:00 營業',
  allergenLabels: { soy: '大豆', almond: '杏仁', pistachio: '開心果', cashew: '腰果', macadamia: '夏威夷豆', nuts: '堅果類', sesame: '芝麻', yam: '山藥', apple: '蘋果', peach: '水蜜桃' },
  allergenJoin: '、',
  allergenIdle: '點擊上方想避開的食材，系統會立即展開您可安心享用的餐點。',
  allergenResult: function (ok, total, names) { return '✓ 不含' + names + '的可享用餐點：' + ok + ' / ' + total + ' 組'; },
  expandList: function (n) { return '查看全部 ' + n + ' 組明細 ＋'; },
  collapseList: '收合明細 －',
  reviewsMore: '查看更多旅客評價（＋4）',
  reviewsLess: '收合評價 －',
  copied: '✓ 已複製！可直接貼上至 Google Maps 或計程車 App（Uber・GO）。',
  copiedBtn: '已複製！',
  setDrinks: [
    ['オーガニックコーヒー（HOT）', '有機咖啡 HOT'],
    ['オーガニックコーヒー（COLD）', '有機咖啡 ICE'],
    ['黒糖ソイラテ（HOT）', '黑糖豆乳拿鐵 HOT'],
    ['黒糖ソイラテ（COLD）', '黑糖豆乳拿鐵 ICE'],
    ['抹茶ソイラテ（HOT）', '抹茶豆乳拿鐵 HOT'],
    ['抹茶ソイラテ（COLD）', '抹茶豆乳拿鐵 ICE'],
    ['甘酒ラテ', '甘酒拿鐵（不含大豆）'],
    ['レモンスカッシュ', '檸檬氣泡飲'],
    ['ミックスベリーティー', '綜合莓果茶'],
    ['トロピカルソーダ', '熱帶水果氣泡飲（含水蜜桃）']
  ]
} : {
  openNow: 'Open now · until 10:00 PM (L.O. 9:45 PM)',
  openLastOrder: 'Open now · last order at 9:45 PM',
  lastOrderPassed: 'Last order has passed · opens 11:00 AM',
  closedNow: 'Closed now · opens daily at 11:00 AM',
  allergenLabels: { soy: 'soybeans', almond: 'almonds', pistachio: 'pistachio', cashew: 'cashew nuts', macadamia: 'macadamia nuts', nuts: 'tree nuts', sesame: 'sesame', yam: 'Japanese yam', apple: 'apple', peach: 'peach' },
  allergenJoin: ', ',
  allergenIdle: 'Tap any ingredients above to instantly reveal matching menu options.',
  allergenResult: function (ok, total, names) { return '✓ ' + ok + ' of ' + total + ' menu groups are made without ' + names; },
  expandList: function (n) { return 'View all ' + n + ' menu groups +'; },
  collapseList: 'Hide list −',
  reviewsMore: 'Read 4 more traveler reviews +',
  reviewsLess: 'Show fewer reviews −',
  copied: '✓ Copied! Ready to paste into Google Maps, Uber, or GO Taxi.',
  copiedBtn: 'Copied!',
  setDrinks: [
    ['オーガニックコーヒー（HOT）', 'Organic Coffee (Hot)'],
    ['オーガニックコーヒー（COLD）', 'Organic Coffee (Iced)'],
    ['黒糖ソイラテ（HOT）', 'Brown Sugar Soy Latte (Hot)'],
    ['黒糖ソイラテ（COLD）', 'Brown Sugar Soy Latte (Iced)'],
    ['抹茶ソイラテ（HOT）', 'Matcha Soy Latte (Hot)'],
    ['抹茶ソイラテ（COLD）', 'Matcha Soy Latte (Iced)'],
    ['甘酒ラテ', 'Amazake Latte (Soy-free)'],
    ['レモンスカッシュ', 'Lemon Squash'],
    ['ミックスベリーティー', 'Mixed Berry Tea'],
    ['トロピカルソーダ', 'Tropical Soda (Peach)']
  ]
};

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

// 1a. Escape closes the mobile drawer and returns focus to the menu button
if (drawerIcon && drawerContent) {
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !drawerContent.classList.contains('is-checked')) return;
    drawerIcon.classList.remove('is-checked');
    drawerContent.classList.remove('is-checked');
    drawerIcon.setAttribute('aria-expanded', 'false');
    if (siteHeader) siteHeader.classList.remove('is-open');
    drawerIcon.focus();
  });
}

// 1a2. Mark the primary-nav link of the section currently in view (same-page anchors only)
(function () {
  const links = Array.prototype.slice.call(document.querySelectorAll('.hd__nav a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = [];
  links.forEach(function (a) { const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) map.push({ a: a, t: t }); });
  if (!map.length) return;
  const visible = new Map();
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { visible.set(en.target, en.isIntersecting); });
    let current = null;
    map.forEach(function (m) { if (visible.get(m.t)) current = current || m; });
    map.forEach(function (m) {
      const on = current === m;
      m.a.classList.toggle('is-current', on);
      if (on) m.a.setAttribute('aria-current', 'true'); else m.a.removeAttribute('aria-current');
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  map.forEach(function (m) { io.observe(m.t); });
})();

// 1b. Header becomes solid after scrolling; mobile action dock appears after the hero
(function () {
  const dock = document.querySelector('#js-dock');
  const hero = document.querySelector('.hero, .phero');
  const keepSolid = siteHeader && siteHeader.classList.contains('is-solid') && !document.querySelector('.hero');
  const onScroll = function () {
    const y = window.scrollY || window.pageYOffset;
    if (siteHeader && hero && !keepSolid) siteHeader.classList.toggle('is-solid', y > 40);
    if (dock && hero) {
      dock.classList.toggle('is-visible', y > hero.offsetHeight * 0.55);
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
      text.textContent = UI.openNow;
    } else if (t >= 1275 && t < 1305) {
      el.classList.add('is-soon');
      text.textContent = UI.openLastOrder;
    } else if (t >= 1305 && t < 1320) {
      el.classList.add('is-soon');
      text.textContent = UI.lastOrderPassed;
    } else {
      el.classList.add('is-closed');
      text.textContent = UI.closedNow;
    }
  };
  update();
  setInterval(update, 60000);
})();

// 1d. Progressive Disclosure Allergen Checker (9-allergen multi-filter + tree-nut preset + auto-expanding drawer)
(function () {
  const chips = document.querySelectorAll('.fchip');
  const listEl = document.querySelector('#js-checker-list');
  const items = document.querySelectorAll('#js-checker-list li');
  const result = document.querySelector('#js-checker-result');
  const resetBtn = document.querySelector('#js-checker-reset');
  const nutsBtn = document.querySelector('#js-checker-nuts');
  const hideOutToggle = document.querySelector('#js-checker-hide-out');
  const drawer = document.querySelector('#js-checker-drawer');
  const expandBtn = document.querySelector('#js-checker-expand');
  if (!chips.length || !items.length) return;

  const labels = UI.allergenLabels;
  const nutKeys = ['almond', 'pistachio', 'cashew', 'macadamia'];
  let manuallyOpened = false;

  const syncDrawer = function (activeCount) {
    if (!drawer) return;
    const isOpen = activeCount > 0 || manuallyOpened;
    drawer.classList.toggle('is-open', isOpen);
    if (expandBtn) {
      expandBtn.hidden = activeCount > 0;
      expandBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      expandBtn.textContent = isOpen ? UI.collapseList : UI.expandList(items.length);
    }
  };

  const apply = function () {
    const avoid = [];
    chips.forEach(function (c) { if (c.getAttribute('aria-pressed') === 'true') avoid.push(c.dataset.avoid); });
    let ok = 0;
    items.forEach(function (li) {
      const contains = (li.dataset.contains || '').split(' ').filter(Boolean);
      const out = avoid.some(function (a) {
        if (a === 'nuts') {
          return contains.indexOf('nuts') !== -1 || nutKeys.some(function (nk) { return contains.indexOf(nk) !== -1; });
        }
        return contains.indexOf(a) !== -1;
      });
      li.classList.toggle('is-out', out);
      li.classList.toggle('is-safe', avoid.length > 0 && !out);
      if (!out) ok++;
    });

    if (listEl) {
      const shouldHideOut = avoid.length > 0 && (!hideOutToggle || hideOutToggle.checked);
      listEl.classList.toggle('hide-out', shouldHideOut);
    }
    if (nutsBtn) {
      const nutChips = Array.prototype.filter.call(chips, function (c) { return nutKeys.indexOf(c.dataset.avoid) !== -1; });
      const allNutsOn = nutChips.length > 0 && nutChips.every(function (c) { return c.getAttribute('aria-pressed') === 'true'; });
      nutsBtn.classList.toggle('is-active', allNutsOn);
      nutsBtn.setAttribute('aria-pressed', allNutsOn ? 'true' : 'false');
    }
    if (resetBtn) resetBtn.hidden = avoid.length === 0;
    if (result) {
      if (!avoid.length) {
        result.textContent = UI.allergenIdle;
      } else {
        result.textContent = UI.allergenResult(ok, items.length, avoid.map(function (a) { return labels[a] || a; }).join(UI.allergenJoin));
      }
    }
    syncDrawer(avoid.length);
  };

  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      apply();
    });
  });

  if (nutsBtn) {
    nutsBtn.addEventListener('click', function () {
      const nutChips = Array.prototype.filter.call(chips, function (c) { return nutKeys.indexOf(c.dataset.avoid) !== -1; });
      const allOn = nutChips.every(function (c) { return c.getAttribute('aria-pressed') === 'true'; });
      nutChips.forEach(function (c) { c.setAttribute('aria-pressed', allOn ? 'false' : 'true'); });
      apply();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      manuallyOpened = false;
      apply();
    });
  }

  if (expandBtn) {
    expandBtn.addEventListener('click', function () {
      manuallyOpened = !manuallyOpened;
      syncDrawer(0);
    });
  }

  if (hideOutToggle) {
    hideOutToggle.addEventListener('change', apply);
  }

  apply();
})();

// 1d2. Complete menu category filter pills (.mfilter) & auto-expanding #full-menu-list
(function () {
  const fullMenu = document.querySelector('#full-menu-list');
  const filterBars = document.querySelectorAll('.mfilter');
  const setCategory = function (cat, autoOpen) {
    const scope = fullMenu ? (fullMenu.closest('.sec--menu') || document) : document;
    const btns = scope.querySelectorAll('[data-mcat-btn]');
    const rows = (fullMenu || scope).querySelectorAll('tr[data-mcat]');
    btns.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-mcat-btn') === cat ? 'true' : 'false');
    });
    rows.forEach(function (r) {
      const match = (cat === 'all' || r.getAttribute('data-mcat') === cat);
      r.classList.toggle('is-hidden-row', !match);
    });
    if (autoOpen && fullMenu && fullMenu.tagName === 'DETAILS' && !fullMenu.open) {
      fullMenu.open = true;
    }
  };

  filterBars.forEach(function (bar) {
    bar.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-mcat-btn]');
      if (!btn) return;
      setCategory(btn.getAttribute('data-mcat-btn') || 'all', true);
    });
  });

  if (fullMenu && fullMenu.tagName === 'DETAILS') {
    fullMenu.addEventListener('toggle', function () {
      const scope = fullMenu.closest('.sec--menu') || document;
      const btns = scope.querySelectorAll('[data-mcat-btn]');
      if (!fullMenu.open) {
        btns.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      } else {
        const anyActive = Array.prototype.some.call(btns, function (b) { return b.getAttribute('aria-pressed') === 'true'; });
        if (!anyActive) setCategory('all', false);
      }
    });
  }

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#cat-"], a[href="#full-menu-list"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    const details = target.closest('details.full-menu') || (target.matches('details.full-menu') ? target : null);
    if (details && !details.open) details.open = true;
    if (details && hash.indexOf('#cat-') === 0) {
      const catAttr = target.getAttribute('data-mcat') || 'all';
      setCategory(catAttr, false);
    }
    e.preventDefault();
    const smooth = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    (details || target).scrollIntoView({ behavior: smooth, block: 'start' });
    if (hash.indexOf('#cat-') === 0) {
      target.classList.remove('is-highlight');
      void target.offsetWidth;
      target.classList.add('is-highlight');
    }
  });
})();

// 1d3. FAQ Topic Filter Pills (.faq-filter)
(function () {
  const bar = document.querySelector('.faq-filter');
  const items = document.querySelectorAll('.faq details[data-faq-cat]');
  if (!bar || !items.length) return;
  const btns = bar.querySelectorAll('[data-faq-btn]');
  bar.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-faq-btn]');
    if (!btn) return;
    const cat = btn.getAttribute('data-faq-btn') || 'all';
    btns.forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    items.forEach(function (d) {
      const match = (cat === 'all' || (d.getAttribute('data-faq-cat') || '').indexOf(cat) !== -1);
      d.hidden = !match;
    });
  });
})();

// 1d4. Desktop Reviews Progressive Disclosure (#js-reviews-more)
(function () {
  const btn = document.querySelector('#js-reviews-more');
  const rail = document.querySelector('#js-review-rail');
  if (!btn || !rail) return;
  btn.addEventListener('click', function () {
    const expanded = rail.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    btn.textContent = expanded ? UI.reviewsLess : UI.reviewsMore;
  });
})();

// 1e. Smart "Show staff" ordering card (supports flavor/size variants + ¥330 drink set selector)
(function () {
  const overlay = document.querySelector('#js-staff');
  if (!overlay) return;
  const item = overlay.querySelector('#js-staff-item');
  const en = overlay.querySelector('#js-staff-en');
  const setLine = overlay.querySelector('#js-staff-set');
  const variantsBox = overlay.querySelector('#js-staff-variants');
  const addonWrap = overlay.querySelector('#js-staff-addon');
  const addonBtn = overlay.querySelector('#js-staff-addon-btn');
  const drinksBox = overlay.querySelector('#js-staff-drinks');
  const close = overlay.querySelector('#js-staff-close');
  const modes = overlay.querySelectorAll('[data-mode]');

  let lastFocus = null;
  let baseJa = '';
  let baseEn = '';
  let curVarJa = '';
  let curVarLocal = '';
  let setOn = false;
  let curDrinkJa = UI.setDrinks[3][0]; // Default: Iced Brown Sugar Soy Latte

  const renderText = function () {
    item.textContent = curVarJa ? (baseJa + '（' + curVarJa + '）') : baseJa;
    en.textContent = curVarLocal ? (baseEn + ' — ' + curVarLocal) : baseEn;
    if (setLine) {
      if (setOn) {
        setLine.hidden = false;
        setLine.textContent = '＋ドリンクセット：' + curDrinkJa + '（¥330）';
      } else {
        setLine.hidden = true;
        setLine.textContent = '';
      }
    }
  };

  if (drinksBox && UI.setDrinks && UI.setDrinks.length) {
    UI.setDrinks.forEach(function (pair, idx) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'staff__vbtn' + (idx === 3 ? ' is-on' : '');
      b.setAttribute('aria-pressed', idx === 3 ? 'true' : 'false');
      b.textContent = pair[1];
      b.addEventListener('click', function () {
        curDrinkJa = pair[0];
        drinksBox.querySelectorAll('.staff__vbtn').forEach(function (x) {
          x.classList.remove('is-on');
          x.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('is-on');
        b.setAttribute('aria-pressed', 'true');
        renderText();
      });
      drinksBox.appendChild(b);
    });
  }

  if (addonBtn) {
    addonBtn.addEventListener('click', function () {
      setOn = !setOn;
      addonBtn.classList.toggle('is-on', setOn);
      addonBtn.setAttribute('aria-pressed', setOn ? 'true' : 'false');
      if (drinksBox) drinksBox.hidden = !setOn;
      renderText();
    });
  }

  const open = function (btn) {
    lastFocus = btn;
    baseJa = btn.dataset.ja || '';
    baseEn = btn.dataset.en || '';
    curVarJa = '';
    curVarLocal = '';
    setOn = false;
    if (addonBtn) {
      addonBtn.classList.remove('is-on');
      addonBtn.setAttribute('aria-pressed', 'false');
    }
    if (drinksBox) drinksBox.hidden = true;
    if (addonWrap) addonWrap.hidden = btn.dataset.nodrinkset === '1';

    if (variantsBox) {
      variantsBox.innerHTML = '';
      const raw = (btn.dataset.variants || '').trim();
      if (raw) {
        const list = raw.split('|').filter(Boolean);
        list.forEach(function (entry, idx) {
          const parts = entry.split('::');
          const vJa = parts[0].trim();
          const vLocal = (parts[1] || parts[0]).trim();
          if (idx === 0) { curVarJa = vJa; curVarLocal = vLocal; }
          const vb = document.createElement('button');
          vb.type = 'button';
          vb.className = 'staff__vbtn' + (idx === 0 ? ' is-on' : '');
          vb.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false');
          vb.textContent = vLocal;
          vb.addEventListener('click', function () {
            curVarJa = vJa;
            curVarLocal = vLocal;
            variantsBox.querySelectorAll('.staff__vbtn').forEach(function (x) {
              x.classList.remove('is-on');
              x.setAttribute('aria-pressed', 'false');
            });
            vb.classList.add('is-on');
            vb.setAttribute('aria-pressed', 'true');
            renderText();
          });
          variantsBox.appendChild(vb);
        });
        variantsBox.hidden = false;
      } else {
        variantsBox.hidden = true;
      }
    }

    renderText();
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    if (close) close.focus();
  };

  const hide = function () {
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.js-show-staff');
    if (btn) open(btn);
  });
  if (close) close.addEventListener('click', hide);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) hide(); });
  document.addEventListener('keydown', function (e) {
    if (overlay.hidden) return;
    if (e.key === 'Escape') { hide(); return; }
    if (e.key === 'Tab') {
      const f = Array.prototype.slice.call(overlay.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')).filter(function (el) {
        return !el.closest('[hidden]');
      });
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  modes.forEach(function (m) {
    m.addEventListener('click', function () {
      modes.forEach(function (x) { x.classList.remove('is-on'); x.setAttribute('aria-pressed', 'false'); });
      m.classList.add('is-on');
      m.setAttribute('aria-pressed', 'true');
    });
  });
})();

// 1e2. Previous / next controls for horizontal rails ([data-rail] + [data-rail-nav="id"])
(function () {
  const navs = document.querySelectorAll('[data-rail-nav]');
  navs.forEach(function (nav) {
    const rail = document.getElementById(nav.getAttribute('data-rail-nav'));
    if (!rail) return;
    const prev = nav.querySelector('[data-rail-prev]');
    const next = nav.querySelector('[data-rail-next]');
    const step = function () { const c = rail.firstElementChild; return c ? c.getBoundingClientRect().width + 16 : rail.clientWidth * 0.8; };
    const sync = function () {
      const scrollable = rail.scrollWidth > rail.clientWidth + 4;
      nav.hidden = !scrollable;
      if (prev) prev.disabled = rail.scrollLeft <= 4;
      if (next) next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    };
    const smooth = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    if (prev) prev.addEventListener('click', function () { rail.scrollBy({ left: -step(), behavior: smooth }); });
    if (next) next.addEventListener('click', function () { rail.scrollBy({ left: step(), behavior: smooth }); });
    rail.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    window.addEventListener('load', sync);
    sync();
  });
})();

// 1f. Lightweight YouTube facade (loads the player only when tapped)
(function () {
  const v = document.querySelector('#js-video');
  if (!v) return;
  const thumb = v.querySelector('img');
  // If the thumbnail cannot load (or YouTube returns its 120px placeholder), keep a neutral panel + play button.
  const checkThumb = function () { if (!thumb.naturalWidth || thumb.naturalWidth <= 120) v.classList.add('is-noimg'); };
  if (thumb) {
    thumb.addEventListener('error', function () { v.classList.add('is-noimg'); });
    thumb.addEventListener('load', checkThumb);
    if (thumb.complete && thumb.currentSrc) checkThumb();
  }
  v.addEventListener('click', function () {
    const id = v.dataset.id;
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&playsinline=1';
    f.title = 'SoyStories video';
    f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    const frame = v.querySelector('.video__frame');
    if (frame) {
      // Replace the button with a plain container so the player is not nested inside a <button>.
      const box = document.createElement('div');
      box.className = v.className + ' is-playing';
      box.id = v.id;
      const fr = document.createElement('div');
      fr.className = 'video__frame';
      fr.appendChild(f);
      box.appendChild(fr);
      v.replaceWith(box);
      f.focus();
    } else {
      v.innerHTML = '';
      v.appendChild(f);
    }
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
const copyLabel = copyBtn ? copyBtn.textContent : '';

if (copyBtn) {
  copyBtn.addEventListener('click', function () {
    const address = copyBtn.getAttribute('data-address') || '〒810-0022 福岡県福岡市中央区薬院2丁目2-24 チサンマンション第3博多 1F';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(function () {
        if (copyFeedback) {
          copyFeedback.textContent = UI.copied;
        }
        copyBtn.textContent = UI.copiedBtn;
        setTimeout(function () {
          copyBtn.textContent = copyLabel;
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
        copyFeedback.textContent = UI.copied;
      }
    }
  });
}

// 5. Deduplicated Analytics Event Tracking (GA4 / dataLayer compatible)
(function () {
  window.dataLayer = window.dataLayer || [];
  let lastEventKey = '';
  let lastEventTime = 0;

  function trackSoyEvent(eventName, params) {
    const now = Date.now();
    const key = eventName + ':' + JSON.stringify(params || {});
    if (key === lastEventKey && now - lastEventTime < 800) return; // Prevent double-firing
    lastEventKey = key;
    lastEventTime = now;
    const payload = Object.assign({ event: eventName, page_path: window.location.pathname, page_lang: document.documentElement.lang || 'en' }, params || {});
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    }
  }

  document.addEventListener('click', function (e) {
    const target = e.target.closest('a, button, summary');
    if (!target) return;

    if (target.classList.contains('js-show-staff')) {
      trackSoyEvent('use_show_staff', { item_name: target.dataset.en || target.dataset.ja || 'unknown' });
      return;
    }
    if (target.classList.contains('fchip')) {
      trackSoyEvent('filter_allergen', { allergen: target.dataset.avoid || 'unknown' });
      return;
    }
    if (target.id === 'js-copy-address') {
      trackSoyEvent('copy_taxi_address', { location: 'yakuin' });
      return;
    }

    const href = target.getAttribute('href') || '';
    if (href.indexOf('google.com/maps/dir') !== -1) {
      trackSoyEvent('click_directions', { link_url: href });
    } else if (href.indexOf('google.com/maps') !== -1 || href.indexOf('g.page') !== -1) {
      trackSoyEvent('open_google_maps', { link_url: href });
    } else if (href.indexOf('lin.ee/') !== -1) {
      trackSoyEvent('click_line', { link_url: href });
    } else if (href.indexOf('ig.me/') !== -1 || href.indexOf('instagram.com/') !== -1) {
      trackSoyEvent('click_instagram_dm', { link_url: href });
    } else if (target.classList.contains('hd__lang') || target.classList.contains('drawer__ja') || target.hasAttribute('data-lang-switch')) {
      trackSoyEvent('switch_language', { target_lang: target.getAttribute('lang') || href });
    } else if (href.indexOf('#menu') !== -1 || href.indexOf('waffle') !== -1 || href.indexOf('soft.html') !== -1 || href.indexOf('dounuts.html') !== -1 || href.indexOf('ice.html') !== -1) {
      trackSoyEvent('view_menu_section', { menu_target: href });
    }
  }, { passive: true });
})();


// 6. Japanese-language hint: visitors whose browser is set to Japanese get a small link to the
//    hand-written Japanese edition (otherwise the browser machine-translates the English/KO/ZH pages).
(function () {
  if (document.documentElement.lang === 'ja') return;
  const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
  if (!/^ja(-|$)/i.test(langs[0] || '')) return;
  try { if (sessionStorage.getItem('soy-ja-hint') === 'closed') return; } catch (e) {}

  const css = document.createElement('style');
  css.textContent =
    '.ja-hint{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:70;display:flex;align-items:stretch;max-width:420px;margin:0 auto;' +
    'background:#2E3F2F;color:#fff;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.22);font-family:"Noto Sans JP","Hiragino Sans","Yu Gothic",Meiryo,sans-serif;font-size:15px;line-height:1.5}' +
    '.ja-hint a{flex:1;display:flex;align-items:center;gap:10px;min-height:52px;padding:10px 6px 10px 16px;color:#fff;font-weight:700;text-decoration:none;letter-spacing:.03em}' +
    '.ja-hint a small{display:block;font-weight:400;font-size:12px;opacity:.85;letter-spacing:.02em}' +
    '.ja-hint a:hover{text-decoration:underline}' +
    '.ja-hint button{flex:0 0 48px;border:0;background:transparent;color:#fff;font-size:22px;line-height:1;cursor:pointer;border-radius:0 10px 10px 0}' +
    '.ja-hint a:focus-visible,.ja-hint button:focus-visible{outline:3px solid #fff;outline-offset:-3px}' +
    '@media (min-width:1024px){.ja-hint{left:auto;right:24px;bottom:24px;margin:0;width:360px}}';
  document.head.appendChild(css);

  const box = document.createElement('div');
  box.className = 'ja-hint';
  box.setAttribute('lang', 'ja');
  box.setAttribute('translate', 'no');
  box.setAttribute('role', 'region');
  box.setAttribute('aria-label', '日本語ページのご案内');
  box.innerHTML = '<a href="./ja.html" lang="ja" translate="no" data-lang-switch="ja"><span>日本語のページはこちら<small>自動翻訳ではない、日本語の公式ページです</small></span></a>' +
                  '<button type="button" aria-label="閉じる">&times;</button>';
  box.querySelector('button').addEventListener('click', function () {
    try { sessionStorage.setItem('soy-ja-hint', 'closed'); } catch (e) {}
    box.remove();
  });
  document.body.appendChild(box);

  // keep the hint clear of the bottom action dock (it slides in after the hero on phones)
  const dock = document.querySelector('.dock');
  if (dock) {
    const place = function () {
      if (window.innerWidth >= 1024) { box.style.bottom = ''; return; }
      const top = dock.getBoundingClientRect().top;
      const visible = top < window.innerHeight - 4;
      box.style.bottom = visible ? (window.innerHeight - top + 10) + 'px' : '';
    };
    let raf = 0;
    const queue = function () { cancelAnimationFrame(raf); raf = requestAnimationFrame(place); };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    dock.addEventListener('transitionend', place);
    place();
  }
})();