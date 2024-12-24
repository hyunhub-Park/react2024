// 1. Date객체 생성.
let dataOne = new Date();
console.log(dataOne);

let dateTwo = new Date(1997, 1, 1, 23, 57, 58);
console.log(dateTwo);

// 2. timeStamp -> 시간 / 숫자로 표현 1970.1.1.0, 0, 0초 = 0
// 1970.1.1.0, 0 , 2초 = 2000
let dateThree = new Date();
let ts1 = dateThree.getTime();

console.log(dateThree);
console.log(ts1);

let dateFour = new Date(ts1 + 10000);
console.log(dateFour);  // 10초.

// 3. 시간 추출.
let dateFive = new Date();
let year = dateFive.getFullYear();
let month = dateFive.getMonth()+1;
let date = dateFive.getDate();
let hour = dateFive.getHours();
let minute = dateFive.getMinutes();
let second = dateFive.getSeconds();
let day = dateFive.getDay();
if (day === 2)
{
    day = "화요일";
}
let dayP = day;
console.log(year, month, date, hour, minute, second, dayP);

// 4. 시간 설정.
let dateSix = new Date();
dateSix.setFullYear(2023);
dateSix.setMonth(12-1);
dateSix.setDate(24);
dateSix.setHours(15);
dateSix.setMinutes(13);
dateSix.setSeconds(10);

console.log(dateSix);
console.log(dateSix.getDay());

// 5. 날짜만 출력.
console.log(dateSix.toDateString());