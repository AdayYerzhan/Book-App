import { MainView } from "./views/main/main";
import "./app.css"

class App {
    routes = [
        { path: "", view: MainView }
    ];
    appState = {
        favorites: [1, 2]
    };

    constructor() {
        window.addEventListener("hashchange", this.route.bind(this));
        this.route();
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
        this.currentView = new view(this.appState);
        this.currentView.render();
    }
}

new App();