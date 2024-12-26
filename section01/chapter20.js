// async new Promise() 사용 없이 비동기 처리 가능한 함수.
async function getData()
{
    return {name :"saram", id :"saram1234"};
}

console.log(getData());

// async, 일반함수가 들어있는 new Promise();
async function getData2()
{
    const promise = new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            resolve({ name :"saram", id :"saram1234"});
        }, 2000);
    });
    return promise;
}

console.log(getData2());

// 3. await -> async함수 내부에서만 사용 가능한 키워드.
// 비동기 함수 처리를 대기하는 역할.
async function  printData()
{
    getData().then ((value)=>
    {
        console.log(value);
    }).catch((error)=>
    {
        console.log(error);
    });
}

async function  printData2()
{
    const data = await getData()
    console.log(data);
}

printData2();