import { useState } from "react";

// Customizing Hooks.
function useInput ()
{
    const [name, setName] = useState('');

    const onChange = (e)=>
    {
        // useState값 지정.
        setName(e.target.value);
    };
         // 이름, 함수.
    return [name, onChange];
}

const HookExam = ()=>
{
    // 항상 내부에서 선언해야 함.  // 초기값.
    // const [name, setName] = useState('');
    const [name, setName] = useInput();
    const [name2, setName2] = useInput();
    
    // const onChange = (e)=>
    // {
    //     // useState값 지정.
    //     setName(e.target.value);
    // }

    return (
        <>
            <h1>HookExam</h1>
            <div>
                <input type="text" value={name} /*onChange={onChange}*/ onChange={setName}/>
            </div>
            <div>
                <input type="text" value={name2} /*onChange={onChange}*/ onChange={setName2}/>
            </div>
        </>
    );
};

export default HookExam;