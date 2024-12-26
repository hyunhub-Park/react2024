// math module. (계산을 위한 라이브러리, 함수.)
function add1(a, b)
{
    return a+b;
}

// let add2 = function (a, b)
// {
//     return a+b;
// }

// let add3 = (a, b)=> a+b;

function sub1(a, b)
{
    return a-b;
}

// 모듈을 외부로 보내기.
// module.exports = 
// {
//     // add1: add1, // key, value이름이 같을 경우, key값만 적어도 전달 가능.
//     // sub1: sub1,

//     add1,
//     sub1,
// };

// let addfunc = add1

// ESM 모듈방식으로 전환.
export
{
    add1, sub1
};