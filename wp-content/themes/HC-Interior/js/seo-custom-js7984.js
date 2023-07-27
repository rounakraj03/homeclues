jQuery( document ).ready( function( $ ) {

		// for sidebar toggle on shop page js
	if(jQuery(window).width()<767){ 
		
		jQuery("#sidebar1").hide();
		
		jQuery(".filter-area").click(function(){
			
			jQuery("#sidebar1").slideToggle();
		
		});

	}
	
	// for submenu dropdown on tab and mobile
		if(jQuery(window).width()<=1024){ 
			
			$( ".main-navigation ul li.menu-item-has-children" ).prepend( '<span class="fa fa-plus"></span>' );
			
			$('.main-navigation ul li.menu-item-has-children .fa.fa-plus').click(function(){
				
				$(this).next().next().slideToggle();
				
				$(this).toggleClass('fa-plus fa-minus');
				
			});

		}
		
	// for search form hide show
		jQuery(".seo-search-icon").click(function(){
			
			jQuery(".seo-search-form").toggleClass('active');
			
			jQuery(".seo-search-icon .fa").toggleClass('fa-search fa-times');
		});
	
});


// slick slider
jQuery(document).ready(function(){
	jQuery('#primary .cm-slider-acc ').slick({
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 150000,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="/wp-content/uploads/2023/04/left-Arrow.png" alt="left Arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="/wp-content/uploads/2023/04/right-arrow.png" alt="right arrow"></button>',
	});
	
	jQuery('#primary .cm-video-slider').slick({
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 15000,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="/wp-content/uploads/2023/04/left-Arrow.png" alt="left Arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="/wp-content/uploads/2023/04/right-arrow.png" alt="right arrow"></button>',
	})
	jQuery('#primary .cm-slider-three').slick({
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="/wp-content/uploads/2023/04/left-Arrow.png" alt="left Arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="/wp-content/uploads/2023/04/right-arrow.png" alt="right arrow"></button>',
		responsive: [
			{
			  breakpoint: 880,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
			  }
			}
		  ]
	})
	jQuery('#primary .cm-slider-one').slick({
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
  		centerPadding: '60px',
		prevArrow: '<button type="button" class="slick-prev"><img src="/wp-content/uploads/2023/04/left-Arrow.png" alt="left Arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="/wp-content/uploads/2023/04/right-arrow.png" alt="right arrow"></button>',
	})
	jQuery('#primary .cm-slider-two').slick({
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 2000,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
  		centerPadding: '60px',
		prevArrow: '<button type="button" class="slick-prev"><img src="/wp-content/uploads/2023/04/left-Arrow.png" alt="left Arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="/wp-content/uploads/2023/04/right-arrow.png" alt="right arrow"></button>',
		responsive: [
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
			  }
			}
		  ]
	})
	if(jQuery(window).width() < 767){
		jQuery('body .cm-slider-mobile-one .grid_layout_wrapper,.cm-post-list').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="slick-prev"><img src="/wp-content/uploads/2023/04/left-Arrow.png" alt="left Arrow"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="/wp-content/uploads/2023/04/right-arrow.png" alt="right arrow"></button>',
		})

		jQuery('header #block-35').remove();
	}

	// contact form 7 val change add class and remove class

		jQuery( ".cm-contact-page .cm-select-inpt" ).change(function () {
			var str = "";
			str = jQuery('.cm-contact-page .cm-select-inpt' ).val();
			if( str === "Other" ){
				jQuery(".cm-contact-page .cm-input-grid ,.cm-contact-page .cm-contact-form,.cm-contact-page .cm-popup-content").addClass("selectedpage");
			}
			else{
			jQuery( ".cm-contact-page .cm-input-grid,.cm-contact-page .cm-contact-form,.cm-contact-page .cm-popup-content" ).removeClass("selectedpage");
			}
		});

		jQuery( " .cm-popup .cm-popup-content  .cm-select-inpt" ).change(function () {
			var str = "";
			str = jQuery('.cm-popup .cm-popup-content  .cm-select-inpt' ).val();
			if( str === "Other" ){
				jQuery(".cm-popup .cm-popup-content").addClass("selectedpage");
			}
			else{
			jQuery( ".cm-popup .cm-popup-content" ).removeClass("selectedpage");
			}
		});
		jQuery( ".modal-window-content  .cm-select-inpt" ).change(function () {
			var str = "";
			str = jQuery('.modal-window-content  .cm-select-inpt' ).val();
			if( str === "Other" ){
				jQuery(".modal-window-content").addClass("selectedpage");
			}
			else{
			jQuery( ".modal-window-content" ).removeClass("selectedpage");
			}
		});
		jQuery( ".cm-bac-input  .cm-select-inpt" ).change(function () {
			var str = "";
			str = jQuery('.cm-bac-input  .cm-select-inpt' ).val();
			if( str === "Other" ){
				jQuery(".cm-bac-input").addClass("selectedpage");
			}
			else{
			jQuery( ".cm-bac-input" ).removeClass("selectedpage");
			}
		});
	// contact form 7 val change add class and remove class
	// maping attribute add in image

	jQuery('.cm-maping img').attr('usemap','#gfg_map');

	// header-top-margin

	// popup form on cities page
		jQuery(".cm-popup-button a").click(function () {
			jQuery(jQuery(this).attr("data-target")).addClass("eable-popup");
		
			// $("body").addClass("cm-active-popup");
		});
		jQuery(".cm-popup-exit , .cm-popup-close").click(function () {
			jQuery(".cm-popup").removeClass("eable-popup");
		});
		jQuery(".cm-popup-bg").click(function () {
			jQuery(".cm-popup").removeClass("eable-popup");
		});
	// popup form on cities page

	var outerHeight= jQuery('.hc-header-wrap').outerHeight() + 'px';
	var paddingTop = outerHeight ;
	var margnTop = '-' + outerHeight; 
	jQuery('.header-fixed-area,.single .cm-section,.archive .cm-section').css({'top': margnTop , 'position': 'relative', 'margin-bottom': margnTop});
	jQuery('.cm-pad-header,.single .cm-banner,.archive .cm-banner').css({'padding-top': outerHeight  , 'display': 'inline-flex'});

	jQuery('body').find('page-template-header-fixed-template').addClass('trsn-bg');

	// hover arrow change image
	jQuery(".cm-hover-lamp-light").mouseenter(function(){       
		jQuery('.img-lamp img').attr('src','wp-content/uploads/2023/05/Sofa-Lights-Hover.jpg');      
	});     
	jQuery(".cm-hover-lamp-light").mouseleave(function(){       
		jQuery('.img-lamp img').attr('src','wp-content/uploads/2023/05/Image-274.png');      
	});

