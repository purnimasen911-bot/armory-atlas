/* Armory Atlas — site interactions (no dependencies) */
(function () {
  'use strict';

  // ---- mobile nav toggle ----
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close after navigating a link
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- footer year ----
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- table filter (ammunition page) ----
  var filterInput = document.getElementById('tableFilter');
  var table = document.getElementById('ammoTable');
  var countEl = document.getElementById('filterCount');
  if (filterInput && table) {
    var rows = table.querySelectorAll('tbody tr');
    var total = rows.length;
    if (countEl) countEl.textContent = total + ' cartridges';
    filterInput.addEventListener('input', function () {
      var q = filterInput.value.trim().toLowerCase();
      var shown = 0;
      Array.prototype.forEach.call(rows, function (row) {
        var match = row.textContent.toLowerCase().indexOf(q) !== -1;
        row.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (countEl) countEl.textContent = shown + ' / ' + total + ' cartridges';
    });
  }
})();
