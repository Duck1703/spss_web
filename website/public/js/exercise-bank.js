/* exercise-bank.js — Kho bài tập: lọc/tìm kiếm + trạng thái bài tập.
 * Trạng thái đọc từ localStorage 'spss-mlp-progress-v1':
 *   done['exercise:ID']           → Đã làm
 *   answers['exercise:ID…'] !=''  → Đang làm
 *   còn lại                       → Chưa làm
 * Không ghi/xóa dữ liệu — chỉ đọc để hiển thị (ghi do progress.js trên trang chi tiết). */
(function () {
  if (window.__exBankInit) return;
  window.__exBankInit = true;
  var KEY = 'spss-mlp-progress-v1';
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { done: {}, answers: {} }; }
    catch (e) { return { done: {}, answers: {} }; }
  }
  var state = load();

  function statusOf(id) {
    if (state.done['exercise:' + id]) return 'done';
    for (var k in state.answers) {
      if (k.indexOf('exercise:' + id) === 0 && String(state.answers[k]).trim()) return 'draft';
    }
    return 'empty';
  }
  var LBL = { done: '✓ Đã làm', draft: 'Đang làm', empty: 'Chưa làm' };
  function paint() {
    document.querySelectorAll('[data-exstatus]').forEach(function (el) {
      var st = statusOf(el.getAttribute('data-exstatus'));
      el.dataset.state = st;
      el.textContent = LBL[st];
    });
  }

  // ---- hub filters ----
  var root = document.querySelector('.exb-filters');
  if (root) {
    var search = root.querySelector('.exb-search');
    var selects = root.querySelectorAll('.exb-f');
    var cards = document.querySelectorAll('.exb-card');
    var countEl = document.querySelector('[data-exb-count]');
    function apply() {
      var q = (search.value || '').toLowerCase().trim();
      var f = {};
      selects.forEach(function (s) { f[s.getAttribute('data-f')] = s.value; });
      var n = 0;
      cards.forEach(function (c) {
        var show = true;
        if (q && c.getAttribute('data-search').indexOf(q) === -1) show = false;
        if (show && f.src && c.getAttribute('data-src') !== f.src) show = false;
        if (show && f.cat && c.getAttribute('data-cat') !== f.cat) show = false;
        if (show && f.tier && c.getAttribute('data-tier') !== f.tier) show = false;
        if (show && f.status && statusOf(c.getAttribute('data-exid')) !== f.status) show = false;
        c.hidden = !show;
        if (show) n++;
      });
      if (countEl) countEl.textContent = n + '/' + cards.length + ' bài';
      // ẩn group header nếu không còn card nào trong group
      document.querySelectorAll('.exb-list').forEach(function (list) {
        var any = Array.prototype.some.call(list.children, function (c) { return !c.hidden; });
        var h = list.previousElementSibling;
        while (h && h.tagName !== 'H2') h = h.previousElementSibling;
        if (h) h.hidden = !any;
      });
    }
    search.addEventListener('input', apply);
    selects.forEach(function (s) { s.addEventListener('change', apply); });
    apply();
  }

  document.addEventListener('DOMContentLoaded', paint);
  paint();
})();
