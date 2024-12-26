// 비동기 처리 작업 진행.
function task ()
{
    // 비동기 처리.
    setTimeout(() =>
    {
        console.log('hello');
    }, 3000)
}

function task2 (callback)
{
    setTimeout(callback,3000);
}

function callback ()
{
    console.log("hello2")
};

task2(()=>{console.log("hello2")});
// task2(callback);

// 비동기 처리 작업 진행.
// 함수 선언식은 호이스팅 발생.(작성은 두 번째 문단에 하지만, 실행은 제일 먼저.)
function add(a,b)
{
    setTimeout(() =>
    {
        const sum = a + b; 
        console.log(sum);
    }, 3000);
}

function add2 (a, b, callback2)
{
    setTimeout(callback2, 3000);
}

function add3 (a, b, callback3)
{
    setTimeout(() =>
    {
        const sum = a + b; 
        callback3(sum);
    }, 3000);
}


// add(10, 20)

/*add3 (10, 20, (sum) =>
{
    console.log(sum);

});*/

// function add2 (10, 20, (a, b) =>
// {
//     const sum = a+b;
//     console.log(sum);
// }); // NaN. 따라서 아래 함수 한 번 더 선언 필요.

function add2 (a, b, callback2)
{
    setTimeout(callback2, 3000);
}

// function add22 (a, b, callback2)
// {
//         setTimeout(()=>{
//             callback2(a,b);
//         }, 3000);
// }

function add22 (a, b, callback2)
{
        setTimeout(()=>
        {
            const sum = a+b;
            callback2(sum);
        }, 3000);
}

// add(1,2);

// add22 (10, 20, (a, b) =>
// {
//     const sum = a+b;
//     console.log(sum);
// });

add22 (10, 20, (sum) =>
{
    console.log(sum);
});