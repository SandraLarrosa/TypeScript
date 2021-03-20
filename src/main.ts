/* Import Persona, Mail, Dirección y teéfono */
import { Person } from './person';
import { Address } from './address';

const directionPerson1 = new Address(
  'Avenida Antonio López',
  10,
  2,
  'D',
  28320,
  'Pinto',
  'Madrid'
);

const noa = new Person('Noa', 'Arias', 6, '5436689C', [directionPerson1]);

console.log(noa.name);

noa.name = 'Sandra';
console.log(noa.dni);
console.log(noa.name);
console.log(noa.showPersonInfo());

const dni = '53476342';
const persons = [noa];
