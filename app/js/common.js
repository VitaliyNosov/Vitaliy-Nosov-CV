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


// my dark theme

var theme = 0;

	$('#theme-icon').on('click', function () {
		if (theme == 0) {
			var icon = document.querySelector('#theme-icon');
			var body = document.querySelector('body');
			var content = document.querySelector('#content');
			var content2 = document.querySelector('#content__black');
			var content3 = document.querySelector('#switcer');
			var p = document.querySelector('.p');
			var buttonOne = document.querySelector('.close');
			var buttonTwo = document.querySelector('.close__two');
			var inputOne = document.querySelector('#nameFF');
			var inputTwo = document.querySelector('#contactFF');
			var textarea = document.querySelector('#projectFF');
			var input1 = document.querySelector('.inputOne');
			var input2 = document.querySelector('.inputTwo');
			var input3 = document.querySelector('.textarea');
			var popup = document.querySelector('.popup');
			var block__one = document.querySelector('.block__one')
			var block__two = document.querySelector('.block__two')
			var block__three = document.querySelector('.block__three')

			icon.style.color = '#9F2100';
			body.style.background = '#17212B';
			content.style.background = 'rgba(36, 47, 61, 0.5)';
			content2.style.background = '#1D2733';
			content3.style.background = '#1D2733';
			p.style.color = '#D7D7D7';
			buttonOne.style.color = '#D7D7D7';
			buttonTwo.style.color = '#D7D7D7';
			inputOne.style.background = '#242F3D';
			inputTwo.style.background = '#242F3D';
			textarea.style.background = '#242F3D';
			input1.style.color = '#007ACC';
			input2.style.color = '#007ACC';
			input3.style.color = '#007ACC';
			popup.style.background = '#17212B';
			block__one.style.borderBottom ='1px dashed #fff';
			block__two.style.borderBottom ='1px dashed #fff';
			block__three.style.borderBottom ='1px dashed #fff';

			theme = 1;
		}
		else {
			var icon = document.querySelector('#theme-icon');
			var body = document.querySelector('body');
			var content = document.querySelector('#content');
			var content2 = document.querySelector('#content__black');
			var content3 = document.querySelector('#switcer');
			var p = document.querySelector('.p');
			var buttonOne = document.querySelector('.close');
			var buttonTwo = document.querySelector('.close__two');
			var inputOne = document.querySelector('#nameFF');
			var inputTwo = document.querySelector('#contactFF');
			var textarea = document.querySelector('#projectFF');
			var input1 = document.querySelector('.inputOne');
			var input2 = document.querySelector('.inputTwo');
			var input3 = document.querySelector('.textarea');
			var popup = document.querySelector('.popup');
			var block__one = document.querySelector('.block__one')
			var block__two = document.querySelector('.block__two')
			var block__three = document.querySelector('.block__three')


			icon.style.color = '#034A72';
			body.style.background = '#EBEBEB';
			content.style.background = 'rgba(255, 255, 255, 0.8)';
			content2.style.background = '#fff';
			content3.style.background = '#fff';
			p.style.color = '#000';
			buttonOne.style.color = '#000';
			buttonTwo.style.color = '#000';
			inputOne.style.background = '#E7E7E8';
			inputTwo.style.background = '#E7E7E8';
			textarea.style.background = '#E7E7E8';
			input1.style.color = '#1A1A1A';
			input2.style.color = '#1A1A1A';
			input3.style.color = '#1A1A1A';
			popup.style.background = '#fff';
			block__one.style.borderBottom ='1px dashed #000000';
			block__two.style.borderBottom ='1px dashed #000000';
			block__three.style.borderBottom ='1px dashed #000000';
			
			theme = 0;
		}

	});



});


