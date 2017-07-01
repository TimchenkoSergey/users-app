import {
    Address,
    Company
} from '../';

export class User {
    constructor(
        private _id       : number,
        private _name     : string,
        private _email    : string,
        private _username : string,
        private _phone    : string,
        private _website  : string,
        private _address  : Address,
        private _company  : Company
    ) {}

    get id()       { return this._id; }
    get name()     { return this._name; }
    get email()    { return this._email; }
    get username() { return this._username; }
    get phone()    { return this._phone; }
    get website()  { return this._website; }
    get address()  { return this._address; }
    get company()  { return this._company; }

    set id(id : number)             { this._id = id; }
    set name(name : string)         { this._name = name; }
    set email(email : string)       { this._email = email; }
    set username(username : string) { this._username = username; }
    set phone(phone : string)       { this._phone = phone; }
    set website(website : string)   { this._website = website; }
    set address(address : Address)  { this._address = address; }
    set company(company : Company)  { this._company = company; }
}