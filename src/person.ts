/* Import Dirección, Mail y Teléfono */
import { Address } from './address';
import { Phone } from './phone';
import { Mail } from './mail';

export class Person {
  constructor(
    private _name: string,
    private _lastName: string,
    private _age: number,
    private _dni: string,
    private _birthday: Date,
    private _favoriteColor: string,
    private _gender: string,
    private _addresses: Array<Address>,
    private _mails: Array<Mail>,
    private _phones: Array<Phone>,
    private _note: string
  ) {}

  set name(name: string) {
    this._name = name;
  }
  set lastName(lastName: string) {
    this._lastName = lastName;
  }
  set age(age: number) {
    this._age = age;
  }
  set dni(dni: string) {
    this._dni = dni;
  }
  set birthday(birthday: Date) {
    this._birthday = birthday;
  }
  set favoriteColor(favoriteColor: string) {
    this._favoriteColor = favoriteColor;
  }
  set gender(gender: string) {
    this._gender = gender;
  }
  set addresses(addresses: Array<Address>) {
    this._addresses = addresses;
  }
  set mails(mails: Array<Mail>) {
    this._mails = mails;
  }
  set phones(phones: Array<Phone>) {
    this._phones = phones;
  }
  set note(note: string) {
    this._note = note;
  }

  get name() {
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get dni() {
    return this._dni;
  }
  get birthday() {
    return this._birthday;
  }
  get favoriteColor() {
    return this._favoriteColor;
  }
  get gender() {
    return this._gender;
  }
  get addresses() {
    return this._addresses;
  }
  get mails() {
    return this._mails;
  }
  get phones() {
    return this._phones;
  }
  get note() {
    return this._note;
  }
  addAddress(newAddress: Address): void {
    this._addresses.push(newAddress);
  }
  addMail(newMail: Mail): void {
    this._mails.push(newMail);
  }
  addPhone(newPhone: Phone): void {
    this._phones.push(newPhone);
  }

  getFormatedBirthday(): string {
    let date = this._birthday;
    let formatedBirthday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return formatedBirthday;
  }
  showPersonInfo(): string {
    let allAddresses: string = '';
    for (const address of this._addresses) {
      allAddresses = allAddresses + address.showAddress();
    }
    let allPhones: string = '';
    for (const number of this._phones) {
      allPhones = `${allPhones} ${number.numberPhone} `;
    }
    let allEmail: string = '';
    for (let i = 0; i < this._mails.length; i++) {
      allEmail = `${allEmail}\n\tEmail ${i + 1}: ${this._mails[i].email}`;
    }

    let personInfo: string = `Información personal de ${this._name} ${
      this._lastName
    }:
    Nombre: ${this._name}
    Apellidos: ${this._lastName}
    Edad: ${this._age}
    DNI: ${this._dni}
    Fecha de Cumpleaños: ${this.getFormatedBirthday()}
    Color Favorito: ${this._favoriteColor}
    Género: ${this._gender}
    Dirección: ${allAddresses}
    Email: ${allEmail}
    Teléfono: ${allPhones}
    Notas: ${this._note}`;
    return personInfo;
  }
}
