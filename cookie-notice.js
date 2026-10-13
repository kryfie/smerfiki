(function () {
  'use strict';

  var STORAGE_KEY = 'smerfiki_cookie_notice_ack_v1';

  function isAcknowledged() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function acknowledge() {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
      // If localStorage is unavailable, the notice will simply appear again next visit.
    }
  }

  function buildNotice() {
    if (isAcknowledged()) return;

    var lang = (document.documentElement.lang || 'pl').toLowerCase();
    var isEnglish = lang.indexOf('en') === 0;

    var notice = document.createElement('aside');
    notice.className = 'cookie-notice';
    notice.setAttribute('role', 'dialog');
    notice.setAttribute('aria-live', 'polite');
    notice.setAttribute('aria-label', isEnglish ? 'Cookie information' : 'Informacja o cookies');

    var inner = document.createElement('div');
    inner.className = 'cookie-notice__inner';

    var copy = document.createElement('div');
    copy.className = 'cookie-notice__copy';

    var title = document.createElement('strong');
    title.className = 'cookie-notice__title';
    title.textContent = isEnglish ? 'Cookies and privacy' : 'Cookies i prywatność';

    var text = document.createElement('p');
    text.textContent = isEnglish
      ? 'This website uses only essential cookies and similar technologies required for the website to work properly. We do not use advertising or analytics cookies.'
      : 'Ta strona wykorzystuje wyłącznie niezbędne pliki cookies i podobne technologie potrzebne do prawidłowego działania serwisu. Nie używamy cookies reklamowych ani analitycznych.';

    copy.appendChild(title);
    copy.appendChild(text);

    var actions = document.createElement('div');
    actions.className = 'cookie-notice__actions';

    var policy = document.createElement('a');
    policy.className = 'cookie-notice__link';
    policy.href = isEnglish ? '/en/cookie-policy/' : '/polityka-cookies/';
    policy.textContent = isEnglish ? 'Cookie Policy' : 'Polityka cookies';

    var button = document.createElement('button');
    button.className = 'cookie-notice__button';
    button.type = 'button';
    button.textContent = isEnglish ? 'Got it' : 'Rozumiem';

    button.addEventListener('click', function () {
      acknowledge();
      notice.classList.add('cookie-notice--closing');
      window.setTimeout(function () {
        notice.remove();
      }, 180);
    });

    actions.appendChild(policy);
    actions.appendChild(button);
    inner.appendChild(copy);
    inner.appendChild(actions);
    notice.appendChild(inner);
    document.body.appendChild(notice);

    window.requestAnimationFrame(function () {
      notice.classList.add('cookie-notice--visible');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNotice);
  } else {
    buildNotice();
  }
})();
