document.addEventListener("touchstart",function(){},false);(function($){"use strict";var windw=$(window);var navh=$('.nav-container');var scrollp=windw.scrollTop();if(scrollp>100){navh.addClass("fixed-nav");}else{navh.removeClass("fixed-nav");}
var nav=$('.nav-container');windw.scroll(function(){if($(this).scrollTop()>100){nav.addClass("fixed-nav");}else{nav.removeClass("fixed-nav");}});var myTheme=window.myTheme||{},$win=$(window);myTheme.Isotope=function(){var isotopeContainer=$('.isotopeContainer');if(!isotopeContainer.length||!jQuery().isotope)return;$win.on('load',function(){isotopeContainer.isotope({itemSelector:'.isotopeSelector',getSortData:{name:'.name',number:'.number',commentnumber:'.commentnumber parseInt',stars:'.stars parseInt'},sortAscending:{name:true,number:true,commentnumber:false,stars:false}});$('.isotopeFilters').on('click','a',function(e){$('.isotopeFilters').find('.active').removeClass('active');$(this).parent().addClass('active');var filterValue=$(this).attr('data-filter');isotopeContainer.isotope({filter:filterValue});e.preventDefault();});$('.sort-by-button-group').on('click','button',function(){var sortByValue=$(this).attr('data-sort-by');isotopeContainer.isotope({sortBy:sortByValue});});$('.button-group').each(function(i,buttonGroup){var $buttonGroup=$(buttonGroup);$buttonGroup.on('click','button',function(){$buttonGroup.find('.is-checked').removeClass('is-checked');$(this).addClass('is-checked');});});});};myTheme.Isotope();lightbox.option({'albumLabel':"Item %1 of %2",'positionFromTop':40,'resizeDuration':500,'disableScrolling':false});if($(document.body).width()>1200){lightbox.option({'disableScrolling':true});}
windw.resize(function(){if($(document.body).width()<1200){$(".lb-dataContainer").css("width","80%");$(".lb-dataContainer").css("height","80%");$(".lb-outerContainer").css("width","80%");$(".lb-outerContainer").css("height","80%");$(".lb-image").css("width","100%");$(".lb-image").css("height","100%");}});var scrollup=$('.scrollup');windw.scroll(function(){if($(this).scrollTop()>100){scrollup.fadeIn();}else{scrollup.fadeOut();}});scrollup.on('click','',function(event){$("html, body").animate({scrollTop:0},600);return false;});})(jQuery);$( window ).on( "load", function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 123) {
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
			 return false;
			}
		
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
			 return false;
			}      
		 }
		 
		$("html").on("contextmenu",function(){
			return false;
		});
	});