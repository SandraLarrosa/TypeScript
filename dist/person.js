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
    addAddress(newAddress) {
        this._addresses.push(newAddress);
    }
    addMail(newMail) {
        this._mails.push(newMail);
    }
    addPhone(newPhone) {
        this._phones.push(newPhone);
    }
    getFormatedBirthday() {
        let date = this._birthday;
        let formatedBirthday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        return formatedBirthday;
    }
    showPersonInfo() {
        let allAddresses = '';
        for (const address of this._addresses) {
            allAddresses = allAddresses + address.showAddress();
        }
        let allPhones = '';
        for (const number of this._phones) {
            allPhones = `${allPhones} ${number.numberPhone} `;
        }
        let allEmail = '';
        for (let i = 0; i < this._mails.length; i++) {
            allEmail = `${allEmail}\n\tEmail ${i + 1}: ${this._mails[i].email}`;
        }
        let personInfo = `Información personal de ${this._name} ${this._lastName}:
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
exports.Person = Person;
