// 1. 비동기 처리방식.
console.log("1");

// 2. 2번 실행 시 소요시간 : 3초
// 멀티쓰레드 비동기식 방식.
// console.log("2");
let id = setTimeout(() =>
{
    console.log("2");

}, 3000);



console.log("3");