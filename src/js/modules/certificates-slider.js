export const certificatesSlider = new Swiper(".swiper-certificate", {
	// slidesPerView: 4,
	// spaceBetween: 30,
	keyboard: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".certificates-btn__next",
		prevEl: ".certificates-btn__prev",
	},
	breakpoints: {
		// when window width is >= XXXpx
		1000: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= XXXpx
		1550: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= XXXpx
		1551: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	}
});