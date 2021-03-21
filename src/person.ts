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

  get name(): string {
    return this._name;
  }
  get lastName(): string {
    return this._lastName;
  }
  get age(): number {
    return this._age;
  }
  get dni(): string {
    return this._dni;
  }
  get birthday(): Date {
    return this._birthday;
  }
  get favoriteColor(): string {
    return this._favoriteColor;
  }
  get gender(): string {
    return this._gender;
  }
  get addresses(): Array<Address> {
    return this._addresses;
  }
  get mails(): Array<Mail> {
    return this._mails;
  }
  get phones(): Array<Phone> {
    return this._phones;
  }
  get note(): string {
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
  showAllAddresses(): string {
    let allAddresses: string = '';
    for (let i = 0; i < this._addresses.length; i++) {
      allAddresses = `${allAddresses}\n\tDirección ${i + 1}: ${this._addresses[
        i
      ].showAddress()}`;
    }
    return allAddresses;
  }
  showAllPhones(): string {
    let allPhones: string = '';
    for (let i = 0; i < this._phones.length; i++) {
      allPhones = `${allPhones}\n\tEmail ${i + 1}: ${
        this._phones[i].numberPhone
      }`;
    }
    return allPhones;
  }
  showAllEmails(): string {
    let allEmail: string = '';
    for (let i = 0; i < this._mails.length; i++) {
      allEmail = `${allEmail}\n\tTeléfono ${i + 1}: ${this._mails[i].email}`;
    }
    return allEmail;
  }
  showPersonInfo(): string {
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
    Dirección: ${this.showAllAddresses()}
    Email: ${this.showAllEmails()}
    Teléfono: ${this.showAllPhones()}
    Notas: ${this._note}`;
    return personInfo;
  }
}
