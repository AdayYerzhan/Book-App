(function () {
	'use strict';

	class AbstractView {
		constructor() {
			this.app = document.getElementById('root');
	        console.log("this.app", this.app);
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

	class MainView extends AbstractView {
	    constructor() {
	        super();
	        this.setTitle("Поиск книг");
	    }

	    render() {
	        const main = document.createElement("div");
	        console.log("MAIN", main);
	        main.innerHTML = "Test";
	        // this.app.innerHTML = "";
	        // this.app.append(main);
	    }
	}

	class App {
	    routes = [
	        { path: "", view: MainView }
	    ];

	    constructor() {
	        window.addEventListener("hashchange", this.route.bind(this));
	        this.route();
	        // console.log(window.document)
	    }

	    route() {
	        if (this.currentView) {
	            this.currentView.destroy();
	        }
	        const view = this.routes.find(r => r.path == location.hash).view;
	        this.currentView = new view();
	        this.currentView.render();
	        console.log("this.currentView", this.currentView);
	    }

	}

	new App();

})();
