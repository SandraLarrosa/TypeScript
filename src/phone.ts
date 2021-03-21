export class Phone {
  constructor(private _type: string, private _numberPhone: number) {}

  set type(type: string) {
    this._type = type;
  }
  get type(): string {
    return this._type;
  }

  set numberPhone(numberPhone: number) {
    this._numberPhone = numberPhone;
  }
  get numberPhone(): number {
    return this._numberPhone;
  }
}
