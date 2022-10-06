import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelector('[data-slider]');
	// elements.forEach((item) => {
	// 	reviewsSliderInit(item);
	// });
});


const reviewsSlider = null;
const mediaQuerySize = 1200;

function reviewsSliderInit() {
	if (!reviewsSlider) {
		reviewsSlider = new Swiper(('.swiper-reviews'), {
			modules: [Navigation],
			slidesPerView: 4,
			spaceBetween: 30,
			grabCursor: true,
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
	}
}

function reviewsSliderDestroy() {
	if (reviewsSlider) {
		reviewsSlider.destroy();
		document.querySelector('.reviews-slider').classList.remove('.swiper');
		reviewsSlider = null;

	}
}

function reviewsSliderRun() {
	const windowWidth = innerWidth;
	if (windowWidth <= mediaQuerySize) {
		reviewsSliderDestroy()
	} else {
		reviewsSliderInit()
	}
}

reviewsSliderRun()

window.addEventListener('resize', function () {
	reviewsSliderRun()
});














