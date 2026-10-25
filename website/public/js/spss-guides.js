/* spss-guides.js — tương tác cho SPSSActionGuide (mô phỏng giao diện SPSS).
 * - OS selector toàn cục: localStorage['spss-os'] = 'mac'|'win' → html[data-spss-os]
 * - Scene nav: nút Trước/Tiếp + các control data-advance (mục menu, nút …, nút OK…)
 * - Callout: click legend → highlight vùng tương ứng trong scene
 * - Tab Data/Variable View: click tab có data-advance → scene tiếp
 * Step-done xử lý bởi /js/progress.js (data-stepdone → done['step:id'], cùng KEY).
 */
(function () {
  if (window.__spssGuidesInit) return;
  window.__spssGuidesInit = true;

  var OSKEY = 'spss-os';
  function detectOS() {
    var ua = navigator.userAgent || '';
    return /Mac|iPhone|iPad|iPod/.test(ua) ? 'mac' : 'win';
  }
  function applyOS(os) {
    document.documentElement.setAttribute('data-spss-os', os);
    document.querySelectorAll('.os-sel-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-os-pick') === os));
    });
  }
  var os = 'win';
  try { os = localStorage.getItem(OSKEY) || detectOS(); } catch (e) { os = detectOS(); }
  applyOS(os);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.os-sel-btn');
    if (!b) return;
    var pick = b.getAttribute('data-os-pick');
    try { localStorage.setItem(OSKEY, pick); } catch (err) {}
    applyOS(pick);
  });

  // ---- scene navigation ----
  // Đặt dropdown ngay dưới nút menu mở — không phụ thuộc font size/px cứng.
  function positionDrops(guide) {
    guide.querySelectorAll('.spss-scene:not([hidden])').forEach(function (sc) {
      var drop = sc.querySelector('.sm-drop');
      if (!drop) return;
      var menu = sc.querySelector('.smw-menu');
      var open = sc.querySelector('.sm-menu-btn.is-open');
      if (menu) drop.style.top = (menu.offsetTop + menu.offsetHeight) + 'px';
      if (menu && open) drop.style.left = Math.max(4, open.offsetLeft) + 'px';
    });
  }
  function show(guide, idx) {
    var scenes = guide.querySelectorAll('.spss-scene');
    var n = scenes.length;
    idx = Math.max(0, Math.min(idx, n - 1));
    scenes.forEach(function (s, i) { s.hidden = i !== idx; });
    guide.dataset.pos = String(idx);
    var pos = guide.querySelector('[data-pos]');
    if (pos) pos.textContent = (idx + 1) + '/' + n;
    positionDrops(guide);
  }
  function step(guide, dir) {
    var cur = parseInt(guide.dataset.pos || '0', 10);
    show(guide, cur + dir);
  }
  document.querySelectorAll('.sguide').forEach(positionDrops);
  window.addEventListener('resize', function () {
    document.querySelectorAll('.sguide').forEach(positionDrops);
  });
  document.addEventListener('click', function (e) {
    var nav = e.target.closest && e.target.closest('[data-nav]');
    if (nav) {
      var g1 = nav.closest('.sguide');
      if (g1) step(g1, nav.getAttribute('data-nav') === 'next' ? 1 : -1);
      return;
    }
    var adv = e.target.closest && e.target.closest('[data-advance]');
    if (adv) {
      var g2 = adv.closest('.sguide');
      if (g2) step(g2, 1);
      return;
    }
    // menu bar click trong mock: chỉ phản hồi nếu scene định nghĩa dropdown cho menu đó
    var mb = e.target.closest && e.target.closest('.sm-menu-btn');
    if (mb) {
      var scene = mb.closest('.spss-scene');
      var drop = scene && scene.querySelector('.sm-drop-' + mb.getAttribute('data-menu').toLowerCase());
      if (!drop) return; // menu không mô phỏng — không giả vờ mở được
      mb.closest('.smw-menu').querySelectorAll('.sm-menu-btn').forEach(function (b) { b.classList.remove('is-open'); });
      mb.classList.add('is-open');
    }
    // legend callout → pulse vùng tương ứng
    var lg = e.target.closest && e.target.closest('.sm-legend-btn');
    if (lg) {
      var sc = lg.closest('.spss-scene');
      var nn = lg.getAttribute('data-callout');
      if (sc && nn) {
        sc.querySelectorAll('.sm-badge').forEach(function (bd) {
          if (bd.textContent.trim() === nn) {
            var el = bd.closest('.sm-hot, .sm-hotcell, .sm-ctl, .sm-item, .sm-btn, .sm-field, .sm-ellipsis, .sm-arrow, .sm-listbox, td, .is-hotrow') || bd.parentElement;
            if (el) {
              el.classList.remove('is-pulse');
              void el.offsetWidth;
              el.classList.add('is-pulse');
            }
          }
        });
        lg.classList.add('is-on');
        setTimeout(function () { lg.classList.remove('is-on'); }, 1200);
      }
    }
    // submenu toggle (touch)
    var it = e.target.closest && e.target.closest('.sm-item');
    if (it && it.querySelector('.sm-item-sub')) {
      it.classList.toggle('is-subopen');
    }
  });
})();
