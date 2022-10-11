document.addEventListener('DOMContentLoaded', () => {
	const el = document.querySelectorAll('[data-dropdown]');

	el.forEach((item) => {
		initDropdown(item);
	});
});

function initDropdown(el) {
	const button = el.children[0];
	const content = el.children[1];

	button.addEventListener('click', () => {
		if (content.hasAttribute('hidden')) {
			content.removeAttribute('hidden')
		} else {
			content.setAttribute('hidden', 'hidden')
		}
	});
}

