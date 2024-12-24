// 얕은 객체 복사.
const person =
{
    name : "kim",
    age : 20,
    height : 178
};

// 얕은 복사.
let person2 = person;
console.log(person2);
console.log(person);
person2.tall = 180;
console.log(person);    // 180
console.log(person2);   // 180

// 깊은 복사.
let person3 = {...person};
person3.tall = 190;
console.log(person);    // 180
console.log(person3);   // 180

// 객체비교. (주소 비교가 아닌 값 비교.)
console.log(person)
console.log(person2);
console.log(person3);

console.log(person === person2);
console.log(person === person3);
console.log(person2 === person3);

console.log(JSON.stringify(person2) === JSON.stringify(person));