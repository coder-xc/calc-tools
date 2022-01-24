const { Calc } = require("../../dist/calc");

const calc = new Calc();
console.log(calc.add(1, 2).add(5))
console.log(calc.mod(10, 3.1))