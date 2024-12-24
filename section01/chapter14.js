// 1. spread 연산자.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6, ...array1];

console.log(array2);

// 2. Spread 연산자(객체)
let obj1 =
{
    a: 1,
    b: 2,
};
   
   let obj2 =
{
   a: obj1.a,
   b: obj1.b,
    c: 3,
    d: 4,
};

let obj3 =
{
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj3);
   
// 3. Spread 연산자(함수매개변수)
function funcA(p1, p2, p3)
{
    console.log(p1, p2, p3);
}

funcA(...array1);

// 4. rest 매개변수
// rest는 나머지 , 나머지 매개변수
arr1 = [1, 2, 3];
function funcB(one, ...ds)
{
    console.log(ds); 
}

arr2 = [1, 2, 3];
funcB(...arr2);
// funcB(1, 2, 3);
