"use strict";
if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/Calc.min");
} else {
    module.exports = require("./dist/Calc");
}
