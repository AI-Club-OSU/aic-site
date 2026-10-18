document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile nav toggle ---------- */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navMenu = document.querySelector('[data-nav-menu]');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('flex');
      navMenu.classList.toggle('hidden');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var recentGrid = document.getElementById('recent-grid');
  var upcomingList = document.getElementById('upcoming-list');
  if (!recentGrid && !upcomingList) return; // e.g. about.html

  var FALLBACK_IMAGE = 'assets/ai_logo.png';
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function esc(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  // "2026-10-07" -> local Date (avoids the UTC off-by-one-day bug)
  function parseDate(s) {
    var p = String(s).slice(0, 10).split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function fmtDate(d) {
    return MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  /* ---------- modal ---------- */
  var modalBackdrop = document.getElementById('event-modal-backdrop');
  var closeBtn = document.getElementById('event-modal-close');
  var imageEl = document.getElementById('event-modal-image');
  var tagEl = document.getElementById('event-modal-tag');
  var dateEl = document.getElementById('event-modal-date');
  var titleEl = document.getElementById('event-modal-title');
  var descEl = document.getElementById('event-modal-desc');

  function openEventModal(ev) {
    tagEl.textContent = ev.tag || 'Event';
    dateEl.textContent = fmtDate(ev._date);
    titleEl.textContent = ev.title;
    descEl.textContent = ev.description || ev.summary || '';
    imageEl.innerHTML = '';
    var img = document.createElement('img');
    img.src = ev.image || FALLBACK_IMAGE;
    img.alt = ev.title;
    img.className = ev.image ? 'w-full h-full object-cover object-top' : 'w-full h-full object-contain p-10';
    imageEl.appendChild(img);

    modalBackdrop.classList.remove('hidden');
    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeEventModal() {
    modalBackdrop.classList.add('hidden');
    modalBackdrop.classList.remove('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalBackdrop) {
    closeBtn.addEventListener('click', closeEventModal);
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) closeEventModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) closeEventModal();
    });
  }

  /* ---------- renderers ---------- */
  function renderCard(ev) {
    var card = document.createElement('article');
    card.className = 'bg-charcoal text-paper rounded-lg overflow-hidden flex flex-col border-2 border-brick cursor-pointer transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 focus-visible:ring-offset-paper';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-haspopup', 'dialog');

    var imgClass = ev.image ? 'absolute inset-0 w-full h-full object-cover object-top' : 'absolute inset-0 w-full h-full object-contain p-10';
    card.innerHTML =
      '<div class="bg-paper aspect-[16/10] relative overflow-hidden">' +
        '<img src="' + esc(ev.image || FALLBACK_IMAGE) + '" alt="' + esc(ev.title) + '" class="' + imgClass + '">' +
        '<span class="absolute top-3 left-3 z-10 bg-sand text-ink font-mono text-[.68rem] uppercase tracking-wide px-2.5 py-1 rounded-full">' + esc(ev.tag || 'Event') + '</span>' +
      '</div>' +
      '<div class="p-5 flex-1 flex flex-col">' +
        '<div class="font-mono text-[.75rem] text-brick mb-2">' + esc(fmtDate(ev._date)) + '</div>' +
        '<h3 class="font-display font-bold text-[1.05rem] mb-2.5">' + esc(ev.title) + '</h3>' +
        '<p class="text-sand text-[.92rem] flex-1">' + esc(ev.summary || ev.description) + '</p>' +
        '<div class="story-foot-rule mt-3.5 pt-3 font-mono text-[.72rem] text-sand uppercase tracking-wide">Written by AI Club · Click to view details</div>' +
      '</div>';

    card.addEventListener('click', function () { openEventModal(ev); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEventModal(ev); }
    });
    return card;
  }

  function renderUpcoming(ev) {
    var row = document.createElement('div');
    row.className = 'flex items-center gap-5 flex-wrap bg-paper2 rounded-lg px-5 py-4';
    row.innerHTML =
      '<div class="bg-gradient-to-r from-[#e91e25] to-[#7c2166] text-paper font-mono font-bold rounded-md px-4 py-3 text-center min-w-[78px] leading-tight">' +
        '<span class="block text-xl">' + ev._date.getDate() + '</span>' +
        '<span class="text-[.7rem] uppercase tracking-wide">' + MONTHS[ev._date.getMonth()] + '</span>' +
      '</div>' +
      '<div class="flex-1 min-w-[200px]">' +
        '<h3 class="font-display font-bold text-[1.05rem] mb-1">' + esc(ev.title) + '</h3>' +
        '<p class="text-charcoal text-[.92rem] m-0">' + esc(ev.summary || ev.description) + '</p>' +
      '</div>' +
      '<span class="bg-charcoal text-paper font-mono text-[.7rem] uppercase tracking-wide px-3 py-1.5 rounded-full">' + esc(ev.tag || 'Event') + '</span>';
    return row;
  }

  function emptyState(el, msg) {
    el.innerHTML = '<p class="text-charcoal font-mono text-sm">' + msg + '</p>';
  }

  /* ---------- load events.json ---------- */
  fetch('events.json', { cache: 'no-cache' })
    .then(function (res) {
      if (!res.ok) throw new Error('events.json ' + res.status);
      return res.json();
    })
    .then(function (data) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);

      var events = (data.events || [])
        .filter(function (ev) { return ev && ev.title && ev.date; })
        .map(function (ev) { ev._date = parseDate(ev.date); return ev; });

      // past = newest first, upcoming = soonest first
      var past = events.filter(function (ev) { return ev._date < today; })
                       .sort(function (a, b) { return b._date - a._date; });
      var upcoming = events.filter(function (ev) { return ev._date >= today; })
                           .sort(function (a, b) { return a._date - b._date; });

      if (recentGrid) {
        var limit = parseInt(recentGrid.getAttribute('data-limit'), 10) || past.length;
        recentGrid.innerHTML = '';
        if (!past.length) emptyState(recentGrid, 'No past events yet.');
        past.slice(0, limit).forEach(function (ev) { recentGrid.appendChild(renderCard(ev)); });
      }

      if (upcomingList) {
        upcomingList.innerHTML = '';
        if (!upcoming.length) emptyState(upcomingList, 'No upcoming events posted yet — check our Discord for the latest.');
        upcoming.forEach(function (ev) { upcomingList.appendChild(renderUpcoming(ev)); });
      }
    })
    .catch(function (err) {
      console.error(err);
      if (recentGrid) emptyState(recentGrid, 'Couldn’t load events.');
      if (upcomingList) emptyState(upcomingList, 'Couldn’t load events.');
    });
});