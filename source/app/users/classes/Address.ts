import { Coordinates } from '../';

export class Address {
    constructor(
        private _suite   : string,
        private _street  : string,
        private _city    : string,
        private _zipcode : string,
        private _geo     : Coordinates
    ) {}

    get suite()   { return this._suite; }
    get street()  { return this._street; }
    get city()    { return this._city; }
    get zipcode() { return this._zipcode; }
    get geo()     { return this._geo; }

    set suite(suite : string)          { this._suite = suite; }
    set street(street : string)        { this._street = street; }
    set city(city : string)            { this._city = city; }
    set zipcode(code : string)         { this._zipcode = code; }
    set geo(coordinates : Coordinates) { this._geo = coordinates; }
}