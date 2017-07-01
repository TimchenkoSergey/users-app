export class Coordinates {
    constructor(
        private _lat : string,
        private _lng : string
    ) {}

    get lat() { return this._lat; }
    get lng() { return this._lng; }

    set lat(lat : string) { this._lat = lat; }
    set lng(lng : string) { this._lng = lng; }
}