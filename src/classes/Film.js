export class Film{
    _id;
    _title;
    _description;
    _date;
    _imgUrl;
    _url;
    _dateFormate;

    constructor(id, title,description, date, img, url){
        this._id=id;
        this._title=title;
        this._description=description;
        this._date=date;
        this.imgUrl=img;
        this._url=url;
        this._dateFormate = formaterDateEnFrancais(this._date)
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
        const markup=
        `  
            <div class="card bg-transparent rounded position-relative">
                <div class="bg-secondary text-xs position-absolute tagFilm ">
                    ${this._title}
                </div>
                <img src="${this._imgUrl}" class="card-img-top" alt="Carte 1">
                <div class="card-body">
                    <p >${this._dateFormate}</p>
                </div>
            </div>`
        div.innerHTML = markup;
        return div;
    }
    get phoneCard() {
        const div = document.createElement("div");
        div.classList.add("carousel-item");
        const markupPhone =
            `<div class="card bg-transparent rounded position-relative">
                 <div class="bg-secondary text-xs position-absolute tagFilm ">
                     ${this._title}
                 </div>
                 <img src="${this._imgUrl}" class="card-img-top" alt="img derniers films">
                 <div class="card-body">
                     <p >${this._dateFormate}</p>
                 </div>
             </div>`
        div.innerHTML = markupPhone;
        return div;
   
    }
}
function formaterDateEnFrancais(dateString) {
    const date = new Date(dateString);
    // Options pour le formatage : mois en toutes lettres et année numérique
     if (isNaN(date.getTime())) { // Check if the date is invalid
        console.error("Erreur: La date est invalide. Vérifiez l'entrée ci-dessus.");
        return "Date invalide"; // Ou toute autre chaîne d'erreur appropriée
    }
    const options = {
        year: 'numeric', // L'année en chiffres (ex: 2025)
        month: 'long'    // Le mois en toutes lettres (ex: juin)
    };

    const dateFormatee = date.toLocaleDateString('fr-FR', options);

    return dateFormatee;
}