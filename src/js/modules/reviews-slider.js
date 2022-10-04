import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const reviewsSlider = new Swiper(".swiper-reviews", {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	spaceBetween: 30,
	direction: 'horizontal',
	keyboard: true,
	loop: true,
	pagination: {
		clickable: true,
	},
	navigation: {
		nextEl: ".reviews-btn__next",
		prevEl: ".reviews-btn__prev",
	},
});
