export class Film{
    _id;
    _title;
    _description;
    _date;
    _imgUrl;
    _url;

    constructor(id,title,description, date, img, url){
        this._id=id;
        this._title=title;
        this._description=description;
        this.imgUrl=img;
        this._url=url;
    }
}