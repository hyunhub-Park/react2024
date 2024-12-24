// 1. 배열 생성.
let array1 = new Array();
let array2 = [];

// 2. 배열에 들어올 수 있는 멤버(기본타입 5가지, 객체타입 1(3종류)).
let arrayC = 
[
    1,
    1.0,
    true,
    "hello",
    undefined,
    null,
    {},
    [],
    ()=>{}
];

console.log(arrayC[6]);

// console.log(arrayC[8]()); -> 함수 호출(log의 return값이 method이기 때문에, 없는 경우 undefined출력).