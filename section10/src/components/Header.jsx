import './Header.css'
import { memo } from 'react';

// Header부분의 리랜더링을 원치 않을 때.

const Header = ()=>
{
    console.log("Header Rerendering Test...")
    return (

        <div className='Header'>
        <h2>Today is</h2>
        <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

// Header부분은 최적화 됨.
// 부모가 Rerendering돼도 자신은 되지 않음.
// props/useState/useReducer가 바뀌면 rerender.
export default memo(Header);