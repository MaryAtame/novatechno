// Код должен выполняться только после полной загрузки DOM-дерева, иначе это можно повлечь ошибки.
// document.addEventListener('DOMContentLoaded'...
// это касается любого JS

export const portfolioSlider = new Swiper(".swiper-portfolio", {
	slidesPerView: 3,
	spaceBetween: 30,
	keyboard: true,
	loop: true,
});