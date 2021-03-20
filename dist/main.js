"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Import Persona, Mail, Dirección y teéfono */
const person_1 = require("./person");
const address_1 = require("./address");
const directionPerson1 = new address_1.Address('Avenida Antonio López', 10, 2, 'D', 28320, 'Pinto', 'Madrid');
const noa = new person_1.Person('Noa', 'Arias', 6, '5436689C', [directionPerson1]);
console.log(noa.name);
noa.name = 'Sandra';
console.log(noa.dni);
console.log(noa.name);
console.log(noa.showPersonInfo());
const dni = '53476342';
const persons = [noa];
