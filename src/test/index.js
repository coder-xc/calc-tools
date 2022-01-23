const { Calc, add } = require("../../dist/calc");

const calc = new Calc();
console.log(calc.add(1, 2).add(5))
console.log(add(1, 2).add(5))