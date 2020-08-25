$(document).ready(function () {


//translator functions

$.html5Translate = function (dict, lang) {

	$('[data-translate-key]').each(function () {
		$(this).html(dict[lang][$(this).data('translateKey')]);
	});

};

	
		var translate = 0;

		$('#btn').on('click', function () {
			if (translate == 0) {
				$.html5Translate(dict, 'en');

				translate = 1;
			}
			else {
				$.html5Translate(dict, 'ru');


				translate = 0;
			}
		});




//media functions

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

  // закрыть на крестик
  $('.js-close-campaign').click(function () {
    $('.js-overlay-campaign').fadeOut();

  });

  // закрыть по клику вне окна
  $(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.js-overlay-campaign').fadeOut();

    }
  });


// my typed js


	var typed = new Typed(".hero-typed-text", {
		strings: ["var mySrc = myImage.getAttribute('src');</br>\ if(mySrc === 'images/firefox-icon.png')</br> \
      \myImage.setAttribute('src','img/i.png');</br> \ } </br>else {</br> \ myImage.setAttribute('src','img/i.png');</br>\
    	}\
			}</br> \ var i = document.querySelector('span');</br>\ var y = document.querySelector('h1');</br>\
			 var z = document.querySelector('h2');</br>\
			 var u = document.getElementById('icon')</br>\
			 var w = document.getElementById('block')"],
		typeSpeed: 80,//Время набора текста
		backSpeed: 80,//Время стерания текста
		loop: true,//Зацыкливает набор текста
		showCursor: false,
	});


// my body scrolbar

$(function () {
	//The passed argument has to be at least a empty object or a object with your desired options
	$("body").overlayScrollbars({
		sizeAutoCapable: false,
		resize: "vertical"
	});
});

$('.block__text').overlayScrollbars({
    sizeAutoCapable: false,
    resize: "vertical"
    
});



});


