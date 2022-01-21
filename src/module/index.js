const Calc = require("./main");
const calc = new Calc();

function add(...args) {
    return calc.add(...args);
}
function subtract(...args) {
    return calc.subtract(...args);
}
function multiply(...args) {
    return calc.multiply(...args);
}
function divide(...args) {
    return calc.divide(...args);
}
function percent(...args) {
    return calc.percent(...args);
}
function mod(...args) {
    return calc.mod(...args);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    percent,
    mod
};
