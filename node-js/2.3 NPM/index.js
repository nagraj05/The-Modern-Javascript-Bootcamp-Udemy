import generateName from "sillyname";
import superheroes from "superheroes";
import { randomSuperhero } from "superheroes";

var sillyname = generateName();
const name = randomSuperhero();

console.log(`My name is ${sillyname}.`);
console.log(`I am ${name}!`);
console.log(superheroes)