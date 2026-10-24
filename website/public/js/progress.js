/* progress.js — tiến độ học tập localStorage (MVP, không backend).
 * Key: 'spss-mlp-progress-v1' = { lastPage, done: {id:true}, answers: {id:text} }
 */
(function () {
  var KEY = 'spss-mlp-progress-v1';
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { done: {}, answers: {} }; }
    catch (e) { return { done: {}, answers: {} }; }
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  var state = load();

  // Ghi lastPage cho trang học (docs pages)
  if (/^\/(m01|m\d|tai-lieu|lo-trinh)\//.test(location.pathname)) {
    state.lastPage = location.pathname;
    save(state);
  }

  function paint() {
    // nút continue-learning trên homepage
    document.querySelectorAll('[data-continue]').forEach(function (b) {
      if (state.lastPage) { b.hidden = false; b.setAttribute('href', state.lastPage); }
    });
    // exercise textareas + done states
    document.querySelectorAll('[data-answer]').forEach(function (t) {
      var id = t.getAttribute('data-answer');
      if (state.answers[id]) t.value = state.answers[id];
      var status = t.closest('.exercise-card').querySelector('[data-status]');
      if (state.done[id]) status.textContent = '✓ đã làm';
      else if (state.answers[id] && state.answers[id].trim()) status.textContent = 'đang soạn';
    });
    document.querySelectorAll('[data-done]').forEach(function (b) {
      var id = b.getAttribute('data-done');
      if (state.done[id]) { b.textContent = '✓ Đã làm'; b.classList.add('is-done'); }
    });
    // module done
    document.querySelectorAll('[data-module-done]').forEach(function (b) {
      var id = b.getAttribute('data-module-done');
      if (state.done['module:' + id]) { b.textContent = '✓ Đã hoàn thành module'; b.classList.add('is-done'); }
    });
    // roadmap badges
    document.querySelectorAll('[data-module-badge]').forEach(function (el) {
      var id = el.getAttribute('data-module-badge');
      el.textContent = state.done['module:' + id] ? '✓ Đã học' : '';
    });
    // progress summary
    document.querySelectorAll('[data-progress-count]').forEach(function (el) {
      var n = Object.keys(state.done).filter(function (k) { return k.indexOf('bt') === 0; }).length;
      el.textContent = n + ' bài tập đã đánh dấu';
    });
  }

  // autosave answers (delegated)
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.matches && t.matches('[data-answer]')) {
      state.answers[t.getAttribute('data-answer')] = t.value;
      save(state);
      var status = t.closest('.exercise-card').querySelector('[data-status]');
      if (!state.done[t.getAttribute('data-answer')])
        status.textContent = t.value.trim() ? 'đang soạn' : '—';
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
