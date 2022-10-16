document.addEventListener('DOMContentLoaded', () => {
	const el = document.querySelectorAll('[data-dropdown]');
	let dropdowns = [];

	el.forEach((item, index) => {
		dropdowns.push(new Dropdown(item, index, dropdowns));
	});
});

class Dropdown {
	constructor(el, index, arr) {

		this.el = el;
		this.index = index;
		this.arr = arr;

		this.button = this.el.children[0];
		this.content = this.el.children[1];
		this.opened = !(this.content.hasAttribute('hidden'));

		this.setListeners();
	}

	setListeners = () => {
		this.button.addEventListener('click', () => {
			this.opened ? this.toggle(false) : this.toggle(true);
		});
	}

	toggle(state) {
		if (state) {
			this.content.removeAttribute('hidden');
			this.opened = true;
			this.closeAnother(this.arr);
		} else {
			this.content.setAttribute('hidden', 'hidden');
			this.opened = false;
		}
	}

	closeAnother(arr) {
		arr.forEach(item => {
			if (item.index !== this.index) item.toggle(false);
		})
	}
}