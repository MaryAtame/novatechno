const burgerIcon = document.querySelector('.menu-icon');
const navbody = document.querySelector('.header-menu__inner');

burgerIcon.addEventListener("click", burgerhandler);

function burgerhandler(e) {
	e.preventDefault();
	burgerIcon.classList.toggle('active');
	navbody.classList.toggle('menu-open');

}

export { burgerhandler };