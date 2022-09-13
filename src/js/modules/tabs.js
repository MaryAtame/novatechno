export function tabs() {
	const tabsBtn = document.querySelectorAll(".btn--tabs");
	const tabsItems = document.querySelectorAll(".tabs-content");

	tabsBtn.forEach(function (item) {
		item.addEventListener("click", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTab = document.querySelector(tabId);

			if (!currentTab.classList.contains("active")) {

				tabsBtn.forEach(function (item) {
					item.classList.remove("active");
				});

				tabsItems.forEach(function (item) {
					item.classList.remove("active");
				});

				currentBtn.classList.add("active");
				currentTab.classList.add("active");
			}
		});
	});
}