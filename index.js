"use strict";
if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/calc.min");
} else {
    module.exports = require("./dist/calc");
}
