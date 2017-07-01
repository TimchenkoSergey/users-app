export class Company {
    constructor(
        private _name        : string,
        private _catchPhrase : string,
        private _bs          : string
    ) {}

    get name()        { return this._name; }
    get catchPhrase() { return this._catchPhrase; }
    get bs()          { return this._bs; }

    set name(name : string)          { this._name = name; }
    set catchPhrase(phrase : string) { this._catchPhrase = phrase; }
    set bs(bs : string)              { this._bs = bs; }
}