// JavaScript Document

// affix menu
$(document).ready(function() {
	"use strict";
  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
      
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window), wrapper);
  });
  
});

//
! function (a) {
	"use strict";
	a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			// Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
			if (this.hash !== "") {
				// Store hash
				var e = a(this.hash);
				// Usando o método animate () do jQuery para adicionar uma página suave
				// O número opcional (800) especifica o número de milissegundos necessários para rolar para a área especificada
				if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({
					scrollTop: e.offset().top - 100
				}, 800)
				// 800, "easeInOutExpo"), !1 deixa mais rapida a rolagem
			}
		}
	}), a(".js-scroll-trigger").click(function () {
		a(".navbar-collapse").collapse("hide")
		// Adicione scrollspy para o <body>
	}), a("body").scrollspy({
		target: "#menuItens",
		offset: 105		
	});
	var e = function () {
		a("#menuItens").offset().top > 100 ? a("#menuItens").addClass("navbar-shrink") : a("#menuItens").removeClass("navbar-shrink")
	};
		// .sr-icons animação de icones
	e(), a(window).scroll(e), window.sr = ScrollReveal(), sr.reveal(".sr-icons", {
		duration: 600,
		scale: .3,
		distance: "0px"
		// .sr-button animação de botões
	}, 200), sr.reveal(".sr-button", {
		duration: 1e3,
		delay: 200
		// .sr-contact animação de contato
	}), sr.reveal(".sr-contact", {
		duration: 600,
		scale: .3,
		distance: "0px"
		// .popup-gallery animação de Galeria
	}, 300), a(".popup-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Carregando imagem #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: !0,
			navigateByImgClick: !0,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">A imagem #%curr%</a> não pode ser exibida.'
		}
	})
}(jQuery);