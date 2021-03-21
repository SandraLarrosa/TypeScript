import { Person } from './person';
import { Address } from './address';
import { Mail } from './mail';
import { Phone } from './phone';

function buildAgenda(): Array<Person> {
  let agenda: Array<Person> = [];

  const directionPerson1: Address = new Address(
    'Avenida Antonio López',
    10,
    2,
    'D',
    28320,
    'Pinto',
    'Madrid'
  );
  const person1: Person = new Person(
    'Noa',
    'Sanchez López',
    6,
    '54366890C',
    new Date(2014, 8, 6),
    'Rosa',
    'Mujer',
    [directionPerson1],
    [new Mail('aaaaaa@gmail.com')],
    [new Phone(636948219)],
    'Hola caracola'
  );
  const directionPerson2: Address = new Address(
    'Avenida Juanita',
    26,
    4,
    'A',
    28000,
    'Madrid',
    'Madrid'
  );
  const person2: Person = new Person(
    'Mario',
    'Perez Sanchez',
    40,
    '50133658F',
    new Date(1981, 11, 29),
    'Negro',
    'Hombre',
    [directionPerson2],
    [new Mail('marioelmejor@gmail.com')],
    [new Phone(677896523)],
    'Hola soy MARIO'
  );
  const directionPerson3: Address = new Address(
    'Calle del desastre',
    1,
    2,
    'C',
    28000,
    'Valdemoro',
    'Madrid'
  );
  const person3: Person = new Person(
    'Sara',
    'López Espinosa',
    32,
    '59222333D',
    new Date(1988, 3, 11),
    'Morado',
    'Mujer',
    [directionPerson3],
    [new Mail('saritar@gmail.com')],
    [new Phone(699314569)],
    'Hola soy Sara y esta es mi agenda personal'
  );
  agenda.push(person1);
  agenda.push(person2);
  agenda.push(person3);
  return agenda;
}

function showAgenda(agenda: Array<Person>): void {
  for (const person of agenda) {
    console.log(person.showPersonInfo());
  }
}

let agenda = buildAgenda();
showAgenda(agenda); //Muestra la agenda con los datos iniciales

function changeDataAgenda(
  numberDni: string,
  newAddress: Address,
  newMail: Mail,
  newPhone: Phone
): void {
  for (const person of agenda) {
    if (person.dni === numberDni) {
      person.addAddress(newAddress);
      person.addMail(newMail);
      person.addPhone(newPhone);
    }
  }
}

const dniMario: string = '50133658F';
const newAddressMario: Address = new Address(
  'Rotonda circular',
  5,
  3,
  'B',
  28000,
  'Madrid',
  'Madrid'
);
const newMailMario: Mail = new Mail('marionuevo@gmail.com');
const newPhoneMario: Phone = new Phone(699325689);

changeDataAgenda(dniMario, newAddressMario, newMailMario, newPhoneMario);
showAgenda(agenda); //Muestra la agenda con los datos añadidos
