/* Import Dirección, Mail y Teléfono */

export class Person {
  constructor(
    private name: string,
    private lastName: string
  ) /*     private age: number,
    private dni: string,
    private birthday: Date,
    private favoriteColor: string,
    private gender: string,
    private addresses: Array<Address>,
    private mails: Array<Mail>,
    private phones: Array<Phone>,
    private note: string */
  {}

  sayHi() {
    console.log(`Hola me llamo ${this.name} y mi apellido es ${this.lastName}`);
  }
}
