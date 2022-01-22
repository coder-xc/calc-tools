const { getValue, handlerOperator } = require("../utils/index");
const { calculateFunNames } = require("../utils/constant");

class Calculate {
    constructor() {
        this.value = undefined;
        this.isInit = true;
    }
    // 加法
    add(...args) {
        return getValue.call(this, args, "add");
    }
    // 减法
    subtract(...args) {
        return getValue.call(this, args, "subtract");
    }
    // 乘法
    multiply(...args) {
        return getValue.call(this, args, "multiply");
    }
    // 除法
    divide(...args) {
        return getValue.call(this, args, "divide");
    }
    // 求百分比
    percent(number) {
        return `${handlerOperator.call(this, number ? number : this, 100, "multiply")}%`;
    }
    // 取余
    mod(...args) {
        return getValue.call(this, args, "mod");
    }
}

class Calc extends Calculate {
    constructor() {
        super();
        calculateFunNames.forEach(item => (Number.prototype[item] = this[item]));
    }
}

module.exports = Calc;
