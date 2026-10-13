const iconMap = {
  shield: '/assets/smurfs/smerf1-bezpieczenstwo.png',
  apple: '/assets/smurfs/smerf2-posilki.png',
  blocks: '/assets/smurfs/smerf3-wyposazenie.png',
  sparkles: '/assets/smurfs/smerf4-nauka.png'
};

const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');
const ui = isEnglish ? { call:'Call', soon:'new', plan:'View the new location plan →', visit:'View location →', locale:'en-GB' } : { call:'Zadzwoń', soon:'nowość', plan:'Zobacz plan nowej placówki →', visit:'Poznaj placówkę →', locale:'pl-PL' };

const normalizePhone = (v) => `+48${String(v).replace(/\D/g, '')}`;
const el = (id) => document.getElementById(id);

async function loadContent() {
  try {
    const [siteRes, newsRes] = await Promise.all([
      fetch(isEnglish ? '/content/site-en.json' : '/content/site.json'),
      fetch(isEnglish ? '/content/news-en.json' : '/content/news.json')
    ]);
    const site = await siteRes.json();
    const newsData = await newsRes.json();
    const news = Array.isArray(newsData) ? newsData : (newsData.items || []);

    el('announcementText').textContent = site.brand.announcement;
    el('brandEyebrow').textContent = site.brand.eyebrow;
    el('brandTagline').innerHTML = site.brand.taglineHtml || site.brand.tagline;
    el('brandDescription').textContent = site.brand.description;

    el('aboutTitle').textContent = site.about.title;
    el('aboutText').textContent = site.about.text;
    el('aboutQuote').textContent = `„${site.about.quote}”`;
    el('recruitmentTitle').textContent = site.recruitment.title;
    el('recruitmentText').textContent = site.recruitment.text;

    const p1 = site.contact.phone1;
    const p2 = site.contact.phone2;
    const p1tel = normalizePhone(p1);
    const p2tel = normalizePhone(p2);
    el('heroPhone').textContent = `${ui.call}: ${p1}`;
    el('heroPhone').href = `tel:${p1tel}`;
    el('recruitPhone').textContent = p1;
    el('recruitPhone').href = `tel:${p1tel}`;
    el('recruitEmail').href = `mailto:${site.contact.recruitmentEmail}`;
    el('contactPhone1').href = `tel:${p1tel}`;
    el('contactPhone1').querySelector('b').textContent = p1;
    el('contactPhone2').href = `tel:${p2tel}`;
    el('contactPhone2').querySelector('b').textContent = p2;
    el('contactEmail').href = `mailto:${site.contact.email}`;
    el('contactEmail').querySelector('b').textContent = site.contact.email;
    el('contactHours').textContent = site.contact.hours;

    el('featureGrid').innerHTML = site.features.map((f) => `
      <article class="feature-card reveal">
        <div class="feature-icon" aria-hidden="true"><img src="${iconMap[f.icon] || iconMap.sparkles}" alt="" loading="lazy"></div>
        <h3>${f.title}</h3>
        <p>${f.text}</p>
      </article>`).join('');

    el('locationGrid').innerHTML = site.locations.map((l) => {
      const soon = l.status === 'soon';
      const action = soon ? ui.plan : ui.visit;
      return `
      <a class="location-card ${soon ? 'location-card--soon' : ''} reveal" href="${l.page}" aria-label="${action.replace(' →','')}: ${l.city}">
        <div class="location-topline">
          <span class="location-city">${l.badge || 'Placówka'}</span>
          ${soon ? `<span class="location-pulse">${ui.soon}</span>` : '<span class="location-arrow" aria-hidden="true">↗</span>'}
        </div>
        <div class="location-visual" aria-hidden="true">${l.image ? `<img src="${l.image}" alt="" loading="lazy">` : `<span>${l.city.charAt(0)}</span>`}</div>
        <h3>${l.city}</h3>
        <p class="location-address">${l.address}</p>
        <p class="location-description">${l.description || ''}</p>
        <span class="location-action">${action}</span>
      </a>`;
    }).join('');

    const dateFormat = new Intl.DateTimeFormat(ui.locale, { day: '2-digit', month: 'long', year: 'numeric' });
    el('newsGrid').innerHTML = news.map((n) => `
      <article class="news-card reveal">
        <div class="news-art" aria-hidden="true"></div>
        <div class="news-body">
          <div class="news-meta"><span>${n.category}</span><time datetime="${n.date}">${dateFormat.format(new Date(n.date + 'T12:00:00'))}</time></div>
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
        </div>
      </article>`).join('');

    observeReveals();
  } catch (err) {
    console.warn('Nie udało się wczytać treści strony:', err);
    observeReveals();
  }
}

function observeReveals() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach((item) => obs.observe(item));
}

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
loadContent();
