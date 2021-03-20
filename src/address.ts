export class Address {
  constructor(
    private _street: string,
    private _number: number,
    private _floor: number,
    private _letter: string,
    private _zipCode: number,
    private _village: string,
    private _province: string
  ) {}

  set street(street: string) {
    this._street = street;
  }
  set number(number: number) {
    this._number = number;
  }
  set floor(floor: number) {
    this._floor = floor;
  }
  set letter(letter: string) {
    this._letter = letter;
  }
  set zipCode(zipCode: number) {
    this._zipCode = zipCode;
  }
  set village(village: string) {
    this._village = village;
  }
  set province(province: string) {
    this._province = province;
  }

  get street() {
    return this._street;
  }
  get number() {
    return this._number;
  }
  get floor() {
    return this._floor;
  }
  get letter() {
    return this._letter;
  }
  get zipCode() {
    return this._zipCode;
  }
  get village() {
    return this._village;
  }
  get province() {
    return this._province;
  }

  showAddress() {
    let address: string = `
     ${this._street}, ${this._number} ${this._floor} ${this._letter} 
     ${this._zipCode} ${this._village} (${this._province})`;
    return address;
  }
}
