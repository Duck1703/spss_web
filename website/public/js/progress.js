/* progress.js — tiến độ học tập localStorage (MVP, không backend).
 * Key: 'spss-mlp-progress-v1' = { lastPage, done: {id:true}, answers: {id:text} }
 * Schema giữ nguyên tương thích ngược — chỉ mở rộng cách hiển thị.
 */
(function () {
  var KEY = 'spss-mlp-progress-v1';
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { done: {}, answers: {} }; }
    catch (e) { return { done: {}, answers: {} }; }
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  var state = load();

  // Ghi lastPage cho trang học (docs pages) — bao gồm lộ trình 14 ngày (dNN) + du-lieu
  if (/^\/(m01|m\d|d\d{2}|du-lieu|tai-lieu|lo-trinh|lo-trinh-14-ngay)\//.test(location.pathname)) {
    state.lastPage = location.pathname;
    save(state);
  }

  var BT_TOTAL = 16; // số câu hỏi có id bt* trong workbook M01
  var DAY_TOTAL = 14; // 14 ngày — done keys 'module:dNN'

  function setStatus(el, mode) {
    if (!el) return;
    el.dataset.state = mode;
    el.textContent = mode === 'done' ? '✓ Đã làm' : mode === 'draft' ? 'Đang soạn' : 'Chưa làm';
  }

  function paint() {
    // nút continue-learning trên homepage
    document.querySelectorAll('[data-continue]').forEach(function (b) {
      if (state.lastPage) { b.hidden = false; b.setAttribute('href', state.lastPage); }
    });
    // exercise inputs (textarea + select) + done states
    document.querySelectorAll('[data-answer]').forEach(function (t) {
      var id = t.getAttribute('data-answer');
      var hasText = !!(state.answers[id] && String(state.answers[id]).trim());
      if (state.answers[id] !== undefined) t.value = state.answers[id];
      var card = t.closest('.exercise-card');
      if (card) setStatus(card.querySelector('[data-status]'), state.done[id] ? 'done' : hasText ? 'draft' : 'empty');
      if (t.tagName === 'SELECT') t.classList.toggle('is-answered', hasText);
    });
    document.querySelectorAll('[data-done]').forEach(function (b) {
      var id = b.getAttribute('data-done');
      b.classList.toggle('is-done', !!state.done[id]);
      b.textContent = state.done[id] ? '✓ Đã làm' : 'Đánh dấu đã làm';
    });
    // module done
    document.querySelectorAll('[data-module-done]').forEach(function (b) {
      var id = b.getAttribute('data-module-done');
      b.classList.toggle('is-done', !!state.done['module:' + id]);
      b.textContent = state.done['module:' + id] ? '✓ Đã hoàn thành module' : b.dataset.label || 'Đánh dấu đã học xong M01';
    });
    // roadmap / homepage badges
    document.querySelectorAll('[data-module-badge]').forEach(function (el) {
      var id = el.getAttribute('data-module-badge');
      var done = !!state.done['module:' + id];
      el.textContent = done ? '✓ Đã học xong' : '';
      if (el.classList.contains('pill')) el.classList.toggle('pill--ready', done);
    });
    // progress summary (homepage panel)
    var nDone = Object.keys(state.done).filter(function (k) { return k.indexOf('bt') === 0; }).length;
    var nDays = Object.keys(state.done).filter(function (k) { return /^module:d\d{2}$/.test(k); }).length;
    var nDraft = Object.keys(state.answers).filter(function (k) {
      return !state.done[k] && String(state.answers[k]).trim();
    }).length;
    document.querySelectorAll('[data-progress-count]').forEach(function (el) {
      if (!nDays && !nDone && !nDraft) { el.textContent = 'Chưa có dữ liệu — bắt đầu từ Ngày 01'; return; }
      var parts = [nDays + '/' + DAY_TOTAL + ' ngày hoàn thành'];
      if (nDone) parts.push(nDone + '/' + BT_TOTAL + ' bài tập M01');
      if (nDraft) parts.push(nDraft + ' đang soạn');
      if (state.done['module:m01']) parts.push('M01 (tham khảo) hoàn thành');
      el.textContent = parts.join(' · ');
    });
    document.querySelectorAll('[data-progress-fill]').forEach(function (el) {
      var pct = nDays ? (nDays / DAY_TOTAL) : (nDone / BT_TOTAL);
      el.style.width = Math.round(pct * 100) + '%';
    });
  }

  var saveTimer = null;
  function flashSaved(card) {
    var el = card && card.querySelector('[data-saved]');
    if (!el) return;
    el.classList.add('is-visible');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () { el.classList.remove('is-visible'); }, 1600);
  }

  // autosave answers (delegated) — hoạt động cho cả textarea và select
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.matches && t.matches('[data-answer]')) {
      var id = t.getAttribute('data-answer');
      state.answers[id] = t.value;
      save(state);
      var card = t.closest('.exercise-card');
      if (card) {
        if (!state.done[id]) setStatus(card.querySelector('[data-status]'), t.value.trim() ? 'draft' : 'empty');
        flashSaved(card);
      }
      if (t.tagName === 'SELECT') t.classList.toggle('is-answered', !!String(t.value).trim());
    }
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-done],[data-module-done]') : null;
    if (!b) return;
    var id = b.getAttribute('data-done') || ('module:' + b.getAttribute('data-module-done'));
    state.done[id] = !state.done[id];
    if (!state.done[id]) delete state.done[id];
    save(state); paint();
  });

  // export / import
  window.slpExport = function () {
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'spss-mlp-tien-do.json';
    a.click();
  };
  window.slpImport = function (file) {
    var r = new FileReader();
    r.onload = function () {
      try { state = JSON.parse(r.result); save(state); paint(); alert('Đã nhập tiến độ.'); }
      catch (e) { alert('File không hợp lệ.'); }
    };
    r.readAsText(file);
  };

  document.addEventListener('DOMContentLoaded', paint);
  paint();
})();
