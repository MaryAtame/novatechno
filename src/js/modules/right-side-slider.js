import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const creditsSlider = new Swiper(".credits-slider", {
	slidesPerView: 4,
	spaceBetween: 30,
	mousewheel: true,
	keyboard: true,
	loop: true,
});