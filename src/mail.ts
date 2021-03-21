export class Mail {
  constructor(private _email: string) {}
  set email(email: string) {
    this._email = email;
  }
  get email(): string {
    return this._email;
  }
}
