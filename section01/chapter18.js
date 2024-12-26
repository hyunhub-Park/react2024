// 1단계. (음식 주문)
function orderFood (food, callback)
{
    // console.log(food + " 주문");
    setTimeout(() =>
    {
        console.log(food + " 주문");
        callback(food);
    }, 3000);
}


// 1단계. (주문 완료 후, 추가로 음식을 차게 추가 주문.)
function coolFood (food, callback)
{
    console.log(food + " 메뉴를 차갑게 변경하겠습니다.");
    setTimeout(()=>
    {
        callback(food);
    }, 3000);
}

function freezeFood (food, callback)
{
    console.log(food + " 냉동 주문");
    setTimeout(()=>
    {
        callback(food);
    }, 3000);
}

// 2단계. (음식 주문 후, 다시 음식을 차게 주문.)
orderFood("떡볶이",()=>{});

coolFood("떡볶이", (food) =>
{
    console.log(food + " 제작 완료.");
    // let food2 = "뜨거운 떡볶이";
    let food2 = `뜨거운 ${food}`;
    coolFood(food2, (food2)=> {
        console.log(food + " 차갑게 변경.")
    });
});

// 3단계. (음식 주문 후, 다시 음식을 차게 주문 후, 냉동 주문.)
coolFood("떡볶이", (food) =>
{
    console.log(food + " 제작 완료.");
    // let food2 = "뜨거운 떡볶이";
    let food2 = `뜨거운 ${food}`;
    coolFood(food2, (food2)=>
    {
        console.log(food + " 차갑게 변경.");

        let food3 = `차가운 ${food2}`;
        freezeFood(food3, (food3)=>
        {
            console.log(food3 + " 냉동 완료.")
        });
    });
});

orderFood("떡볶이", (food)=>
{
        console.log(food + "주문 완료.");
});

freezeFood("떡볶이", (food)=>
{
    console.log(food + "냉동으로 변경 완료.")
});

