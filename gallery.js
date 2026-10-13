(() => {
  const images = Array.from(document.querySelectorAll('.gallery-real img'));
  if (!images.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="lightbox__backdrop" data-lightbox-close></div>
    <div class="lightbox__dialog" role="dialog" aria-modal="true" aria-label="Galeria zdjęć Smerfików">
      <button class="lightbox__close" type="button" aria-label="Zamknij galerię" data-lightbox-close>×</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Poprzednie zdjęcie">‹</button>
      <figure class="lightbox__figure">
        <img class="lightbox__image" alt="" />
        <figcaption class="lightbox__caption"><span class="lightbox__text"></span><span class="lightbox__counter"></span></figcaption>
      </figure>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Następne zdjęcie">›</button>
    </div>`;
  document.body.appendChild(overlay);

  const lightImg = overlay.querySelector('.lightbox__image');
  const text = overlay.querySelector('.lightbox__text');
  const counter = overlay.querySelector('.lightbox__counter');
  const prev = overlay.querySelector('.lightbox__nav--prev');
  const next = overlay.querySelector('.lightbox__nav--next');
  let current = 0;
  let touchStartX = null;

  const render = () => {
    const source = images[current];
    lightImg.src = source.currentSrc || source.src;
    lightImg.alt = source.alt || 'Zdjęcie Żłobka Smerfiki';
    text.textContent = source.alt || 'Żłobek Smerfiki';
    counter.textContent = `${current + 1} / ${images.length}`;
  };
  const show = (index = 0) => {
    current = (index + images.length) % images.length;
    render();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    overlay.querySelector('.lightbox__close').focus();
  };
  const hide = () => {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  };
  const move = (delta) => {
    current = (current + delta + images.length) % images.length;
    render();
  };

  images.forEach((img, index) => {
    const figure = img.closest('figure');
    if (figure) {
      figure.classList.add('gallery-clickable');
      figure.tabIndex = 0;
      figure.setAttribute('role', 'button');
      figure.setAttribute('aria-label', `Powiększ zdjęcie ${index + 1} z ${images.length}: ${img.alt || 'Żłobek Smerfiki'}`);
      figure.addEventListener('click', () => show(index));
      figure.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(index); }
      });
    }
  });

  document.querySelectorAll('[data-gallery-open]').forEach((btn) => btn.addEventListener('click', () => show(0)));
  overlay.querySelectorAll('[data-lightbox-close]').forEach((el) => el.addEventListener('click', hide));
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') move(-1);
    if (e.key === 'ArrowRight') move(1);
  });

  overlay.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, {passive:true});
  overlay.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(dx) > 45) move(dx > 0 ? -1 : 1);
  }, {passive:true});
})();
