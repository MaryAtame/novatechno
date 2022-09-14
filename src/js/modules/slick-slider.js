$(function () {
	$(".slider-body").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});


$(function () {
	$(".prices-cards").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});





var locationSlider = null;
var mediaQuerySize = 800;

function locationSliderInit() {
	if (!locationSlider) {
		$(function () {
			$(".location-inner").slick({
				infinite: true,
				slidesToShow: 5,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 580,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					}
				]
			});
		});

	}
}

function locationSliderDestroy() {
	if (locationSlider) {
		locationSlider.destroy();
		locationSlider = null;
	}
}

$(window).on('load resize', function () {

	let windowWidth = $(this).innerWidth();

	if (windowWidth <= mediaQuerySize) {
		locationSliderInit()
	} else {
		locationSliderDestroy()
	}
});

