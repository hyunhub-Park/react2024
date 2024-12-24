// 1. 단락평가.
let a = false;
let b = true;

let funca = () =>
{
    console.log("funca");
    return false;
};

let funcb = () =>
    {
        console.log("funcb");
        return true;
    };
                    // flase 함수는 실행하지 않음.
console.log(funca()&&funcb());

// << false 조건 - primity type은 모두 들어감.>>
// let f1 = undefined; NUMBER
// let f2 = null;
// let f3 = 0;
// let f4 = -0;
// let f5 = NaN; 상수
// let f6 = ""; STRING
// let f7 = 0n;

// 실제 사용법.
// 함수선언, 표현식, 화살표함수.
function printName (person)
{
    const name = person && person.name;
    console.log(name || "person 값이 없음.");
}

function printName2 (person)
{
    if (typeof person === 'object')
    {
        console.log("객체");
    } else
    {
        console.log("객체가 아님.");
    }
}
console.log(typeof {});
// const name = person && person.name;
// console.log(name || "person 값이 없음.");

// printName2();

printName ({name : "kim"});

