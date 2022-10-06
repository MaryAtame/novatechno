import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll('[data-slider]');
	elements.forEach((item) => {
		createSlider(item);
	});
});

function createSlider(item) {
	const mobileSize = window.matchMedia('(max-width: 1200px)');
	let userWidth = window.innerWidth;

	let servicesSlider = Swiper;


	function initSlider() {

		if (mobileSize <= userWidth) {
			servicesSlider = create();
		}
		else {
			servicesSlider = destroy();
		}
	}

	function create() {
		return new Swiper(item.querySelector('.swiper-services'), {
			slidesPerView: 3,
			grabCursor: true,
			spaceBetween: 50,
			grabCursor: true,
			init: true,
			keyboard: true,
			mousewheel: true,
			loop: true,
		});
	}

	initSlider();


	window.addEventListener('resize', () => {
		initSlider();
		return servicesSlider;
	});
	return servicesSlider;
}

// window.addEventListener('resize', () => {
// 	if (mobileSize.matches) {
// 		return servicesSlider = new Swiper('.swiper-services', {
// 			slidesPerView: 3,
// 			spaceBetween: 50,
// 			grabCursor: true,
// 			init: true,
// 			keyboard: true,
// 			mousewheel: true,
// 			loop: true,

// 		});
// 	} else {
// 		swiper.destroy();
// 	}
// });
