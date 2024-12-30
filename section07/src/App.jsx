import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App()
{
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef(false);  // isMount.current=false인 것.
  
  // 마운트 될 때, 카운트 값 변경될 때 + input
  useEffect (()=>
  {
    if (isMount.current === false)
    {
      isMount.current = true;
      return;
    }
    // console.log(`(Mount, Update)count: ${count}`);
    console.log(`(Update)count: ${count} ${input}`);
  }, [count, input]);

  // useEffect (()=>
  //   {
  //     console.log(`(Mount, Update)count: ${count}`);
  
  //   }, []);

  //   useEffect (()=>
  //     {
  //       console.log(`(Mount, Update)count: ${count}`);
    
  //     });
  const onClickButton = (value)=>
  {
    setCount(count + value)
  }

  const onChangeInput = (e)=>
  {
    setInput(e.target.value);
  };

  return (
    <div className='app'>
     <h1>Counter App</h1>
     <section>
      <input type='text' value={input} onChange={onChangeInput}/>
     </section>
    <section className='viewer'>
     <Viewer count={count} />
     {count % 2 === 0 ? <Even/> : null}
    </section>

    <section className='controller'>
                  {/* props */}
     <Controller onClickButton={onClickButton} />
    </section>
    </div>
  );
};

export default App;