/////////// ///////////////////////////////////////////////////
	// jQuery(".cm-hover-light").mouseenter(function(){       
	// 	jQuery('.cm-hover-light-home img').attr('src','/wp-content/uploads/2023/05/House-Light-Hover.jpg');      
	// });     
	// jQuery(".cm-hover-light").mouseleave(function(){       
	// 	jQuery('.cm-hover-light-home img').attr('src','/wp-content/uploads/2023/05/House-Light.jpg');      
	// });
////////////////////////////////////////////////////////////
	jQuery(".cm-bottom a.cm-whats img").mouseenter(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/05/Call-Hover.svg');      
	});     
	jQuery(".cm-bottom a.cm-whats img").mouseleave(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/05/call.svg');      
	}); 
	////////////////////////////////////////////////////////////
	jQuery(".cm-bottom a.cm-call img").mouseenter(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/06/Call-icon-Hover.svg');      
	});     
	jQuery(".cm-bottom a.cm-call img").mouseleave(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/06/Call-icon.svg');      
	}); 
//////////////////////////////////////////////////////////
	jQuery(".slick-arrow.slick-next img").mouseenter(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/04/right-arrow-Hover.png');      
	});     
	jQuery(".slick-arrow.slick-next img").mouseleave(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/04/right-Arrow.svg');      
	});
	//////////////////////////////////////////////////////////////////////////// 
	jQuery(".slick-arrow.slick-prev img").mouseenter(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/04/left-Arrow-Hover.png');      
	});     
	jQuery(".slick-arrow.slick-prev img").mouseleave(function(){       
		jQuery(this).attr('src','wp-content/uploads/2023/04/left-Arrow.svg');      
	}); 

		// category button click hide list
		jQuery('<button class="show-cat">Show more</button>').appendTo('.wp-block-categories');
		jQuery(function () {
			jQuery('.show-cat').click(function () {
				jQuery('.wp-block-categories li:hidden').slice(0, 15).show();
				if (jQuery('.wp-block-categories li').length == jQuery('.wp-block-categories li:visible').length) {
					jQuery('.show-cat ').hide();
				}
			});
		});


		jQuery('.goforward').click(function(event) {
			var href = jQuery(this).attr('href');
			jQuery('.isotope').empty();
			jQuery('.isotope').load(href +".html .isotope > *");
			jQuery( 'div.box' ).addClass( 'isotope-item' );
			$container.append( $items ).isotope( 'insert', $items, true );
			event.preventDefault();
		});
	/*jQuery(window).load(function(){
			jQuery('.elementor-accordion-item .elementor-tab-content[data-tab="1"]').slideUp();
			jQuery('.elementor-accordion-item .elementor-tab-content[data-tab="1"]').removeClass("active");
			jQuery('.elementor-accordion-item .elementor-tab-title[data-tab="1"]').removeClass("elementor-active");
	});*/

	jQuery('.elementor-accordion-item .elementor-tab-content[data-tab="1"]').slideUp();
	jQuery('.elementor-accordion-item .elementor-tab-content[data-tab="1"]').removeClass("active");
	jQuery('.elementor-accordion-item .elementor-tab-title[data-tab="1"]').removeClass("elementor-active");

	// if(!jQuery(".cm-footer-video").length > 0) {
	// 	jQuery("body").addClass("no-footer-video");
	// }
	jQuery(".cm-button a,.cm-popup-button a").attr('href','javascript:void(0)');
	// jQuery(".cm-slider").attr('onscroll','myFunction()');
	// jQuery(".cm-slider.eable-model .e-con-inner").attr('onscroll','myFunction()')
	jQuery(".cm-button a").click(function () {

		jQuery(jQuery(this).attr("data-target")).addClass("eable-model").css('display','flex');
	  
		jQuery("body").addClass("cm-active-model");
	  });
	  jQuery(".cm-model-exit svg, .cm-model-close").click(function () {
		jQuery(".cm-slider").removeClass("eable-model").css('display','none');
		jQuery("body").removeClass("cm-active-model");
		   
	  });

	  jQuery(".eael-progressbar-line-fill").css('width', '0%');
});

// const mouseWheel = document.querySelectorAll('.eable-model');

// mouseWheel.addEventListener('wheel', function(e) {
//     const race = 15; // How many pixels to scroll

//     if (e.deltaY > 0) // Scroll right
//         mouseWheel.scrollLeft += race;
//     else // Scroll left
//         mouseWheel.scrollLeft -= race;
// 		e.preventDefault();
// });