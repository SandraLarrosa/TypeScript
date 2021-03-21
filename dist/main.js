"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Import Persona, Mail, Dirección y teéfono */
const person_1 = require("./person");
const address_1 = require("./address");
const mail_1 = require("./mail");
const phone_1 = require("./phone");
function buildAgenda() {
    let agenda = [];
    const directionPerson1 = new address_1.Address('Avenida Antonio López', 10, 2, 'D', 28320, 'Pinto', 'Madrid');
    const person1 = new person_1.Person('Noa', 'Sanchez López', 6, '54366890C', new Date(2014, 8, 6), 'Rosa', 'Mujer', [directionPerson1], [new mail_1.Mail('aaaaaa@gmail.com')], [new phone_1.Phone(636948219)], 'Hola caracola');
    const directionPerson2 = new address_1.Address('Avenida Juanita', 26, 4, 'A', 28000, 'Madrid', 'Madrid');
    const person2 = new person_1.Person('Mario', 'Perez Sanchez', 40, '50133658F', new Date(1981, 11, 29), 'Negro', 'Hombre', [directionPerson2], [new mail_1.Mail('marioelmejor@gmail.com')], [new phone_1.Phone(677896523)], 'Hola soy MARIO');
    const directionPerson3 = new address_1.Address('Calle del desastre', 1, 2, 'C', 28000, 'Valdemoro', 'Madrid');
    const person3 = new person_1.Person('Sara', 'López Espinosa', 32, '59222333D', new Date(1988, 3, 11), 'Morado', 'Mujer', [directionPerson3], [new mail_1.Mail('saritar@gmail.com')], [new phone_1.Phone(699314569)], 'Hola soy Sara y esta es mi agenda personal');
    agenda.push(person1);
    agenda.push(person2);
    agenda.push(person3);
    return agenda;
}
function showAgenda(agenda) {
    for (const person of agenda) {
        console.log(person.showPersonInfo());
    }
}
let agenda = buildAgenda();
showAgenda(agenda); //Muestra los datos iniciales
function changeDataAgenda(numberDni, newDirection, newMail, newPhone) {
    for (const person of agenda) {
        if (person.dni === numberDni) {
            person.addAddress(newDirection);
            person.addMail(newMail);
            person.addPhone(newPhone);
        }
    }
}
const searchDni = '50133658F';
const newDirectionMario = new address_1.Address('Rotonda circular', 5, 3, 'B', 28000, 'Madrid', 'Madrid');
const newMailMario = new mail_1.Mail('marionuevo@gmail.com');
const newPhoneMario = new phone_1.Phone(699325689);
changeDataAgenda(searchDni, newDirectionMario, newMailMario, newPhoneMario);
showAgenda(agenda); //Muestra con los datos añadidos
