/* exercise-bank.js — Kho bài tập (Clinical Editorial B v2): tìm kiếm, lọc select,
 * tab bộ đề, phân trang, trạng thái bài tập.
 * Trạng thái đọc từ localStorage 'spss-mlp-progress-v1':
 *   done['exercise:ID']           → Đã làm
 *   answers['exercise:ID…'] !=''  → Đang làm
 *   còn lại                       → Chưa làm
 * Không ghi/xóa dữ liệu — chỉ đọc để hiển thị (ghi do progress.js trên trang chi tiết). */
(function () {
  if (window.__exBankInit) return;
  window.__exBankInit = true;
  var KEY = 'spss-mlp-progress-v1';
  var PER_PAGE = 15;
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

  // ---- hub: filters + tabs + pagination ----
  var list = document.getElementById('exb-list');
  if (list) {
    var search = document.getElementById('exb-search');
    var selects = Array.prototype.slice.call(document.querySelectorAll('.exb-f'));
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.category-nav .catbtn'));
    var rows = Array.prototype.slice.call(list.querySelectorAll('.exercise-row'));
    var countEl = document.getElementById('exb-count');
    var emptyEl = document.getElementById('exb-empty');
    var prevBtn = document.getElementById('exb-prev');
    var nextBtn = document.getElementById('exb-next');
    var pageInfo = document.getElementById('exb-pageinfo');
    var src = '';
    var page = 1;

    function filters() {
      var f = {};
      selects.forEach(function (s) { f[s.getAttribute('data-f')] = s.value; });
      return f;
    }
    function matches(row, q, f) {
      if (q && (row.getAttribute('data-search') || '').indexOf(q) === -1) return false;
      if (src && row.getAttribute('data-src') !== src) return false;
      if (f.cat && row.getAttribute('data-cat') !== f.cat) return false;
      if (f.level && row.getAttribute('data-level') !== f.level) return false;
      if (f.tier && row.getAttribute('data-tier') !== f.tier) return false;
      if (f.status && statusOf(row.getAttribute('data-exid')) !== f.status) return false;
      return true;
    }
    function apply() {
      var q = (search && search.value || '').toLowerCase().trim();
      var f = filters();
      var visible = rows.filter(function (r) { return matches(r, q, f); });
      var pages = Math.max(1, Math.ceil(visible.length / PER_PAGE));
      if (page > pages) page = pages;
      rows.forEach(function (r) { r.hidden = true; });
      visible.forEach(function (r, i) {
        r.hidden = !(i >= (page - 1) * PER_PAGE && i < page * PER_PAGE);
      });
      if (countEl) countEl.textContent = visible.length + '/' + rows.length + ' bài';
      if (emptyEl) emptyEl.hidden = visible.length !== 0;
      list.hidden = visible.length === 0;
      var pager = document.querySelector('.pagination');
      if (pager) pager.hidden = visible.length === 0;
      if (pageInfo) pageInfo.textContent = 'Trang ' + page + ' / ' + pages;
      if (prevBtn) prevBtn.disabled = page <= 1;
      if (nextBtn) nextBtn.disabled = page >= pages;
    }
    if (search) search.addEventListener('input', function () { page = 1; apply(); });
    selects.forEach(function (s) { s.addEventListener('change', function () { page = 1; apply(); }); });
    tabs.forEach(function (b) {
      b.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        b.classList.add('active');
        src = b.getAttribute('data-src') || '';
        page = 1;
        apply();
      });
    });
    function reset() {
      if (search) search.value = '';
      selects.forEach(function (s) { s.value = ''; });
      src = '';
      tabs.forEach(function (t, i) { t.classList.toggle('active', i === 0); });
      page = 1;
      apply();
    }
    document.querySelectorAll('#exb-reset, [data-exb-reset]').forEach(function (b) {
      b.addEventListener('click', reset);
    });
    if (prevBtn) prevBtn.addEventListener('click', function () { page--; apply(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { page++; apply(); });
    apply();
  }

  document.addEventListener('DOMContentLoaded', paint);
  paint();
})();
