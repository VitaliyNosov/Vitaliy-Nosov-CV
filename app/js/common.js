// jQuery для пользовательского интерфейса и переводчика

$(function () {
  // custom color border   
  $('#block1').click(function() {
      $('.mobile-color-mob').removeClass('mobile-color-mob');
  });
  
  $('#block2').click(function() {
      $('.mob-mod').addClass('mobile-color-mob');
  });

  // translator functions
  $.html5Translate = function (dict, lang) {
      $('[data-translate-key]').each(function () {
          $(this).html(dict[lang][$(this).data('translateKey')]);
      });
  };

  // Устанавливаем начальный язык и состояние кнопки
  let translate;

  // Автоматическая установка языка по настройкам браузера
  function setLanguageByBrowserSettings() {
      const browserLang = navigator.language || navigator.userLanguage;

      if (browserLang.startsWith('ru')) {
          $.html5Translate(dict, 'ru');
          translate = 0;
          $('#btn').prop('checked', false);
      } else {
          $.html5Translate(dict, 'en');
          translate = 1;
          $('#btn').prop('checked', true);
      }
  }

  // Переключение языка при изменении состояния чекбокса
  $('#btn').on('change', function () {
      if ($(this).is(':checked')) {
          $.html5Translate(dict, 'en');
          translate = 1;
      } else {
          $.html5Translate(dict, 'ru');
          translate = 0;
      }
  });

  // Вызов функции для автоматической установки языка при загрузке страницы
  $(document).ready(function () {
      setLanguageByBrowserSettings();
  });

  // media functions
  $("#click-left").click(function () {
      $("#container-left").hide(450);
      $("#container-right").show(450);
  });

  $("#click-right").click(function () {
      $("#container-left").show(450);
      $("#container-right").hide(450);
  });

  // modal popup 
  $('.js-button-campaign').click(function () {
      $('.js-overlay-campaign').fadeIn();
      $('.js-overlay-campaign').addClass('disabled');
  });

  // Закрыть модальное окно на крестик
  $('.js-close-campaign').click(function () {
      $('.js-overlay-campaign').fadeOut();
  });

  // Закрыть по клику вне окна
  $(document).mouseup(function (e) {
      const popup = $('.js-popup-campaign');
      if (e.target !== popup[0] && popup.has(e.target).length === 0) {
          $('.js-overlay-campaign').fadeOut();
      }
  });

  // my typed js
  var typed = new Typed(".hero-typed-text", {
      strings: [
          "var mySrc = myImage.getAttribute('src');</br>\ if(mySrc === 'images/firefox-icon.png')</br> \
          \myImage.setAttribute('src','img/i.png');</br> \ } </br>else {</br> \ myImage.setAttribute('src','img/i.png');</br>\
          }\ var i = document.querySelector('span');</br>\ var y = document.querySelector('h1');</br>\ var z = document.querySelector('h2');</br>\ var u = document.getElementById('icon')</br>\ var w = document.getElementById('block')"
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      showCursor: false,
  });

  // GSAP preloader
  const text = document.querySelector('.text');

  const splitText = (el) => {
      el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
          return `<div class="word">` +
                 m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
                 `</div>`;
      });
      return el;
  };

  const split = splitText(text);

  function random(min, max){
      return (Math.random() * (max - min)) + min;
  }

  Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
      gsap.from(el, 2.5, {
          opacity: 0,
          scale: .1,
          x: random(-500, 500),
          y: random(-500, 500),
          z: random(-500, 500),
          delay: idx * 0.25,
          repeat: 0,
      });
  });

  // Появление блока
  gsap.to('.preloader', {
      duration: 2.5,
      y: 0,
      scale: 1,
      opacity: 1
  });

  gsap.to('.linePreloader', {
      duration: 1,
      y: 0,
      scale: 1
  });
});


// animation text gsap

 // Функция для разбивания текста на символы
 function splitText(element) {
  const listItems = element.querySelectorAll("li");

  listItems.forEach(li => {
      const text = li.innerText;
      const splitTextArray = text.split('');
      li.innerHTML = ""; // Очищаем оригинальный текст

      // Разбиваем текст на символы и оборачиваем каждый в тег .char
      splitTextArray.forEach(char => {
          const span = document.createElement("span");
          span.classList.add("char");
          span.textContent = char === " " ? "\u00A0" : char; // Неразрывный пробел
          li.appendChild(span);
      });
  });
}

// Функция анимации символов
function animateChars(element) {
  gsap.to(element.querySelectorAll(".char"), {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.03 // Задержка между появлением букв
  });
}

// Инициализация элементов с классом .texts
document.querySelectorAll(".texts").forEach(element => {
  splitText(element); // Разбиваем текст на буквы
});

// Обработчик прокрутки
function handleScroll() {
  document.querySelectorAll(".texts").forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Запускаем анимацию, если элемент в области видимости
      if (rect.top < windowHeight * 0.8 && !element.classList.contains("animated")) {
          animateChars(element);
          element.classList.add("animated"); // Помечаем, что элемент анимирован
      }
  });
}

// Инициализируем проверку при прокрутке
window.addEventListener("scroll", handleScroll);
handleScroll(); // Запуск при загрузке страницы
