import { Person } from './person';
import { Address } from './address';
import { Mail } from './mail';
import { Phone } from './phone';

/*
  Tenía dudas sobre el enunciado en el apartado de añadir dirección, email y teléfono.
  Por eso he creado funciones que permiten tanto añadir nuevos datos como reemplazar los datos
  ya existentes.

  Respecto al pintar los datos de cada persona he optado por tener una función
  dentro de la clase Person que sea la que me de los datos ya formateados para cada persona,
  ya que es más limpio y deja la responsabilidad del formato a la propia clase.
*/

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
    [new Mail('Personal', 'aaaaaa@gmail.com')],
    [new Phone('Personal', 636948219)],
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
    [new Mail('Trabajo', 'marioelmejor@gmail.com')],
    [new Phone('Trabajo', 677896523)],
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
    [new Mail('Personal', 'saritar@gmail.com')],
    [new Phone('Personal', 699314569)],
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

function addNewPersonData(
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

function changePersonData(
  numberDni: string,
  newAddress: Address,
  newMail: Mail,
  newPhone: Phone
): void {
  for (const person of agenda) {
    if (person.dni === numberDni) {
      person.setAddress(newAddress);
      person.setMail(newMail);
      person.setPhone(newPhone);
    }
  }
}

let agenda = buildAgenda();
showAgenda(agenda); //Muestra la agenda con los datos iniciales

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
const newMailMario: Mail = new Mail('Personal', 'marionuevo@gmail.com');
const newPhoneMario: Phone = new Phone('Personal', 699325689);

const dniSara: string = '59222333D';
const changeAddressSara: Address = new Address(
  'Rotonda Cuadrada',
  15,
  2,
  'F',
  28000,
  'Madrid',
  'Madrid'
);
const changeMailSara: Mail = new Mail('Personal', 'minuevoemail@gmail.com');
const changePhoneSara: Phone = new Phone('Personal', 608934597);

addNewPersonData(dniMario, newAddressMario, newMailMario, newPhoneMario);
changePersonData(dniSara, changeAddressSara, changeMailSara, changePhoneSara);
showAgenda(agenda); //Muestra la agenda con los datos añadidos
