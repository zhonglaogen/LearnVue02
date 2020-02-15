//1使用commonjs的模块化规范
const {sum, mul} = require('./js/mathUtils.js')

console.log(sum(1, 2));
console.log(mul(2, 3));

//2 es6的模块化规范
import {name, age, height} from "./js/info";

console.log(name);

// webpack ./src/main.js ./dist/bundle.js

//依赖css文件
require('./css/normal.css');
//npm install --save-dev css-loader 识别css文件

require('./css/special.less')
//npm install --save-dev less-loader less 识别less文件,  less负责转换less文件
document.writeln('dsadsadfa')

//npm install --save-dev url-loader@1.1.2识别图片

//npm install --save-dev file-loader@3.0.1识别大于limit图片，无需配置

///npm install --save-dev babel-loader@7 babel-core babel-preset-es2015 转换es6到es5  babel-core 转换工具 babel-preset-es2015转换es5