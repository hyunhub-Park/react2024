import './App.css'
import Viewer from './components/Viewer';
import { useState } from 'react';

function App()
{
  const [xValue, setXvalue] = useState(1);
  const [yVlaue, setYvalue] = useState(1);
  const [count, setCount] = useState(1);
  
  const add = ()=>
  {
    setCount(parseInt(xValue) + parseInt(yVlaue))
  }
  const sub = ()=>
  {
    setCount(parseInt(xValue) - parseInt(yVlaue))
  }
  const multi = ()=>
  {
    setCount(parseInt(xValue) * parseInt(yVlaue))
  }
  const div = ()=>
  {
    setCount(parseInt(xValue) / parseInt(yVlaue))
  }

  const onChangeXvalue = (e)=>
  {
    setXvalue(e.target.value);
  }
  
  const onChangeYvalue = (e)=>
  {
    setYvalue(e.target.value);
  }

  return (
    <div className='app' align='center'>
     <h1 align='center'>Calculator</h1>
    <section className='viewer'>
     <Viewer count={count} />
    </section>

    <section className='controller'>
                  {/* props */}
      <input type='text' name='xValue' value={xValue} onChange={onChangeXvalue}/>
      <input type='text' name='yValue' value={yVlaue} onChange={onChangeYvalue}/>
    </section>
    <button type='button' onClick={add}>+</button>
    <button type='button' onClick={sub}>-</button>
    <button type='button' onClick={multi}>*</button>
    <button type='button' onClick={div}>/</button>
    </div>

  )
}
// function App()
// {
//   const [count, setCount] = useState(1);
  
//   const onClickButton = (value)=>
//   {
//     setCount(count + value)
//   }

//   const onClickButton2 = (value)=>
//   {
//     setCount(count * value)
//   }

//   const onClickButton3 = (value)=>
//   {
//     setCount(count / value)
//   }

//   return (
//     <div className='app'>
//      <h1>Counter App</h1>
//     <section className='viewer'>
//      <Viewer count={count} />
//     </section>

//     <section className='controller'>
//                   {/* props */}
//      <Controller onClickButton={onClickButton}/>
//      <ControllerC onClickButton={onClickButton2}/>
//      <ControllerCC onClickButton={onClickButton3}/>
//     </section>
//     </div>
//   )
// }

export default App;