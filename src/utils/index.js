/**
 * calculate helper core methods
 * @date 2022-01-22
 * @author coderxc<1440407551@qq.com>
 */


const { handlerOperator } = require("./tools");
/**
 * 处理初始化的数据
 * @param {Array} args 入参数组
 */
function handlerInitNumber(args) {
    if (this && typeof this !== "number") {
        this.value = args.shift();
    }
}

/**
 * 获取加减乘除的结果
 * @param {Array} args 需要运算的数据
 * @param {String} operate 操作符 add | subtract | multiply | divide
 * @returns 运算后的结果
 */
function getValue(args, operate) {
    handlerInitNumber.call(this, args);
    const value = args.reduce(
        (pre, curr) => handlerOperator.call(this, pre, curr, operate),
        this.value ? this.value : this
    );
    return Number(value);
}



module.exports = {
    getValue
};
