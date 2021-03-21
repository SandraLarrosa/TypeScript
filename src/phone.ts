export class Phone {
  constructor(private _numberPhone: number) {}
  set numberPhone(numberPhone: number) {
    this._numberPhone = numberPhone;
  }
  get numberPhone(): number {
    return this._numberPhone;
  }
}
