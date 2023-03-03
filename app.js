const { sueldoD  } = require('./meses/sueldo');
const { esVocal  } = require('./vocales/vocal');
const { numeroMenor  } = require('./menores/menores');

console.log("El sueldo neto "+ sueldoD(215));
console.log(esVocal("a"));
console.log(numeroMenor(1,8,6));