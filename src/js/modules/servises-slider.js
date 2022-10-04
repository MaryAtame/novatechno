import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const servicesSlider = new Swiper(".swiper-services", {
	slidesPerView: 3,
	spaceBetween: 30,
	keyboard: true,
	mousewheel: true,
	loop: true,
	// breakpoints: {
	// 	// when window width is >= XXXpx
	// 	768: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 20
	// 	},
	// }
});
