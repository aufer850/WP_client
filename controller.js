export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        // Рендеримо головну сторінку при запуску
        this.renderPage('home');
    }

    async renderPage() {
        this.view.app.innerHTML = '<div>Завантаження...</div>'; 
        //  await
        const data = await this.model.getData();
        this.view.render(data);
    }

}


