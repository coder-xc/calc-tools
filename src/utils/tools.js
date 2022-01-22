/**
 * calculate helper other methods
 * @date 2022-01-22
 * @author coderxc<1440407551@qq.com>
 */

/**
 * 处理百分比数据
 * @param {String} percentNumber 含百分比的数据
 * @returns 把百分号去掉后并除100的数据
 */
function handlePercentNumber(percentNumber) {
    return percentNumber.includes("%")
        ? handlerOperator(Number(percentNumber.replace(/%/g, "")), 100, "divide")
        : percentNumber;
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
        case "add": {
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
        case "subtract": {
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
        case "multiply": {
            result = (intNumber1 * intNumber2) / (number1Times * number2Times);
            isNeedDivideTimes = false;
            break;
        }
        case "divide": {
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
                    "multiply"
                );
            } else {
                result = (intNumber1 / intNumber2) * (number2Times / number1Times);
            }
            isNeedDivideTimes = false;
            break;
        }

        case "mod": {
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
 * 将浮点数转为整数，并返回一个对象，对象包含整数和倍数
 * 例：0.11 =>  { number：11, times: 100 }
 * @param {Number} floatNumber
 * @returns {Object} 返回整数和倍数的对象 { number：11, times: 100 }
 */
function parseToInteger(floatNumber) {
    if (String(floatNumber).includes("%")) {
        floatNumber = handlePercentNumber(floatNumber);
    }
    // 该数字是整数
    if (Number.isInteger(floatNumber)) return { number: floatNumber, times: 1 };
    // 将number类型转为字符串
    let numStr = `${floatNumber}`;
    if (numStr.indexOf("-") !== -1) {
        numStr = toNonExponential(Number(numStr));
    }
    // 得到小数位的长度
    const decimalLength = numStr.split(".")[1]?.length || 0;
    // 得到小数位的倍数：0.11 => 小数位长度2，倍数100
    const times = 10 ** decimalLength;
    // 算出整数值
    const number = Number(toNonExponential(Number((numStr * times).toFixed())));
    return { number, times };
}


/**
 * 把科学计数法的数据转成字符串显示的形式
 * eg: 0.00000001 Number类型的话 控制台输出就是 => 1e-8
 *     转为字符串的话就会输出 0.00000001
 * @param {Number} num 科学计数法的数字
 * @returns 处理好后的字符串数字
 */
function toNonExponential(num) {
    const m = num.toExponential().match(/\d(?:\.(\d+))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || "").length - m[2]));
}


module.exports = { handlePercentNumber, handlerOperator, parseToInteger, toNonExponential }