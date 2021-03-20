"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(_name, _lastName, _age, _dni, _birthday, _favoriteColor, _gender, _addresses, _mails, _phones, _note) {
        this._name = _name;
        this._lastName = _lastName;
        this._age = _age;
        this._dni = _dni;
        this._birthday = _birthday;
        this._favoriteColor = _favoriteColor;
        this._gender = _gender;
        this._addresses = _addresses;
        this._mails = _mails;
        this._phones = _phones;
        this._note = _note;
    }
    set name(name) {
        this._name = name;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set age(age) {
        this._age = age;
    }
    set dni(dni) {
        this._dni = dni;
    }
    set birthday(birthday) {
        this._birthday = birthday;
    }
    set favoriteColor(favoriteColor) {
        this._favoriteColor = favoriteColor;
    }
    set gender(gender) {
        this._gender = gender;
    }
    set addresses(addresses) {
        this._addresses = addresses;
    }
    set mails(mails) {
        this._mails = mails;
    }
    set phones(phones) {
        this._phones = phones;
    }
    set note(note) {
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
    showPersonInfo() {
        let allAddresses;
        for (const address of this._addresses) {
            allAddresses = allAddresses + address.showAddress();
        }
        let allNumbers;
        for (const number of this._phones) {
            allNumbers = allNumbers + number.numberPhone;
        }
        let allEmail;
        for (const email of this._mails) {
            allEmail = allEmail + email.email;
        }
        let personInfo = `Información personal:
    Nombre: ${this._name}
    Apellidos: ${this._lastName}
    Edad: ${this._age}
    DNI: ${this._dni}
    Fecha de Cumpleaños: ${this._birthday}
    Color Favorito: ${this._favoriteColor}
    Género: ${this._gender}
    Dirección: ${allAddresses}
    Email: ${allEmail}
    Teléfono: ${allNumbers}
    Notas: ${this._note}`;
        return personInfo;
    }
}
exports.Person = Person;
