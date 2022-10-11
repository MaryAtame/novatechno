document.addEventListener('DOMContentLoaded', () => {



});

const menuArray = document.querySelectorAll('[data-menu]');

console.log(menuArray)

if (menuArray.length > 0) {
	initMenu(menuArray);
}

function initMenu(menuArray) {
	menuArray.forEach(element => {
		const menuItem = element.hasAttribute(['data-menu-item']);
		console.log(menuItem)


	});
}

// document.addEventListener('DOMContentLoaded', () => {
// 	const menu = document.querySelectorAll('[data-menu]');
// 	// menu.forEach((item) => {
// 	// 	menuOpen(item);
// 	// });
// });

// export function menuOpen() {
// 	const anchors = document.querySelector('.menu-list__item');
// 	const subMenuItems = document.getElementsByClassName('menu-sublist');

// 	anchors.forEach(function (item) {
// 		item.addEventListener("click", function () {
// 			let currentItem = item;
// 			let subMenu = currentItem.getAttribute('data-dropdown');

// 			let subMenuOpen = subMenu.addEventListener("click", menuOpen);
// 			let currentList = document.querySelector(subMenu);
// 			if (anchors == subMenuItem) {
// 				if (!currentList.classList.contains("menu-sublist--open")) {

// 					subMenu.forEach(function (item) {
// 						item.classList.remove("menu-sublist--open");
// 					});

// 					subMenuOpen.forEach(function (item) {
// 						item.classList.add("menu-sublist--open");
// 					});

// 					currentItem.classList.add("menu-sublist--open");
// 					currentList.classList.add("menu-sublist--open");
// 				}
// 			}
// 		});
// 	});
// }
