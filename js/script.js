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

//scrollspy suavizando rolagem
$(document).ready(function () {
	'use strict';
	
	
	
	// Adicione scrollspy para o <body>
	$('body').scrollspy({
		target: ".navbar",
		offset: 105
	});

	// Adicione uma rolagem suave em todos os links dentro da barra de navegação
	$("#menuItens a, .page-scroll a").on('click', function (event) {
		// Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
		if (this.hash !== "") {
			// evitar o comportamento padrão do clique da âncora
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Usando o método animate () do jQuery para adicionar uma página suave
			// O número opcional (800) especifica o número de milissegundos necessários para rolar para a área especificada
			$('html, body').animate({
				scrollTop: ($(hash).offset().top) - 100
			}, 800);
		} // fim do if
	});
});