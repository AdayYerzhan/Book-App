import { MainView } from "../static/views/main/main";

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
        console.log("this.currentView", this.currentView)
    }

}

new App();