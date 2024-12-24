// forEach ( 함수(value, index, 객체배열) ) - JAVA SCRIPT
// forEach ( 객체 : 객체 배열 ) - JAVA

const array = [1, 2, 3, 4];
const array2 = [];

for (let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}

// forEach
console.log(array);
      // value, index, array
array.forEach((v, i, a)=>
{
    console.log(v);
    console.log(i);
    console.log(a);
    // return값 없음. void. (중괄호 생략 가능.)
});

array.forEach((v)=>array2.push(v*2));

console.log(array2);
console.log("----")
let arr3 =
[
    { name: "구길동" },
    { name: "홍길동" },
    { name: "김사람", age: 20 },
    { name: "최사람", age: 30 },
    { name: "최사람", age: 40 }
];

arr3.forEach((v, i, a) => {console.log(v)});
console.log("----")
// find. -> return값 받아야 함.
const findValue = arr3.find((v)=>
{
    return v.name === "최사람";
});

//console.log(findValue);

// filter
const findArray = arr3.filter((v)=>
{
    return v.name==="최사람";
});

//console.log(findArray);

// Map (요청하는 정보, 새롭게 배열로 포함시켜 리턴. /배열 or 객체를 새로 만드는 것.)
const nameArray = arr3.map((v)=>
{
    return v.name;
});
console.log(nameArray);

// findIndex
// arr3.lastIndexOf 뒤에서부터 찾아줌.
const findIdx = arr3.findIndex((v)=>
{
    return v.name==="최사람";
});
console.log(findIdx);

// includes
// const array = [1, 2, 3, 4];
const flag = array.includes(3);
console.log(flag);  // 값이 들어있으면 true, 아니면 false.

// indexOf -> 해당된 값이 아닌 '위치, 인덱스'.
const indexValue = array.indexOf(3);
console.log(indexValue);

// slice (마지막은 '앞'까지만 표현.)
const arraySample = [1, 2, 3, 4, 5, 6, 7];
const sliceArray = arraySample.slice(0,2);
console.log(sliceArray);

const sliceArray2 = arr3.slice(0,2);
console.log(sliceArray2);

// concat
let arr4 =
[
    { name: "구길동" },
    { name: "홍길동" },
];
let arr5 =
[
    { name: "김사람", age: 20 },
    { name: "최사람", age: 30 },
    { name: "최사람", age: 40 }
];

const returnArray = arr4.concat(arr5);
console.log(returnArray);

// sort
array.sort();

const array6 = [1, 10, 2, 20, 3, 30, 4, 21];
array6.sort((a,b) =>{return a-b})

console.log(array6);

// join
const arr7 = ["김동진","님","안녕하세요","반가워요"];
const joined = arr7.join("==");
console.log(joined);
console.log(arr7.join());

// for of 반복문.
for (let item of array6)
{
    console.log(item);
}

// for in
const person =
{
    name : "kim",
    age : 20,
    height : 178
};

for (let key in person)
{
 const value = person[key];
 console.log(key, value);
}