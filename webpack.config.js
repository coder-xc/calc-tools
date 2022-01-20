const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: {
        Calc: "./src/index.js",
        "Calc.min": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        library: "calc",
        libraryTarget: "umd",
        globalObject: "this",
    },
    mode: "none",
    optimization: {
        //这个字段很强大，我们做webpack的代码分割，摇数，tree shake等都会用到这个字段
        minimize: true, //开启插件
        minimizer: [
            new TerserPlugin({
                test: /\.min.js/ //提供一个正则，表示符合有min.js的就进行压缩
            })
        ]
    }
};
