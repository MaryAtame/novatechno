// import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// export const servicesSlider = new Swiper(".swiper-services", {
// 	modules: [Navigation, Pagination, Autoplay],
// 	slidesPerView: 1.5,
// 	spaceBetween: 20,
// 	keyboard: true,
// 	mousewheel: true,
// 	loop: true,
// 	breakpoints: {
// 		// when window width is >= XXXpx
// 		768: {
// 			slidesPerView: 3,
// 			spaceBetween: 20
// 		},
// 	}
// });



//////////////


document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll('[data-slider]');

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

	// const quantity = item.getAttribute('data-slider-quantity') || 'auto';
	// const centered = (item.hasAttribute('data-slider-centered'));
	// const looped = (item.hasAttribute('data-slider-looped'));

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
		return new Swiper(item.querySelector('.swiper-container'), {
			modules: [Navigation, Pagination, Autoplay],
			slidesPerView: 1.5,
			spaceBetween: 20,
			keyboard: true,
			mousewheel: true,
			loop: true,
			breakpoints: {
				// when window width is >= XXXpx
				768: {
					slidesPerView: 3,
					spaceBetween: 20
				},
			}
		});
	}

	initSlider();

	window.addEventListener('resize', () => {
		initSlider();

		return swiper;
	});

	return swiper;
}