// 객체 순회 방법.
const person =
{
    name : "kim",
    age : 20,
    height : 178
};

console.log(person.name);
console.log(person["name"]);

// 객체에서 멤버변수 이름을 '배열'로 가져오기.(타입이 달라도 가능함.)
const personalKey = Object.keys(person);
console.log(personalKey);

const personalValue = Object.values(person);
console.log(personalValue);

// 반복문을 이용해 객체값에 있는 모든 원소값을 출력하기.
for (let i=0; i < personalKey.length; i++)
{
    let key = personalKey[i];
    console.log(person[personalKey[i]]);
}
