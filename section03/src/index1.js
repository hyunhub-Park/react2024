// console.log("Hello node2.js");

// 외부에 있는 모듈(라이브러리)을 가져온다. (import)
// const moduleData = require('./math');
// const {add1, sub1} = require('./math');
import {add1, sub1} from'./math.js';    // ESM 모듈방식. 구조분해 할당.
// let value = console.log(moduleData);
// let value = add1(10, 20);
//moduleData.add1(10, 20);
// console.log(value);
// console.log(moduleData.sub1(10, 20));
console.log(add1(20, 20));
console.log(sub1(40, 20));