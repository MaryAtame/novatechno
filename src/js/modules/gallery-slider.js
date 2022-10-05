import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


export const gallerySlider = new Swiper(".swiper-gallery", {

	modules: [Navigation, Pagination, Autoplay],
	direction: 'horizontal',
	slidesPerView: 1.5,
	spaceBetween: 20,
	keyboard: true,
	loop: true,
	mousewheel: true,
	pagination: {
		el: ".gallery-nav__pagination",
		clickable: true,
		type: 'bullets',
		bulletClass: 'slider-pagination__bullet',
		bulletActiveClass: 'slider-pagination__bullet--active'
	},
	navigation: {
		nextEl: ".gallery-btn__next",
		prevEl: ".gallery-btn__prev",
	},
	breakpoints: {
		// when window width is >= XXX
		800: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	}

});