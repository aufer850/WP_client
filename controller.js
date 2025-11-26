export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        // Рендеримо головну сторінку при запуску
        this.renderPage('home');
    }

    async renderPage(pageName) {
        this.view.app.innerHTML = '<div>Завантаження...</div>'; 
        //  await
        const data = await this.model.getAnimeData();
        this.view.render(pageName, data);
    }

}
