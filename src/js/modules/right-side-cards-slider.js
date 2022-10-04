import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
export const cardsSlider = new Swiper(".swiper-portfolio", {
	slidesPerView: 3,
	spaceBetween: 30,
	keyboard: true,
	loop: true,
});