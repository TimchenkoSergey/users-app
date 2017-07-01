export class Comment {
    constructor(
        private _postId : number,
        private _id     : number,
        private _name   : string,
        private _email  : string,
        private _body   : string
    ) {}

    get postId() { return this._postId; }
    get id()     { return this._id; }
    get name()   { return this._name; }
    get email()  { return this._email; }
    get body()   { return this._body; }

    set postId(id : number)   { this._postId = id; }
    set id(id : number)       { this._id = id; }
    set name(name : string)   { this._name = name; }
    set email(email : string) { this._email = email; }
    set body(body : string)   { this._body = body; }
}