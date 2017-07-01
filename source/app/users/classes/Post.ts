export class Post {
    constructor(
        private _id     : number,
        private _userId : number,
        private _title  : string,
        private _body   : string
        ) {}

    get id()     { return this._id; }
    get userId() { return this._userId; }
    get title()  { return this._title; }
    get body()   { return this._body; }

    set id(id : number)       { this._id = id; }
    set userId(id : number)   { this._userId = id; }
    set title(title : string) { this._title = title; }
    set body(body : string)   { this._body = body; }
}