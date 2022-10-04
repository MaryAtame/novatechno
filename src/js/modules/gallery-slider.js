import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const gallerySlider = new Swiper(".swiper-gallery", {

	modules: [Navigation, Pagination, Autoplay],
	direction: 'horizontal',
	slidesPerView: 4,
	spaceBetween: 30,
	keyboard: true,
	loop: true,
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".gallery-btn__next",
		prevEl: ".gallery-btn__prev",
	},

});