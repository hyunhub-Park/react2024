// 1. push 배열에 요소 첨가.
let array1 = [1, 2, 3];
array1.push(5);
console.log(array1);

// 2. pop 배열의 맨 뒤에 있는 요소를 제거하고, 반환.
let array2 = [1, 2, 3];
let value = array2.pop();
console.log(value);
console.log(array2);

// 3. shift (pop과 기능이 동일함. 위치의 앞에서 뺌.)
let array3 = [1, 2, 3];
let value2 = array3.shift();
console.log(value2);
console.log(array3);

// 4. unshift
let array4 = [1, 2, 3];
let value3 = array4.unshift(5, 6);
console.log(value3);
console.log(array4);

// 5. toSorted()
let array5 = ["a", "c", "b"];
const sorted = array5.toSorted();
console.log(array5);
console.log(sorted);
