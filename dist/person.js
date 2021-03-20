"use strict";
/* Import Dirección, Mail y Teléfono */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    sayHi() {
        console.log(`Hola me llamo ${this.name} y mi apellido es ${this.lastName}`);
    }
}
exports.Person = Person;
