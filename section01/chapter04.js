// 1. 함수 선언식.
function getArea(width, height)
{
    return width*height;
}

let area1=getArea(10, 20);
console.log(area1);

// 함수
// let area1=getArea(10, 20);
// console.log(area1),

// function getArea(width, height)
// {
//     return width*height;
// }

// 6 함수 표현식 -> 자동으로 호이스팅 발생X.
function getArea(width,height)
{
    let area1=width*height;
    return area;
}

let area2=getArea(10, 30) ;
console.log(area1);

let getArea=(width, height) => width*height;

let area3=getArea(10,50);
console.log(area1);


function getArea()
{
    // 중첩 함수.
    function anotherFunction ()
    {
        console.log("anotherFunction 입니다.")
    }
    anotherFunction();
    return width*height;
}


