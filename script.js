(function () {
  'use strict';

  // Мобильное меню
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Демонстрационная форма
  var form = document.getElementById('contactForm');
  if (!form) return;

  var notice = document.getElementById('formNotice');

  function setError(id, text) {
    document.getElementById(id).textContent = text;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();
    var ok = true;

    setError('nameError', '');
    setError('emailError', '');
    setError('messageError', '');
    notice.textContent = '';

    if (!name) { setError('nameError', 'Введите имя.'); ok = false; }
    if (!email) {
      setError('emailError', 'Введите адрес электронной почты.'); ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('emailError', 'Проверьте формат адреса, например name@example.com.'); ok = false;
    }
    if (!message) { setError('messageError', 'Введите сообщение.'); ok = false; }

    if (ok) {
      notice.textContent = 'Демонстрационная форма — данные не отправляются.';
      form.reset();
    }
  });
})();
