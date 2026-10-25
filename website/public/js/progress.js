/* progress.js — tiến độ học tập localStorage (MVP, không backend).
 * Key: 'spss-mlp-progress-v1' = { lastPage, done: {id:true}, answers: {id:text} }
 * Schema giữ nguyên tương thích ngược — chỉ mở rộng cách hiển thị.
 *
 * Namespace (Task 15): lộ trình exercise-first dùng id 'ef-dNN' (done['module:ef-dNN'],
 * card 'ef-dNN-...', step 'step:ef-dNN-...'). Id 'dNN'/'m01'/bt* cũ (lộ trình clinic_bp
 * trong archive/) KHÔNG bị xóa — chỉ không còn được đọc bởi UI mới, để tiến độ cũ
 * không đánh dấu nhầm bài mới là "đã học". Export/import giữ nguyên toàn bộ dữ liệu.
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
  if (/^\/(m01|m\d|d\d{2}|du-lieu|tai-lieu|lo-trinh|lo-trinh-14-ngay|kho-bai-tap)\//.test(location.pathname)) {
    state.lastPage = location.pathname;
    save(state);
  }

  var BT_TOTAL = 16; // số câu hỏi có id bt* trong workbook M01
  var DAY_TOTAL = 14; // 14 ngày exercise-first — done keys 'module:ef-dNN' (khóa 'module:dNN' cũ giữ nguyên, không đếm)
  var EX_TOTAL = 58; // bài tập nguồn P1-Q01…P1-Q43 + P2-Q01…P2-Q15 — done keys 'exercise:P1-QNN'

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
    // checklist artifact cards: restore checked + status theo số mục đã tick
    document.querySelectorAll('.exercise-card__checklist').forEach(function (ul) {
      var card = ul.closest('.exercise-card');
      var boxes = ul.querySelectorAll('[data-check]');
      var n = 0;
      boxes.forEach(function (cb) {
        var cid = cb.getAttribute('data-check');
        cb.checked = state.answers[cid] === '1';
        if (cb.checked) n++;
      });
      if (card && !state.done[card.getAttribute('data-exercise')]) {
        setStatus(card.querySelector('[data-status]'), n ? 'draft' : 'empty');
      }
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
      el.textContent = done ? '✓ Đã học xong' : (el.getAttribute('data-empty') || '');
      if (el.classList.contains('pill')) el.classList.toggle('pill--ready', done);
    });
    // progress summary (homepage panel)
    var nDone = Object.keys(state.done).filter(function (k) { return k.indexOf('bt') === 0; }).length;
    var nDays = Object.keys(state.done).filter(function (k) { return /^module:ef-d\d{2}$/.test(k); }).length;
    var nDraft = Object.keys(state.answers).filter(function (k) {
      return k.indexOf('#') === -1 && !state.done[k] && String(state.answers[k]).trim();
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
    // dashboard (trang chủ OD): số liệu THẬT — không dùng key 'odp-*' của prototype
    var nEx = Object.keys(state.done).filter(function (k) { return /^exercise:P[12]-Q\d{2}$/.test(k); }).length;
    document.querySelectorAll('[data-dash-days]').forEach(function (el) {
      el.innerHTML = nDays + '<small>/' + DAY_TOTAL + '</small>';
    });
    document.querySelectorAll('[data-dash-ex]').forEach(function (el) {
      el.innerHTML = nEx + '<small>/' + EX_TOTAL + '</small>';
    });
    document.querySelectorAll('[data-dash-remain]').forEach(function (el) {
      el.textContent = EX_TOTAL - nEx;
    });
    // next lesson = ngày ef- đầu tiên chưa 'module:…' done, theo thứ tự [data-day-row] trong DOM
    var nextRow = null;
    document.querySelectorAll('[data-day-row]').forEach(function (r) {
      if (!nextRow && !state.done['module:' + r.getAttribute('data-day-row')]) nextRow = r;
    });
    document.querySelectorAll('[data-dash-next-href]').forEach(function (a) {
      if (nextRow) {
        a.setAttribute('href', nextRow.getAttribute('data-day-href'));
        a.textContent = nDays ? 'Tiếp tục học' : 'Bắt đầu — Ngày ' + nextRow.getAttribute('data-day-code');
      } else {
        a.setAttribute('href', '/kho-bai-tap/');
        a.textContent = 'Ôn tập — Kho bài tập';
      }
    });
    if (nextRow) {
      var nn = nextRow.getAttribute('data-day-code');
      var t = document.querySelector('[data-dash-next-title]');
      var m = document.querySelector('[data-dash-next-meta]');
      var c = document.querySelector('[data-dash-next-chip]');
      if (t) t.textContent = nextRow.getAttribute('data-day-title');
      if (m) m.textContent = nextRow.getAttribute('data-day-meta');
      if (c) c.textContent = 'Ngày ' + nn + ' / ' + DAY_TOTAL;
    } else if (document.querySelector('[data-day-row]')) {
      var t2 = document.querySelector('[data-dash-next-title]');
      var m2 = document.querySelector('[data-dash-next-meta]');
      var c2 = document.querySelector('[data-dash-next-chip]');
      if (t2) t2.textContent = 'Hoàn thành 14 ngày — ôn tập trong Kho bài tập';
      if (m2) m2.textContent = 'Tất cả module ef-d01…ef-d14 đã đánh dấu xong.';
      if (c2) c2.textContent = '14 / ' + DAY_TOTAL;
    }
    // step checkpoint (hướng dẫn trực quan SPSS): data-stepdone → done['step:id']
    document.querySelectorAll('[data-stepdone]').forEach(function (cb) {
      cb.checked = !!state.done['step:' + cb.getAttribute('data-stepdone')];
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
  // checklist checkbox: lưu trạng thái tick vào answers[<id>#<i>] — cùng schema, tương thích ngược
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches && t.matches('[data-check]')) {
      var cid = t.getAttribute('data-check');
      if (t.checked) { state.answers[cid] = '1'; } else { delete state.answers[cid]; }
      save(state);
      var card = t.closest('.exercise-card');
      if (card && !state.done[card.getAttribute('data-exercise')]) {
        var boxes = card.querySelectorAll('[data-check]');
        var n = 0;
        boxes.forEach(function (cb) { if (cb.checked) n++; });
        setStatus(card.querySelector('[data-status]'), n ? 'draft' : 'empty');
        flashSaved(card);
      }
    }
    if (t.matches && t.matches('[data-stepdone]')) {
      var sid = 'step:' + t.getAttribute('data-stepdone');
      if (t.checked) { state.done[sid] = true; } else { delete state.done[sid]; }
      save(state);
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
