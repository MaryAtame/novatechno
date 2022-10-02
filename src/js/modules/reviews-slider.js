export const reviewsSlider = new Swiper(".swiper-reviews", {
	slidesPerView: 4,
	spaceBetween: 30,
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