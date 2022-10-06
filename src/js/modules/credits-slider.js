import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll('[data-slider]');
	elements.forEach((item) => {
		creditsSliderInit(item);
	});
});

const creditsSlider = null;

function creditsSliderInit() {
	if (!creditsSlider) {
		creditsSlider = new Swiper(".credits-slider", {
			slidesPerView: 4,
			spaceBetween: 30,
			mousewheel: true,
			keyboard: true,
			loop: true,
			breakpoints: {
				// when window width is >= XXX
				800: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 20
				}
			}
		});
	}
	return creditsSliderInit();
}





