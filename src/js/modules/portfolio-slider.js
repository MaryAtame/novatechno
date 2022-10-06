import Swiper, { Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll('[data-slider]');
	// elements.forEach((item) => {
	// 	portfolioSliderInit(item);
	// });
});


const portfolioSlider = null;
const mediaQuerySize = 1200;

function portfolioSliderInit() {
	if (!portfolioSlider) {
		portfolioSlider = new Swiper(".swiper-portfolio", {
			slidesPerView: 3,
			spaceBetween: 30,
			keyboard: true,
			loop: true,
			pagination: {
				clickable: true,
			},

		});
	}
}

function portfolioSliderDestroy() {
	if (portfolioSlider) {
		portfolioSlider.destroy();
		document.querySelector('.swiper-portfolio').classList.remove('.swiper');
		portfolioSlider = null;

	}
}

function reviewsSliderRun() {
	const windowWidth = innerWidth;
	if (windowWidth <= mediaQuerySize) {
		portfolioSliderDestroy()
	} else {
		portfolioSliderInit()
	}
}

reviewsSliderRun()

window.addEventListener('resize', function () {
	reviewsSliderRun()
});














