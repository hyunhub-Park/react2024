// 1. promise pending 상태.
const promise = new Promise(()=>
{
    // 2초간 작업처리.
    setTimeout(()=>
    {
        console.log("Hello");
    }, 3000);
});

console.log(promise);   // 상태값이 출력됨. (Promise Result : undefined)

// 2. promise fulfilled 상태.
// const promise2 = new Promise((resolve, reject)=>
// {
//     // 2초간 작업처리.
//     setTimeout(()=>
//     {
//         console.log("Hello");
//         resolve("hello");
//     }, 3000);
// });

// setTimeout(()=>
// {
//     console.log(promise2);
// }, 4000);

// 3. promise reject 상태.
// const promise3 = new Promise((resolve, reject)=>
// {
//     // 2초간 작업처리.
//     setTimeout(()=>
//     {
//         console.log("Hello");
//         reject("reject...");
//     }, 3000);
// });
    
// setTimeout(()=>
// {
//     console.log(promise3);
// }, 4000);

// 4. promise 적용.
// const promise4 = new Promise((resolve, reject)=>
// {
//     // 2초간 작업처리.
//     // excutor 처리문.
//     // 숫자를 점검 후, NUMBER타입일 시 resolve, 아닐 시 reject.
//     setTimeout(()=>
//     {
//         const num = 3; // 동적 처리이기 때문에, ✅'실행'이 될 때 NUMBER 타입이 되는 것.
            
//         if (typeof num === 'number')
//         {
//             resolve(num + 10);
//         }else
//         {
//             reject(`${num}의 타입은 숫자가 아님.`)
//         }
//     }, 3000);   // 3초니까, 실행은 3초 상으로.
// });
        
// setTimeout(()=>
// {
//     console.log(promise4);
// }, 4000);

// 5. promise 실패/성공 처리법.
// const promise5 = new Promise((resolve, reject)=>
// {
//     // 2초간 작업처리.
//     // excutor 처리문.
//     // 숫자를 점검 후, NUMBER타입일 시 resolve, 아닐 시 reject.
//     setTimeout(()=>
//     {
//         const num = "3"; // 동적 처리이기 때문에, ✅'실행'이 될 때 NUMBER 타입이 되는 것.
                
//         if (typeof num === 'number')
//         {
//             resolve(num + 10);
//         }else
//         {
//             reject(`${num}의 타입은 숫자가 아님.`)
//         }
//     }, 3000);   // 3초니까, 실행은 3초 상으로.
// });

// 성공 시 실행문장(함수).
        // value = num 같은.
// promise5.then((value)=>
// {
//     console.log(value);
// });

// // 실패 시 실행문장(함수).
// promise5.catch((value)=>
// {
//     console.log(value);
// });

// 6. promise chain.
// promise5.then((value)=>
// {
//     console.log(value);
// }).catch((value)=>
// {
//     console.log(value);
// });

// 7. 함수를 통해 promise 실행하기.
// 선언적 함수.
// function add(num)
// {
//     const promise = new Promise((resolve, reject)=>
//     {
//         setTimeout(()=>
//         {
//             if (typeof num === 'number')
//             {
//                     resolve(num + 10);
//             }else
//             {
//                 reject(`${num}의 타입은 숫자가 아님.`)
//             }
//         }, 3000);   // 3초니까, 실행은 3초 상으로.
//     });
//     // 지역변수이기 때문에 return.
//     return promise;
// }

// const promise6 = add(10);

// promise6.then((value)=>
// {
//     console.log(value);
// }).catch((value)=>
// {
//     console.log(value);
// });

// 8. 함수를 통해 promise 실행. callback 총 2번 처리.
function add(num)
{
    const promise = new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            if (typeof num === 'number')
            {
                    resolve(num + 10);
            }else
            {
                reject(`${num}의 타입은 숫자가 아님.`)
            }
        }, 3000);   // 3초니까, 실행은 3초 상으로.
    });
    // 지역변수이기 때문에 return.
    return promise;
}

// const promise7 = add(10);

