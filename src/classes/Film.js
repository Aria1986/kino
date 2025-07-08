export class Film{
    _id;
    _title;
    _description;
    _date;
    _imgUrl;
    _url;

    constructor(id, title,description, date, img, url){
        this._id=id;
        this._title=title;
        this._description=description;
        this.imgUrl=img;
        this._url=url;
    }
    get id() {
        return this._id;
    }

    set id(newId) {
        // Optionnel : ajouter une validation ou une logique
        if (typeof newId !== 'string' || newId.trim() === '') {
            console.warn("ID du film invalide.");
            // Vous pourriez lancer une erreur ou ne rien faire
        }
        this._id = newId;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle !== 'string' || newTitle.trim() === '') {
            console.warn("Titre du film invalide.");
        }
        this._title = newTitle.trim();
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        if (typeof newDescription !== 'string') {
            console.warn("Description du film invalide.");
        }
        this._description = newDescription;
    }

    get date() {
        return this._date;
    }

    set date(newDate) {
        // Exemple de validation de date simple
        if (!(newDate instanceof Date) && !isNaN(new Date(newDate))) {
            this._date = new Date(newDate); // Tente de convertir en objet Date
        } else if (newDate instanceof Date) {
            this._date = newDate;
        } else {
            console.warn("Date du film invalide.");
            // Vous pourriez définir une valeur par défaut ou laisser undefined
        }
    }

    get imgUrl() {
        return this._imgUrl;
    }

    set imgUrl(newImgUrl) {
        // Exemple de validation simple pour une URL d'image
        if (typeof newImgUrl !== 'string' || !newImgUrl.startsWith('http')) {
            console.warn("URL d'image invalide.");
        }
        this._imgUrl = newImgUrl;
    }

    get url() {
        return this._url;
    }

    set url(newUrl) {
        // Exemple de validation simple pour une URL
        if (typeof newUrl !== 'string' || !newUrl.startsWith('http')) {
            console.warn("URL du film invalide.");
        }
        this._url = newUrl;
    }

    get desktopCard() {
        const div = document.createElement("div");
        div.classList.add("col-md-4");

        // <div class="col-md-4">
        //     <div class="card bg-transparent rounded position-relative">
        //         <div class="bg-secondary text-xs position-absolute tagFilm ">
        //             Défi titre imposé
        //         </div>
        //         <img src="src/assets/img/imgCard1.png" class="card-img-top" alt="Carte 1">
        //         <div class="card-body">
        //             <p >Oct/Nov 2024</p>
        //         </div>
        //     </div>
        // </div>
    }
    get phoneCard() {
        // <div class="carousel-item active">
        //     <div class="card bg-transparent rounded position-relative">
        //          <div class="bg-secondary text-xs position-absolute tagFilm ">
        //              Défi titre imposé
        //          </div>
        //          <img src="src/assets/img/imgCard1.png" class="card-img-top" alt="Carte 1">
        //          <div class="card-body">
        //              <p >Oct/Nov 2024</p>
        //          </div>
        //      </div>
        //  </div>
    }
}