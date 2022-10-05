import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll('.slider-body')

	if (elements.length) app.sliders = [];

	elements.forEach((item) => {
		app.sliders.push(createSlider(item));
	});
});

function createSlider(item) {
	const type = item.hasAttribute('data-slider-desktop');
	const desktop = window.matchMedia('(min-width: 1200px)');
	const mobile = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');
	let swiper = Swiper;
	let init = false;


	function initSlider() {
		if (!type || type && desktop.matches) {
			if (!init) {
				init = true;
				swiper = create();
			}
		} else if (type && mobile.matches) {
			if (init) {
				swiper.destroy();
				init = false;
			}
		}
	}

	function create() {
		return new Swiper(item.querySelector('.swiper-reviews'), {
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
	}

	initSlider();

	window.addEventListener('resize', () => {
		initSlider();

		return swiper;
	});

	return swiper;
}