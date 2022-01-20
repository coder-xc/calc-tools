const { Calc } = require("../index.js");

function add(...args) {
    return new Calc().add(...args);
}

function subtract(...args) {
    return new Calc().subtract(...args);
}

function multiply(...args) {
    return new Calc().multiply(...args);
}
function divide(...args) {
    return new Calc().divide(...args);
}
function percent(...args) {
    return new Calc().percent(...args);
}
function mod(...args) {
    return new Calc().mod(...args);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    percent,
    mod
}