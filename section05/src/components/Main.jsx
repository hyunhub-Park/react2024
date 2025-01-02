import "./Main.css";


function Main ()
{
  const number = 9;
  const obj = { name: "KimSa-ram", age: 15, isLogin: true };

  return(
    <>
    {obj.isLogin === false?
    (<div className="logOut">로그아웃</div>)
    : (<div className="logIn">로그인</div>)
    }
    </>
  );
};

export default Main;



// funct
// return(<div>ion Main ()
// {
//   const number = 9;
//   const obj = { name: "KimSa-ram", age: 15};
// };

{/* <>
<h1>MAIN</h1>
<h2>삼항연산자</h2>
<h2>{number % 2 === 0? "짝수":"홀수"}</h2>
<h2>숫자표기 = {10}</h2>
<h2>number = {number}</h2>
<h2>[1, 2, 3] = {[1, 2, 3]}</h2>
<h2>true = {true}</h2>
<h2>undefined = {undefined}</h2>
<h2>null = {null}</h2>
<h2>obj.name = {obj.name}</h2>
<h2></h2>
</> */}

// function Main ()
// {
//   const number = 9;
//   const obj = { name: "KimSa-ram", age: 15, isLogin: false };
  
//   if (obj.isLogin === true)
//   {
//     return(<div className="logOut">{obj.name} 로그아웃</div>);
//   } else{
//     return(<div style={{backgroundColor: "bisque", border: "1px solid black", padding:"20px"}}>{obj.name} 로그인</div>)
//   }
// };