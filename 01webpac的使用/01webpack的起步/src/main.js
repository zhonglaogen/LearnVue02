//1使用commonjs的模块化规范
const {sum, mul} = require('./mathUtils.js')

console.log(sum(1, 2));
console.log(mul(2, 3));

//2 es6的模块化规范
import {name, age, height} from "./info";

console.log(name);

// webpack ./src/main.js ./dist/bundle.js
// npm install webpack@3.6.0 -g