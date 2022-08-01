"use strict";

const burger = document.querySelector('.header-burger');
const headermenu = document.querySelector('.header-menu');

burger.addEventListener("click", burgerhandler);
function burgerhandler(e) {
	e.preventDefault();

	document.body.classList.toggle('lock');
	burger.classList.toggle('isopen');
	headermenu.classList.toggle('active');

}

headermenu.addEventListener("click", gotocontent);
function gotocontent(e) {
	e.preventDefault();
	if (burger.classList.contains('isopen')) {
		document.body.classList.remove('lock');
		burger.classList.remove('isopen');
		headermenu.classList.remove('active');
	}
}

// SLIDER

const navigatorActive = (counter, navigators) => {
	for (let i = 0; i < navigators.length; i++) {
		if (counter > navigators.length) counter = 1;
		if (counter < 1) counter = navigators.length;

		if (navigators[i].id === "slider_img_" + counter) {
			navigators[i].classList.add("navigatorChildActive");
		} else {
			navigators[i].classList.remove("navigatorChildActive");
		}
	}
};

window.onload = () => {
	const slider = document.querySelector(".services__cards");
	let sliderItem = document.querySelectorAll(".services__item");

	const prevBtn = document.querySelector(".slider-indicator__prev");
	const nextBtn = document.querySelector(".slider-indicator__next");

	const navigator = document.querySelector(".navigator");

	//navigator
	for (let i = 0; i < sliderItem.length; i++) {
		const navigatorChild = document.createElement("div");
		navigatorChild.classList.add("navigatorChild");
		navigatorChild.id = "slider_img_" + (i + 1);
		navigator.appendChild(navigatorChild);
	}
	const navigators = document.querySelectorAll(".navigatorChild");
	navigators[0].classList.add("navigatorChildActive");

	//first node clone
	const firstNodeClone = sliderItem[0].cloneNode(true);
	firstNodeClone.id = "firstClone";
	slider.appendChild(firstNodeClone);

	//last node clone
	const lastNodeClone = sliderItem[sliderItem.length - 1].cloneNode(true);
	lastNodeClone.id = "lastClone";
	slider.prepend(lastNodeClone);

	sliderItem = document.querySelectorAll(".services__item");

	let counter = 1;

	let ItemWidth = sliderItem[0].clientWidth;
	slider.style.transform = `translateX(${-counter * ItemWidth}px)`;

	nextBtn.addEventListener("click", () => {
		if (counter >= sliderItem.length - 1) return null;
		slider.style.transition = "all 0.3s ease-in-out";
		counter++;
		slider.style.transform = `translateX(${-counter * ItemWidth}px)`;
		navigatorActive(counter, navigators);
	});

	prevBtn.addEventListener("click", () => {
		if (counter <= 0) return null;
		slider.style.transition = "all 0.3s ease-in-out";
		counter--;
		slider.style.transform = `translateX(${-counter * ItemWidth}px)`;
		navigatorActive(counter, navigators);
	});

	slider.addEventListener("transitionend", () => {
		if (sliderItem[counter].id === "lastClone") {
			slider.style.transition = "none";
			counter = sliderItem.length - 2;
			slider.style.transform = `translateX(${-counter * ItemWidth}px)`;
		}

		if (sliderItem[counter].id === "firstClone") {
			slider.style.transition = "none";
			counter = sliderItem.length - counter;
			slider.style.transform = `translateX(${-counter * ItemWidth}px)`;
		}
	});

	navigators.forEach((el, i) => {
		el.addEventListener("click", () => {
			counter = i + 1;
			slider.style.transition = "all 0.3s ease-in-out";
			slider.style.transform = `translateX(${-counter * ItemWidth}px)`;
			navigatorActive(counter, navigators);
		});
	});

	//resize handler
	window.onresize = () => {
		ItemWidth = sliderItem[0].offsetWidth;
		slider.style.transform = `translateX(${-counter * ItemWidth}px)`;
	};
};
