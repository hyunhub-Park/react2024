import './Editor.css'
import { useState, useRef } from 'react';

const Editor = ({onInsert})=>
{
    const [content, setContent] = useState('');
    const inputRef = useRef();

    const onsubmit = ()=>
    {
        if (content === '')
        {
            alert("내용을 입력해주세요.");
            inputRef.current.focus();
            return;
        }

        onInsert(content);
        setContent('');
    };

    const onChangeContent = (e)=>
    {
        setContent(e.target.value);
    };

    const onKeyDown = (e)=>
    {
        // enter -> 13번. (엔터를 누르는 순간 13번이라는 키 값으로 들어오는 것.)
        if (e.keyCode === 13)
        {
            // console.log(e);
            onsubmit(); // enter를 눌렀을 때, 해당 함수가 실행됨.
        }

    };

    return (
        <div className="Editor">
            <input value={content} ref={inputRef} type='text' onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='please input the new to do...'/>
            <button onClick={onsubmit}>add</button>
        </div>
    );
}

export default Editor;