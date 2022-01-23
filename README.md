# JavaScript computing tool class
<hr>

## Why use it

### problem
```js
console.log(0.1+0.2); // 0.30000000000000004
```

When JavaScript computes values with decimals, the problem of inaccurate precision occasionally occurs, so we need a library that can handle this situation


### introduce
- **Calc:** Is a class. You need to create a new instance with the new keyword to use.

- **add:** Addition, multiple parameters can be passed for operation. When there is only one parameter, if it is a chain call, it will operate with the result of the previous operation. If not, the passed in parameter will be returned.

- **subtract:** Subtraction, multiple parameters can be passed for operation. When there is only one parameter, if it is a chain call, it will operate with the result of the previous operation. If not, the passed in parameter will be returned.

- **multiply:** In multiplication, multiple parameters can be passed for operation. When there is only one parameter, if it is a chain call, it will operate with the result of the previous operation. If not, the passed in parameter will be returned.

- **divide:** Division: multiple parameters can be passed for operation. When there is only one parameter, if it is a chain call, it will operate with the result of the previous operation. If not, the passed in parameter will be returned.

- **percent:** To calculate the percentage, you can pass a parameter or no parameter. When no parameter is passed, it must be a chain call, which will convert the previous result into a percentage. Otherwise, an error will be thrown. When a parameter is passed, it will be converted to percentage.

- **mod:** The remainder is the same as% in JavaScript, but this function will deal with the problem of inaccurate precision calculation

<hr>

## How to use

### install

```
npm i --save calc-tools
```

```js
// CommonJS
const { Calc } = require("calc-tools");

// ES6
import { Calc } from "calc-tools";
```

### use it

```js
// 1.import Calc
// CommonJS
const { Calc } = require("calc-tools");

// ES6
import { Calc } from "calc-tools";

const calc = new Calc();

// 0.1 + 0.2
const result = calc.add(0.1, 0.2); // 0.3

// (0.1 + 0.2) × 2
const result = calc.add(0.1, 0.2).multiply(2); // 0.6

// (1 - 0.6) × 100%
const result = calc.subtract(1, 0.6).percent(); // 40%

// 0.7 × 100%
const result = calc.percent(0.7) // 70%

// 9 % 4
const result = calc.mod(9, 4); // 1

// 2.On demand import method
const { add, subtract, multiply, divide, percent, mod } = require("calc-tools");

// 0.1 + 0.2
const result = add(0.1, 0.2) // 0.3

// 10 + 40 - 5
const result = calc.add(10, 40).subtract(5); // 45

// 10 × 2
const result = calc.multiply(10, 2); // 20
```