export default class View{
    constructor(){
        this.app = document.getElementById('app');
    }

    render(data){
        let html = this.getHeader();
        html += this.getBody(data);
        html += this.getFooter(data);

        this.app.innerHTML = html;
    }

    getHeader(){
        return `
        <header>
		<a href="http://umsf.dp.ua/" class = "topbarbutton"><img src = "media/icon.png"></a>	
		<h1 class = "topbartext"> Ульяновська Юлія Вікторівна </h1>
		</header> 
        `
    }
    getBody(data){
		const articles = data.articles.map(art =>
			`<div class = "pagediv">
				<h1 class = "blockname">${art.title}</h1>
				${art.text.map(t =>
					`<h2 class = "blocktext">${t}</h2>`
				).join('')}
			</div>`
		).join('');

        return `
        <div id = "mainwrapper">
	
	    <div id = "leftblock">
		    <img src = "media/bggrad.png" id = "bggrad"> 
	    </div>
	    <div id = "infoblock">
		<h1 class = "blockname">Завідувач кафедри, доцент, кандидат технічних наук</h1>
		
		<img class = "mainimage" src = "media/picture.png"></img>
		
		${articles}

	    </div>
	
	    <div id = "rightblock">
		<img src = "media/bggradrotated.png" id = "bggrad" > 
	    </div>
	    </div>
        `

    }

    getFooter(data)
    {
        return `
        <footer>
        <div id = "mainwrapper"> 
        <div id = "leftblock"></div>       
        <div id = "infoblock">
		<div class = "footerblockwrapper">
		
		<div class = "footerblock">
		<h3 class = "footertext"><b>Основні сторінки: </b></h3><br>
		<a class = "footertext"href = https://www.instagram.com/umsf_official/>Сторінка Instagram УМСФ</a> <br>
		<a class = "footertext"href = https://www.facebook.com/umsf.dp.ua/>Сторінка Facebook УМСФ</a>
		</div>
		
		<div class = "footerblock">
			<h3 class = "footertext"><b>Адреса університету:</b></h3><br>
			<h3 class = "footertext">49000, м.Дніпро, вул. Володимира Вернадського 2/4</h3><br>

		</div>
		
		<div class = "footerblock">
				<h3 class = "footertext"><b>Контантні дані: </b></h3><br>
				<h3 class = "footertext">Телефон приймальної комісії (056) 756-05-00, </h3><br>
				<h3 class = "footertext"><b>Email: </b></h3><br>
				<h3 class = "footertext">umsf.pk@gmail.com </h3><br>
				<h3 class = "footertext">umsf.magistr2022@gmail.com </h3><br>
				<h3 class = "footertext"><b>Email викладача: </b></h3><br>
				<h3 class = "footertext">yuliyauyv@gmail.com, ulyanovska@umsf.dp.ua </h3><br>
		</div>
		
		</div>
		
	    <div class = "lastblock"><h3 class = "lasttext">© 2025 УМСФ. сторінку розроблено в навчальних цілях. Розробник сайту - ${data.author} </h3></div>
        </div>
        
        <div id = "rightblock"></div>
        </div>
	    </footer>        
        `
    }
}