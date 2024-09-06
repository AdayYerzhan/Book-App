export class AbstractView {
	constructor() {
		this.app = document.getElementById('root');
        console.log("this.app", this.app)
	}

	setTitle(title) {
		document.title = title;
	}

	render() {
		return;
	}

	destroy() {
		return;
	}
}