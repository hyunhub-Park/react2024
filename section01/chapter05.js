// 콜백함수 - 자바 콜백함수(service, doGet, doPost)
// 1. 함수 선언식.

function checkMood(mood)
{
    if (mood === "good")
    {
        sing();
    } else if (mood === "cry")
    {
        cry();
    } else if  (mood === "dance")
    {
        dance();
    }
}

// callback처리.
function checkMood2(mood, goodCallback, badCallback)
{
    if (mood === "good")
    {
        goodCallback();
    } else
    {
        badCallback();
    }
}

//checkMood2("good", sing, cry);

// 2.
// checkMood2("good", function sing ()
// {
//     console.log("ACTION : sing")
// }, function cry ()
// {
//     console.log("ACTION : cry")
// });

// 3.
// checkMood2("good", function ()
// {
//     console.log("ACTION : sing")
// }, function ()
// {
//     console.log("ACTION : cry")
// });

// 4.
// checkMood2("good", ()=>
// {
//     console.log("ACTION : sing")
// }, ()=>
// {
//     console.log("ACTION : cry")
// });


function sing ()
{
    console.log("ACTION : sing")
}

function cry ()
{
    console.log("ACTION : cry")
}

function dance ()
{
    console.log("ACTION : dance")
}

// checkMood("dance");

// 콜백처리2
// function repeat ()
// {
//     for (let i = 0; i < 10; i++)
//     {
//         console.log(i + " ");
//     }
// }

function repeat (callback)
{
    for (let i = 0; i < 10; i++)
    {
        callback(i);
        // console.log(i + " ");
    }
}

//repeat(calculate);

// 1.
// function calculate (i)
// {
//     console.log(i);
// }

// 2.
// repeat(function calculate (i)
// {
//     console.log(i);
// })

// 3.
// repeat(function(i)
// {
//     console.log(i);
// })

// 4.
// repeat((i)=>
// {
//     console.log(i);
// })