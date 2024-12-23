//1. 변수

// let age = 10;
// age=30;
// age="hello";

// 동일 변수명 선언이 가능하기때문에 사용 위험.
var age = 100;
var age = 30;

// 2. 상수
const A="test";
// A="testB";  // 출력 안됨. 상수는 한 번만.

// 3. 변수 명명규칙.(자바-카멜/숫자는 뒤에, 특수문자-$, _허용.)

// 4. 예약어 사용 금지.

// 5. 카멜표기법/상수는 대문자/가독성 고려.

let undefinedValue;
console.log(undefinedValue);