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
  
        if (browserLang.startsWith('uk')) {
            $.html5Translate(dict, 'uk');
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
            $.html5Translate(dict, 'uk');
            translate = 0;
        }
    });
  
    // Вызов функции для автоматической установки языка при загрузке страницы
    $(document).ready(function () {
        setLanguageByBrowserSettings();
    });
  


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
  