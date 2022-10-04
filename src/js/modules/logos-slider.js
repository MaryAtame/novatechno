import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const logosSlider = new Swiper(".logos-slider", {
	slidesPerView: 6,
	spaceBetween: 30,
	mousewheel: true,
	keyboard: true,
	loop: true,

	on: {
		init: function () { },
		orientationchange: function () { },
		beforeResize: function () {
			let vw = window.innerWidth;
			if (vw > 1000) {
				logosSlider.params.slidesPerView = 5

			} else {
				logosSlider.params.slidesPerView = 4
			}
			logosSlider.init();
		},
	},
});
