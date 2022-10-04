import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const servicesSlider = new Swiper(".swiper-services", {
	modules: [Navigation, Pagination, Autoplay],
	slidesPerView: 1.5,
	spaceBetween: 20,
	keyboard: true,
	mousewheel: true,
	loop: true,
	breakpoints: {
		// when window width is >= XXXpx
		768: {
			slidesPerView: 3,
			spaceBetween: 20
		},
	}
});
