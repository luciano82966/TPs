const readLineSync= require("readline-sync")

const persona = new Object();

persona.nombre = readLineSync.question("introduce tu nombre: ");
persona.apellido = readLineSync.question("introduce tu apellido: ");
persona.edad = readLineSync.question("introduce tu edad: ");

console.log(persona)