// promise7.then((value)=>
// {
//     console.log("p7 : " + value);
//     const promise8 = add(20);
//     promise8.then((result)=>
//     {
//         console.log("p8 : " + result);

//     }).catch((result)=>
//     {
//         console.log("p8 실패 : " + result);
//     });
// }).catch((value)=>
// {
//     console.log("p7 실패 : " + value);
// });

// 해결법.
const promise7 = add(10);

// promise7.then((value)=>
// {
//     console.log("p7 : " + value);
//     return add(20);
 
//     // 아래 문장 -> return에 대한 then을 받는 것.
// }).then((result)=>
// {
//     console.log("p8 : " + result);

// }).catch((value)=>
// {
//     console.log("p7 or 8 : " + value);
// });

// promise7.then((value)=>
// {
//     console.log("p7 : " + value);
//     return add(20);
     
// // 아래 문장 -> return에 대한 then을 받는 것.
// }).then((result)=>
// {
//     console.log("p8 : " + result);
//     return add(30);
    
// }).then ((data)=>
// {
//     console.log("p9 : " + data)
// }).catch((error)=>
// {
//     console.log("p7-9 : " + error);
// });

// 음식주문 promise.
// function orderFood (food, callback)
// {
//     // console.log(food + " 주문");
//     setTimeout(() =>
//     {
//         console.log(food + " 주문");
//         callback(food);
//     }, 3000);
// }

function orderFood2(food)
{
    const promise = new Promise((resolve, reject)=>
    {
        console.log(food + " 주문");
        setTimeout(()=>
        {
            let flag = true;

            if (flag === true)
            {
                resolve(food + " 완료.(240)")


            } else
            {
                reject(food + " 실패.(245)")

            }
            // callback(food); if문 자체가 callback이기 때문에 주석.
        }, 3000);
    });
    return promise;
}

// const promise9 = orderFood2("떡볶이");
// // orderFood2("떡볶이").then도 가능함.
// promise9.then((value)=>
// {
//     console.log(value);
// }).catch((value)=>
// {
//     console.log(value);
// });


function coolFood2(food)
{
    const promise = new Promise((resolve, reject)=>
    {
        console.log(food + " 주문");
        setTimeout(()=>
        {
            let flag = true;

            if (flag === true)
            {
                resolve(food + " 차갑게 변경 완료.(240)")


            } else
            {
                reject(food + " 차갑게 변경 실패.(245)")

            }
            // callback(food); if문 자체가 callback이기 때문에 주석.
        }, 3000);
    });
    return promise;
}

// const promise10 = coolFood2("떡볶이");
// promise10.then((value)=>
// {
//     console.log(value);
// }).catch((value)=>
// {
//     console.log(value);
// });

function freezeFood2(food)
{
    const promise = new Promise((resolve, reject)=>
    {
        console.log(food + " 주문");
        setTimeout(()=>
        {
            let flag = true;

            if (flag === true)
            {
                resolve(food + " 냉동 변경 완료.(240)")


            } else
            {
                reject(food + " 냉동 변경 실패.(245)")

            }
            // callback(food); if문 자체가 callback이기 때문에 주석.
        }, 3000);
    });
    return promise;
}

// freezeFood2("떡볶이").then((value)=>
// {
//     console.log(value);
// }).catch((value)=>
// {
//     console.log(value);
// });

// 2단계 떡볶이 주문 -> 차갑게 변경.
// orderFood2("떡볶이")
// .then((value)=>
// {
//     console.log(value);
//     return coolFood2("떡볶이");
// }).then((value)=>
// {
//   console.log(value);  
// }).catch((error)=>
// {
//     console.log(error);
// });

// 3단계 떡볶이 주문 -> 차갑게 변경 -> 냉동 주문.
orderFood2("떡볶이")
.then((value)=>
{
    console.log(value);
    return coolFood2("떡볶이");
}).then((value)=>
{
    console.log(value);
    return freezeFood2("떡볶이");
}).then((value)=>
{
  console.log(value);  
}).catch((error)=>
{
    console.log(error);
});
