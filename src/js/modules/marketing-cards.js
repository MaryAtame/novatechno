import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelector('[data-slider]');
	elements.forEach((item) => {
		cardsSliderInit(item);
	});
});

const cardsSlider = null;
const mediaQuerySize = 1200;

function cardsSliderInit() {
	if (!cardsSlider) {
		cardsSlider = new Swiper(('.cards-swiper'), {
			slidesPerView: 1.5,
			spaceBetween: 20,
			grabCursor: true,
			keyboard: true,
			loop: true,

		});
	}
}

function cardsSliderDestroy() {
	if (cardsSlider) {
		cardsSlider.destroy();
		document.querySelector('.cards-slider').classList.remove('.swiper');
		cardsSlider = null;

	}
}

function cardsSliderRun() {
	const windowWidth = innerWidth;
	if (windowWidth >= mediaQuerySize) {
		cardsSliderDestroy()
	} else {
		cardsSliderInit()
	}
}

cardsSliderRun()

window.addEventListener('resize', function () {
	cardsSliderRun()
});

