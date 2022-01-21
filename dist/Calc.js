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
/***/ (function(module, exports, __webpack_require__) {

var Calc = __webpack_require__(1);

var _require = __webpack_require__(3),
    add = _require.add,
    subtract = _require.subtract,
    multiply = _require.multiply,
    divide = _require.divide,
    percent = _require.percent,
    mod = _require.mod;

module.exports = {
  Calc: Calc,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  percent: percent,
  mod: mod
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = __webpack_require__(2),
    getValue = _require.getValue,
    handlerOperator = _require.handlerOperator;

var Calculate = /*#__PURE__*/function () {
  function Calculate() {
    _classCallCheck(this, Calculate);

    this.value = undefined;
    this.isInit = true;
  } // 加法


  _createClass(Calculate, [{
    key: "add",
    value: function add() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return getValue.call(this, args, "add");
    } // 减法

  }, {
    key: "subtract",
    value: function subtract() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return getValue.call(this, args, "subtract");
    } // 乘法

  }, {
    key: "multiply",
    value: function multiply() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return getValue.call(this, args, "multiply");
    } // 除法

  }, {
    key: "divide",
    value: function divide() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return getValue.call(this, args, "divide");
    } // 求百分比

  }, {
    key: "percent",
    value: function percent(number) {
      return "".concat(handlerOperator.call(this, number ? number : this, 100, "multiply"), "%");
    } // 取余

  }, {
    key: "mod",
    value: function mod() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return getValue.call(this, args, "mod");
    }
  }]);

  return Calculate;
}();

var Calc = /*#__PURE__*/function (_Calculate) {
  _inherits(Calc, _Calculate);

  var _super = _createSuper(Calc);

  function Calc() {
    var _this;

    _classCallCheck(this, Calc);

    _this = _super.call(this);
    Number.prototype.add = _this.add;
    Number.prototype.percent = _this.percent;
    Number.prototype.subtract = _this.subtract;
    Number.prototype.divide = _this.divide;
    Number.prototype.multiply = _this.multiply;
    Number.prototype.mod = _this.mod;
    return _this;
  }

  return _createClass(Calc);
}(Calculate);

module.exports = Calc;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * 把科学计数法的数据转成字符串显示的形式
 * eg: 0.00000001 Number类型的话 控制台输出就是 => 1e-8
 *     转为字符串的话就会输出 0.00000001
 * @param {Number} num 科学计数法的数字
 * @returns 处理好后的字符串数字
 */
function toNonExponential(num) {
  var m = num.toExponential().match(/\d(?:\.(\d+))?e([+-]\d+)/);
  return num.toFixed(Math.max(0, (m[1] || "").length - m[2]));
}
/**
 * 将浮点数转为整数，并返回一个对象，对象包含整数和倍数
 * 例：0.11 =>  { number：11, times: 100 }
 * @param {Number} floatNumber
 * @returns {Object} 返回整数和倍数的对象 { number：11, times: 100 }
 */


function parseToInteger(floatNumber) {
  var _numStr$split$;

  if (String(floatNumber).includes("%")) {
    floatNumber = handlePercentNumber(floatNumber);
  }

  var obj = {
    number: floatNumber,
    times: 1
  }; // 该数字是整数

  if (Number.isInteger(floatNumber)) return obj; // 将number类型转为字符串

  var numStr = "".concat(floatNumber);

  if (numStr.indexOf("-") !== -1) {
    numStr = toNonExponential(Number(numStr));
  } // 得到小数位的长度


  var decimalLength = ((_numStr$split$ = numStr.split(".")[1]) === null || _numStr$split$ === void 0 ? void 0 : _numStr$split$.length) || 0; // 得到小数位的倍数：0.11 => 小数位长度2，倍数100

  var times = Math.pow(10, decimalLength); // 算出整数值

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
  var numberObj1 = parseToInteger(m);
  var numberObj2 = parseToInteger(n);
  var intNumber1 = numberObj1.number,
      number1Times = numberObj1.times;
  var intNumber2 = numberObj2.number,
      number2Times = numberObj2.times;
  var maxTimes = number1Times > number2Times ? number1Times : number2Times;
  var result = null;
  var isNeedDivideTimes = false;

  switch (operator) {
    case "add":
      {
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

    case "subtract":
      {
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

    case "multiply":
      {
        result = intNumber1 * intNumber2 / (number1Times * number2Times);
        isNeedDivideTimes = false;
        break;
      }

    case "divide":
      {
        // 相除后的结果不是整数的话，递归调用 multiply 方法
        // 例如：=> 0.7 / 10 => (7 / 10) * (1 / 10) => 0.7 * 0.1
        var isNotInteger = !Number.isInteger(intNumber1 / intNumber2) || !Number.isInteger(number2Times / number1Times);

        if (isNotInteger) {
          result = handlerOperator.call(this, intNumber1 / intNumber2, number2Times / number1Times, "multiply");
        } else {
          result = intNumber1 / intNumber2 * (number2Times / number1Times);
        }

        isNeedDivideTimes = false;
        break;
      }

    case "mod":
      {
        // 被除数先变成整数后
        // 再根据被除数小数点的倍数，把除数也乘该倍数
        // 取余后的结果除这个倍数
        result = intNumber1 % (n * maxTimes) / maxTimes;
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
  if (typeof this !== "number") {
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
  var _this = this;

  handlerInitNumber.call(this, args);
  var value = args.reduce(function (pre, curr) {
    return handlerOperator.call(_this, pre, curr, operate);
  }, this.value ? this.value : this);
  return Number(value);
}
/**
 * 处理百分比数据
 * @param {String} percentNumber 含百分比的数据
 * @returns 把百分号去掉后并除100的数据
 */


function handlePercentNumber(percentNumber) {
  return percentNumber.includes("%") ? handlerOperator(Number(percentNumber.replace(/%/g, "")), 100, "divide") : percentNumber;
}

module.exports = {
  getValue: getValue,
  handlerOperator: handlerOperator
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Calc = __webpack_require__(1);

var calc = new Calc();

function add() {
  return calc.add.apply(calc, arguments);
}

function subtract() {
  return calc.subtract.apply(calc, arguments);
}

function multiply() {
  return calc.multiply.apply(calc, arguments);
}

function divide() {
  return calc.divide.apply(calc, arguments);
}

function percent() {
  return calc.percent.apply(calc, arguments);
}

function mod() {
  return calc.mod.apply(calc, arguments);
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  percent: percent,
  mod: mod
};

/***/ })
/******/ ]);
});