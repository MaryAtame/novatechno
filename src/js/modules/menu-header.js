
export function menuOpen() {
	const anchors = document.querySelector('.heafer-menu__item-link');
	const subMenuItems = document.getAttribute('id');

	anchors.forEach(function (item) {
		item.addEventListener("click", function () {
			let currentItem = item;
			let menuLink = currentItem.getAttribute('data-name');

			let subMenuOpen = menuLink.addEventListener("click", menuOpen);
			let currentList = document.querySelector(menuLink);
			if (anchors == subMenuItems) {
				if (!currentList.classList.contains("header-menu-sublist--open")) {

					menuLink.forEach(function (item) {
						item.classList.remove("header-menu-sublist--open");
					});

					subMenuOpen.forEach(function (item) {
						item.classList.add("header-menu-sublist--open");
					});

					currentItem.classList.add("header-menu-sublist--open");
					currentList.classList.add("header-menu-sublist--open");
				}
			}
		});
	});
}