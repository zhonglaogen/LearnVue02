//1使用commonjs的模块化规范
const {sum, mul} = require('./js/mathUtils.js')

console.log(sum(1, 2));
console.log(mul(2, 3));

//2 es6的模块化规范
import {name, age, height} from "./js/info";

console.log(name);

// webpack ./src/main.js ./dist/bundle.js
