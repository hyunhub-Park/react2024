// 1. 양수, 음수 무한대
let infinityValue = Infinity;
let minInfinityValue = -Infinity;
let notAnumber = NaN;
let nanNo = 1*"test";
let nanYes = 1*"10";

let nameYes = "김" + "사람";
let nameNo = "김" * "사람";

// templateLiteral.
let name = "김사람";
let area = "강남";
let textResult1 = "소개합니다. " + name + area;
let textResult2 = `소개합니다. ${name}${area}`;

// 형변환 Number, parseInt.
// let str = "10";
// console.log(str+10); => 1010

// let str = "10";
// console.log(Number(str)+10); => 20

let str = "10개"
// console.log(parseInt(str)+10); => 20, 숫자가 문자의 '앞'에 있는 경우만 가능.
// console.log(Number(str)+10); => NaN

// 산술연산자 주의점.
let num1 = 1;
let num2 = 2;

// console.log(num1/num2); // 가장 큰 수로 반환해줌.


// 비교연산자 (===, !==), 타입과 값을 함께 비교함.

// console.log(1=="1"); => true
// console.log(1==="1"); => false

// typeof 연산자.
let num3=10;
// let num4=null; => null이지만 typeof로 출력할 시, Object로 인식함.

// 병합연산자 (??)
let num5;
num5=num5 ?? 10;    // 변수가 undefined이면 다른 값을 줌.
                    // num5가 현재 undefined이므로, 10이 찍힘.
                    // null이어도 10이 찍힘.
                    // num5=20;으로 선언되었으면, 20이 찍힘.

// if (num5 === null || num5 === undefined)
// {
//     num5=무엇인가;
// }
console.log(num5);