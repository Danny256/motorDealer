$(document).ready(function(){

	//-------------------------------
	// Mobile Nav Menu
	//-------------------------------
	if($("#et-mobile-nav-auto").length) {
		$('#et-mobile-nav-auto').hcOffcanvasNav({
			maxWidth: 768
		});
	}

	// Preloader JS
	$(window).on('load',function(){
		$('.preloader').fadeOut('500');
	});


	//-------------------------------
	// Main slider
	//-------------------------------
	if($('.et-slider-auto').length) {
		$('.et-slider-auto .slick-slider').slick({
			autoplay: true,
			arrow: false,
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			fade: true,
			pauseOnFocus: false,
			pauseOnHover: false
		})
	}

	//-------------------------------
	// Browse by make/type
	//-------------------------------
	if($('.et-browse-auto.landing2').length) {
		$('.et-browse-auto.landing2 .slick-slider').slick({
			autoplay: true,
			arrow: false,
			dots: false,
			infinite: true,
			slidesToShow: 8,
			slidesToScroll: 8,
			autoplaySpeed: 3000,
			pauseOnFocus: false,
			pauseOnHover: false,
			prevArrow: '<i class="fas fa-chevron-left slick-prev text-primary-auto"></i>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				}
			]
		})
	}

	//-------------------------------
	// Blog detail slider
	//-------------------------------
	if($('.blog-detail-slider').length) {
		$('.blog-detail-slider').slick({
			autoplay: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplaySpeed: 3000,
			arrows: false,
			pauseOnFocus: false,
			pauseOnHover: false
		})
	}

	//-------------------------------
	// Featured deals
	//-------------------------------
	if($('.et-featured-auto').length) {
		$('.et-featured-auto .slick-slider').slick({
			autoplay: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplaySpeed: 2000,
			arrows: false,
			dots: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		})
	}

	//-------------------------------
	// Testimonial
	//-------------------------------
	if($('.et-testimonial-auto-landing2').length) {
		$('.et-testimonial-auto-landing2 .slick-slider').slick({
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: 2000,
			arrows: false,
			dots: false
		})
	}


	//-------------------------------
	// Show plan features
	//-------------------------------
	if($('.et-plans-auto').length) {
		$('.et-plans-auto .show-features').on("click", function(){
			$(".plan-features").fadeToggle("slow");
		})
	}

	/*
	  =======================================================================
  		Back to top
	  =======================================================================
	  */
	  $(window).scroll(function() {
	  	if ($(this).scrollTop()) {
	  		$('#backTop').fadeIn();
	  	} else {
	  		$('#backTop').fadeOut();
	  	}
	  });
	  $("#backTop").on('click', function() {
	  	$("html, body").animate({
	  		scrollTop: 0
	  	}, 980);
	  });

	//------------------------------------
	// Next/Previous tabs for add-listing
	//------------------------------------
	if($('.et-add-listing-auto').length) {
		$('.listing-tab-next').click(function (e) {
			$('.nav-pills > .nav-item > .active').parent().next('li').find('a').trigger('click');
			e.preventDefault();
		});
		$('.listing-tab-prev').click(function (e) {
			$('.nav-pills > .nav-item > .active').parent().prev('li').find('a').trigger('click');
			e.preventDefault();
		});
	}

	//-------------------------------
	// Toggle Events list/grid view
	//-------------------------------
	if($(".data-list-view").length) {
		$(".data-list-view").hide();
		$('.show-grid-view').on("click", function(e){
			e.preventDefault();
			$(".data-grid-view").show();
			$(".data-list-view").hide();
			$(this).addClass("active");
			$(".show-list-view").removeClass("active");
		})
		$('.show-list-view').on("click", function(e){
			e.preventDefault();
			$(".data-list-view").show();
			$(".data-grid-view").hide();
			$(this).addClass("active");
			$("show-grid-view").removeClass("active");
		})
	}

	//-------------------------------
	// Show/hide car selector
	//-------------------------------
	if($('.toggle-car-select').length) {
		$(".toggle-car-select").on("click", function(e){
			$(this).siblings(".car-selector").toggle();
			e.preventDefault();
		})
	}

	//-------------------------------
	// Upload/Remove Media
	//-------------------------------
	if($('#pills-media').length) {
		function removeMedia(){
			$(this).closest('.media-box').remove();
			alert();
		}
	}

	//-------------------------------
	// jQuery Select2
	//-------------------------------
	if ($('.select2').length) {
		$('.select2').select2({
			minimumResultsForSearch: Infinity
		});
	}

	//-------------------------------
	// Range Slider
	//-------------------------------
	if($(".js-range-slider").length) {
		$(".js-range-slider").ionRangeSlider({
			skin: "big",
			min: 2000,
			max: 25000,
			from: 50,
			step: 100,
			max_postfix: "+",
			prefix: "$"
		});
	}

	//-------------------------------
	// Show/hide dealer contact
	//-------------------------------
	if($(".btn-show-contact").length) {
		$(".btn-show-contact").on("click", function(e){
			e.preventDefault();
			$(this).next(".contact-info-popup").toggle();
		})
	}


	//-------------------------------
	// Google Maps Initialization
	//-------------------------------
	if ($('#loadmaps').length) {
		var singleMap   =   false;
		if($('#loadmaps').hasClass('single-map')) {
			singleMap   =   true;
		}
		loadMap(singleMap);
	}

	//-------------------------------
	// Google Maps
	//-------------------------------
	function loadMap(singleMap) {
		var docWidth    =   $(document).width();
		if(singleMap) {
			var mapZoom     =   13,
			mapCenter   =   [-33.9169667, 151.2345321]
			var lsitingLocations = [
				['Maroubra Beach', -33.9169667, 151.2345321, 1]
			];

			var listingContents =   [
				'<div class="listing-map-window"><div class="pr-3"><img src="img/restaurant-logo-3.png" class="thumbnail" alt="img"><div class="rating small text-center position-absolute"><i class="fas fa-star text-yellow"></i><i class="fas fa-star text-yellow"></i><i class="fas fa-star text-yellow"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></div><div class="pl-1"><h5 class="text-uppercase">Food Festival</h5><span class="meta mb-2 d-block pr-1 pl-1" title="Max. delivery time"><i class="rounded-pill mr-1 icon-bg bg-white"><img src="img/icons/scooter.png" class="f-icon" alt="img"></i><label class="align-bottom bit-bold">Max 30 min.</label></span><span class="meta d-block pr-1 pl-1" title="Contact number"><i class="rounded-pill mr-1 icon-bg bg-white"><img src="img/icons/phone.png" class="f-icon" alt="img"></i><label class="align-bottom text-yellow bit-bold">+22 123 456 7</label></span></div></div>',
			]
		} else {

			var mapZoom     =   16;
			if($('.sidebar-map-fixed').length && docWidth > 980){
				var footerHeight    =   $('.et-copyright-bar').height(),
				windowHeight    =   $(window).height(),
				mapTop          =   $('.sidebar-map-fixed').offset().top,
				mapHeight       =   parseInt(windowHeight-(mapTop+footerHeight));


				$('.sidebar-map-fixed').css('height', mapHeight+'px');
				mapZoom     =   14;
			}
			if(jQuery('section.et-maps-banner-wrapper').length) {
				mapZoom	=	15;
			}


			if(docWidth > 319 && docWidth < 980) {
				mapZoom =   14
			}
			var mapCenter   =   [-33.91722, 151.23064];
			var lsitingLocations = [
				['Bondi Beach', -33.9148339, 151.2404048, 4],
				['new beach', -33.9169667, 151.2345321, 3],
				['new beach', -33.9158827, 151.2314457, 2],
				['new beach', -33.9175679, 151.2255712, 1],
			];

			var listingContents =   [
				'<div class="listing-map-window"><div class="pr-3"><img src="img/restaurant-logo-3.png" class="thumbnail" alt="img"><div class="rating small text-center position-absolute"><i class="fas fa-star text-yellow"></i><i class="fas fa-star text-yellow"></i><i class="fas fa-star text-yellow"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></div><div class="pl-1"><h5 class="text-uppercase">Food Festival</h5><span class="meta mb-2 d-block pr-1 pl-1" title="Max. delivery time"><i class="rounded-pill mr-1 icon-bg bg-white"><img src="img/icons/scooter.png" class="f-icon" alt="img"></i><label class="align-bottom bit-bold">Max 30 min.</label></span><span class="meta d-block pr-1 pl-1" title="Contact number"><i class="rounded-pill mr-1 icon-bg bg-white"><img src="img/icons/phone.png" class="f-icon" alt="img"></i><label class="align-bottom text-yellow bit-bold">+22 123 456 7</label></span></div></div>',
			]
		}


		var map = new google.maps.Map(document.getElementById('loadmaps'), {
			zoom: mapZoom,
			center: new google.maps.LatLng(mapCenter[0], mapCenter[1]),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		});

		var infowindow = new google.maps.InfoWindow();

		var marker, i;

		for (i = 0; i < lsitingLocations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(lsitingLocations[i][1], lsitingLocations[i][2]),
				map: map,
				icon: 'img/icons/marker.png'
			});
			if(docWidth > 767) {
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						infowindow.setContent(listingContents[0]);
						infowindow.open(map, marker);
					}
				})(marker, i));
			}
		}
	}

});
