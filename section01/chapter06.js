// 1. 객체 생성. 객체리터럴.
let obj1 = new Object();
let obj2 = {};

// 2. 객체 프로퍼티(객체 속성)
// let person = {};
// person.name = "홍길동";

// let person =
// {
//     name:"홍길동",
//     age: 20,
//     hobby: "축구",
//     job: "웹개발자",
//     extra: {},
//     extra2: function (){},
//     islike: true,
// };

let person =
{
    name:"홍길동",
    age: 20,
    hobby: "축구",
    job: "웹개발자",
    extra: {},
    extra2: function ()
    {
        console.log("멤버함수");
    },
    islike: true,
};

// 멤버변수 새로 추가.
person.address="강남구 352";
console.log(person["address"]);

// 멤버변수 삭제.
delete person.address;
console.log(person["address"]);
console.log(`person["address"] =${person["address"]}`);

// 멤버변수 유무.
let flag = "name" in person;
console.log(`flag =${flag}`);


// console.log(person);
//console.log(person.name);

//console.log(person["extra2"]());