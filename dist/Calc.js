(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["calc"] = factory();
	else
		root["calc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calc", function() { return Calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
const { getValue } = __webpack_require__(1);
// const { add, subtract, multiply, divide, percent, mod } = require("./module/index")

class Calculate {
    constructor() {
        this.value = undefined;
        this.isInit = true;
    }
    // 加法
    add(...args) {
        return getValue.call(this, args, 'add');
    }
    // 减法
    subtract(...args) {
        return getValue.call(this, args, 'subtract');
    }
    // 乘法
    multiply(...args) {
        return getValue.call(this, args, 'multiply');
    }
    // 除法
    divide(...args) {
        return getValue.call(this, args, 'divide');
    }
    // 求百分比
    percent(number) {
        return `${handlerOperator.call(this, number ? number : this, 100, 'multiply')}%`;
    }
    // 取余
    mod(...args) {
        return getValue.call(this, args, 'mod');
    }
}

class Calc extends Calculate {
    constructor() {
        super();
        Number.prototype.add = this.add;
        Number.prototype.percent = this.percent;
        Number.prototype.subtract = this.subtract;
        Number.prototype.divide = this.divide;
        Number.prototype.multiply = this.multiply;
        Number.prototype.mod = this.mod;
    }
}


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




/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * 把科学计数法的数据转成字符串显示的形式
 * eg: 0.00000001 Number类型的话 控制台输出就是 => 1e-8
 *     转为字符串的话就会输出 0.00000001
 * @param {Number} num 科学计数法的数字
 * @returns 处理好后的字符串数字
 */
function toNonExponential(num) {
    const m = num.toExponential().match(/\d(?:\.(\d+))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
}

/**
 * 将浮点数转为整数，并返回一个对象，对象包含整数和倍数
 * 例：0.11 =>  { number：11, times: 100 }
 * @param {Number} floatNumber
 * @returns {Object} 返回整数和倍数的对象 { number：11, times: 100 }
 */
function parseToInteger(floatNumber) {
    if (String(floatNumber).includes('%')) {
        floatNumber = handlePercentNumber(floatNumber);
    }
    const obj = { number: 0, times: 1 };
    if (Number.isInteger(floatNumber)) {
        obj.number = floatNumber;
        return obj;
    }
    // 将number类型转为字符串
    let numStr = `${floatNumber}`;
    if (numStr.indexOf('-') !== -1) {
        numStr = toNonExponential(Number(numStr));
    }
    // 得到小数位的长度
    let decimalLength = 0;
    if (numStr.split('.')[1]) {
        decimalLength = numStr.split('.')[1].length;
    }
    // 得到小数位的倍数：0.11 => 小数位长度2，倍数100
    const times = Math.pow(10, decimalLength);

    // 算出整数值
    obj.number = Number(toNonExponential(Number((numStr * times).toFixed())));
    obj.times = times;

    return obj;
}

/**
 * 对 m 和 n 进行运算
 * @param {Number} n 数字2
 * @param {Number} m 数字1
 * @param {String} operator 运算操作符 add | subtract | multiply | divide
 * @returns 运算后的结果
 */
function handlerOperator(m, n, operator) {
    const numberObj1 = parseToInteger(m);
    const numberObj2 = parseToInteger(n);
    const { number: intNumber1, times: number1Times } = numberObj1;
    const { number: intNumber2, times: number2Times } = numberObj2;

    const maxTimes = number1Times > number2Times ? number1Times : number2Times;

    let result = null;
    let isNeedDivideTimes = false;
    switch (operator) {
        case 'add': {
            if (number1Times === number2Times) {
                // 小数位相同，直接整数相加
                result = intNumber1 + intNumber2;
            } else if (number1Times > number2Times) {
                // number1小数位比number2小数位多
                // 算出number1和number2相差了多少倍，然后让number2补上该小数位
                result = intNumber1 + intNumber2 * (number1Times / number2Times);
            } else {
                // number2小数位比number1小数位多
                // 算出number1和number2相差了多少倍，然后让number1补上该小数位
                result = intNumber2 + intNumber1 * (number2Times / number1Times);
            }
            isNeedDivideTimes = true;
            break;
        }
        case 'subtract': {
            if (number1Times === number2Times) {
                // 小数位相同，直接整数相加
                result = intNumber1 - intNumber2;
            } else if (number1Times > number2Times) {
                // number1小数位比number2小数位多
                // 算出number1和number2相差了多少倍，然后让number2补上该小数位
                result = intNumber1 + intNumber2 * (number1Times / number2Times);
            } else {
                // number2小数位比number1小数位多
                // 算出number1和number2相差了多少倍，然后让number1补上该小数位
                result = intNumber2 + intNumber1 * (number2Times / number1Times);
            }
            isNeedDivideTimes = true;
            break;
        }
        case 'multiply': {
            result = (intNumber1 * intNumber2) / (number1Times * number2Times);
            isNeedDivideTimes = false;
            break;
        }
        case 'divide': {
            // 相除后的结果不是整数的话，递归调用 multiply 方法
            // 例如：=> 0.7 / 10 => (7 / 10) * (1 / 10) => 0.7 * 0.1
            const isNotInteger =
                !Number.isInteger(intNumber1 / intNumber2) ||
                !Number.isInteger(number2Times / number1Times);
            if (isNotInteger) {
                result = handlerOperator.call(
                    this,
                    intNumber1 / intNumber2,
                    number2Times / number1Times,
                    'multiply'
                );
            } else {
                result = (intNumber1 / intNumber2) * (number2Times / number1Times);
            }
            isNeedDivideTimes = false;
            break;
        }

        case 'mod': {
            // 被除数先变成整数后
            // 再根据被除数小数点的倍数，把除数也乘该倍数
            // 取余后的结果除这个倍数
            result = (intNumber1 % (n * maxTimes)) / maxTimes;
            isNeedDivideTimes = false;
            break;
        }

        default:
            break;
    }
    if (isNeedDivideTimes) {
        return toNonExponential.call(this, result / maxTimes);
    }
    return result;
}

/**
 * 处理初始化的数据
 * @param {Array} args 入参数组
 */
function handlerInitNumber(args) {
    if (this.value === undefined) {
        if (this.isInit) {
            this.value = args[0];
            this.isInit = false;
            args.shift();
        }
    } else {
        if (args.length > 1) {
            this.value = args[0];
            args.shift();
        }
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

/**
 * 处理百分比数据
 * @param {String} percentNumber 含百分比的数据
 * @returns 把百分号去掉后并除100的数据
 */
function handlePercentNumber(percentNumber) {
    if (percentNumber.includes('%')) {
        return handlerOperator(
            Number(
                percentNumber.replace(/%/g, () => {
                    return '';
                })
            ),
            100,
            'divide'
        );
    }
}

module.exports = {
    getValue
}

/***/ })
/******/ ]);
});