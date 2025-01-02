import './Editor.css'
import { useState, useRef } from 'react';

const Editor = ({onInsert})=>
{
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const inputRef = useRef();
    const inputRef2 = useRef();
    
    const onsubmit = ()=>
    {    
        if (title === '')
        {
            alert("제목을 입력해주세요.");
            inputRef.current.focus();
            return;
        }
        else if (content === '')
        {
            alert("내용을 입력해주세요.");
            inputRef2.current.focus();
            return;
        }

        onInsert(title, content);
        setTitle('');
        setContent('');
    };

    const onChangeContent = (e)=>
    {
        setContent(e.target.value);
    };

    const onChangeTitle = (e)=>
    {
        setTitle(e.target.value);
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
            <ul className='Editor_ul'>
                <li>　Title　<input value={title} onChange={onChangeTitle} ref={inputRef} type='text' onKeyDown={onKeyDown} /></li>
                <li>　　　　<textarea value={content} onChange={onChangeContent} ref={inputRef2} type='text' onKeyDown={onKeyDown} placeholder='please type the text...' rows="4" cols="30"></textarea></li>
                <button onClick={onsubmit}>Ok</button>
            </ul>
            {/* <textarea value={content} ref={inputRef} type='text' onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='please typing the text...'></textarea> */}
            {/* <input value={content} ref={inputRef} type='text' onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='please input the new to do...'/> */}
            {/* <button onClick={onsubmit}>add</button> */}
        </div>
    );
}

export default Editor;











// import './Editor.css'
// import { useState, useRef } from 'react';

// const Editor = ({onInsert})=>
// {
//     const [content, setContent] = useState('');
//     const inputRef = useRef();

//     const onsubmit = ()=>
//     {
//         if (content === '')
//         {
//             alert("내용을 입력해주세요.");
//             inputRef.current.focus();
//             return;
//         }

//         onInsert(content);
//         setContent('');
//     };

//     const onChangeContent = (e)=>
//     {
//         setContent(e.target.value);
//     };

//     const onKeyDown = (e)=>
//     {
//         // enter -> 13번. (엔터를 누르는 순간 13번이라는 키 값으로 들어오는 것.)
//         if (e.keyCode === 13)
//         {
//             // console.log(e);
//             onsubmit(); // enter를 눌렀을 때, 해당 함수가 실행됨.
//         }

//     };

//     return (
//         <div className="Editor">
//             <input value={content} ref={inputRef} type='text' onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='please input the new to do...'/>
//             <button onClick={onsubmit}>add</button>
//         </div>
//     );
// }

// export default Editor;