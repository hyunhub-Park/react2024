import './App.css'
// import { useState } from 'react';
// import Bulb from './components/Bulb';
// import Counter from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';


function App ()
{
  console.log('App');
  return(
    <>
    {/* <Register/> */}
    <HookExam/>
    </>

  );
};

// function Bulb ()
// {
//   // console.log(light);
//   const [light, setLight] = useState('OFF');
//   console.log(`Bulb ${light}`);

//   return(
//     <div> 
//       {light === 'ON' ? ( 
//         <h1 style={{ backgroundColor: 'orange' }}>ON</h1> 
//       ) : ( 
//         <h1 style={{ backgroundColor: 'gray' }}>OFF</h1> 
//       )} 
//        <button onClick={() => { setLight(light === 'ON' ? 'OFF' : 'ON'); }} >
//           {light === 'ON' ? '끄기' : '켜기'}
//         </button>
//     </div>
//   );
// }

// function Bulb ({light})
// {
//   // console.log(light);
//   console.log(`Bulb ${light}`);

//   return(
//     <div> 
//       {light === 'ON' ? ( 
//         <h1 style={{ backgroundColor: 'orange' }}>ON</h1> 
//       ) : ( 
//         <h1 style={{ backgroundColor: 'gray' }}>OFF</h1> 
//       )} 
//     </div>
//   );
// }

// const Counter = ()=>
// {
//   const [count, setCount] = useState(0);
//   console.log(`counter ${count}`)
//   return(
//   <>
//     <div> 
//     <h1>{count}</h1> 
//     <button onClick={() => { setCount(count + 1); }} >+</button>
//     </div>
//   </>
//   );
// };





// function App ()
// {
//   const [count, setCount] = useState(0);
//   const [light, setLight] = useState('OFF');

//   // 이벤트 처리를 위한 화살표 함수.
//   const buttonClickEvent = (e)=>
//   { // useState를 사용 안하면, relandering이 안됨.
//     // count2 += 1; -> 직접 넣는건 안됨.
//     setCount(count+1);
//     console.log(count);
//   }

//   return (
//     <>
//       <div>
//         <h1>{light}</h1>
//         <button onClick={()=>{setLight(light==='OFF'?'ON':'OFF')}}>{light === 'ON'?("끄기"):("켜기")} </button>

//       </div>
//       <div>
//         <h1>{count}</h1>
//         <button onClick={buttonClickEvent}>+</button>

//       </div>
//     </>

//   );
// };



// function App ()
// {
//   const [count, serCount] = useState(0);
//   // const [light, serLight] = useState('off');
//   let count2 = 5;

//   // 이벤트 처리를 위한 화살표 함수.
//   const buttonClickEvent = (e)=>
//   { // useState를 사용 안하면, relandering이 안됨.
//     count2 += 1;
//     console.log(count2);
//   }

//   return (
//     <>
//       <div>
//         <h1>{count2}</h1>
//             {/* 'e'작성 안하면 undefined */}
//         {/* <button onClick={()=> serCount(count+1)}>+</button> */}
//         {/* <button onClick={()=> serCount(count+1)}>+</button> */}
//         <button onClick={buttonClickEvent}>+</button>

//       </div>
//     </>

//   );
// };

// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Button from './components/Button';

// function App()
// {
//   const buttonProps = {
//     text: '타이틀',
//     color: 'red',
//     size: 10,
//   }

//   return (
//     <>
//       <Button {...buttonProps} />
//       <Button text={'카페'} />
//       <Button text={'블로그'} color={'pink'}></Button>
//     </>
//   );
// };

// export function Header ()
// {
//   return(
//     <header>
//       <h1>HEADER</h1>
//     </header>
//   );
// };


// function App() 
// { {/**부모(function App()) 컴포넌트*/}
//   return (
//     <>
//     {/* 컴포넌트를 삽입하고 싶을 시, */}
//     <Header />  {/**자식 컴포넌트*/}
//       <h1>REACT</h1>

//     <Main />

//     <Footer /> 
//     <Button text={'메일'} color={'pink'}/>
//     <Button text={'메일'} color={'red'} />
//     <Button text={''}/>
//     </>
//   );
// };

export default App;