/**
 * Calc Class core methods
 * @date 2022-01-22
 * @author coderxc<1440407551@qq.com>
 */

const { getValue } = require("../utils")
const { handlerOperator, handleThis } = require("../utils/tools");
const { calculateFunNames } = require("../utils/constant");

class Calculate {
    constructor() {
        this.value = undefined;
        this.isInit = true;
    }
    // 加法
    add(...args) {
        return getValue.call(handleThis(args, this), args, "add");
    }
    // 减法
    subtract(...args) {
        return getValue.call(handleThis(args, this), args, "subtract");
    }
    // 乘法
    multiply(...args) {
        return getValue.call(handleThis(args, this), args, "multiply");
    }
    // 除法
    divide(...args) {
        return getValue.call(handleThis(args, this), args, "divide");
    }
    // 求百分比
    percent(number) {
        return `${handlerOperator.call(this, number ? number : this, 100, "multiply")}%`;
    }
    // 取余
    mod(...args) {
        return getValue.call(handleThis(args, this), args, "mod");
    }
}

class Calc extends Calculate {
    constructor() {
        super();
        calculateFunNames.forEach(item => (Number.prototype[item] = this[item]));
    }
}

const { add, subtract, divide, multiply, mod, percent } = new Calc()

module.exports = { add, subtract, divide, multiply, mod, percent }
module.exports.Calc = Calc;