export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        // Рендеримо головну сторінку при запуску
        this.renderPage('home');
    }

    renderPage() {
        const data = this.model.getData();
        this.view.render(data);
    }
}