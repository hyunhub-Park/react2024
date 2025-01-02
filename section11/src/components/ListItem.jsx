import './ListItem.css'
import { memo, useContext } from 'react';
// import { TodoContext } from '../App';   // session가져오는 것.
import { TodoDispatchContext } from '../App';

const ListItem = ({id, isDone, content, date})=>
{
    console.log(`ListItem ${id}`);

    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckBox = ()=>
    {
        onUpdate(id);
    };

    const onClickItem = ()=>
    {
        onDelete(id);
    };

    return (
        <div className='ListItem'>
            <input onChange={onChangeCheckBox} checked={isDone} type="checkbox"  />
            <p className='content'>{content}</p>
            <p className='date'>{new Date(date).toLocaleDateString()}</p>
            <button onClick={onClickItem}>delete</button>
        </div> 
    );
}

// ListItem안의 id, idDone...의 값이 바뀌면 바뀌는 것.
// 바뀌는 item의 값만 highlight가 발생해야 함.

export default memo(ListItem);
// 고차컴포넌트 (HOC : Higher order component)
// export default memo(ListItem, (preProps, nextProps) =>
// {
//     // memo는 이전 값과 현재 값을 비교함. 따라서 내용이 같으면 변동 (X).
//     // return false -> rerendering | return true -> rerendering (X).

//     if (preProps.id !== nextProps.id) return false; // 내용의 변화가 있으므로 rerendering.
//     if (preProps.isDone !== nextProps.isDone) return false;
//     if (preProps.content !== nextProps.content) return false;
//     if (preProps.date !== nextProps.date) return false;
//     // onUpdate, onDelete는 무조건 값이 바뀔 것이니 비교대상에 넣지 않음.
//     return true;
// });
// '✅함수✅'가 계속 rerendering되지 않도록 막아주는 -> useCallBack. -> <<함수 재생성 관련>>
// '✅함수✅'는 무조건 리렌더링 됨.
// 값은 바껴야 리렌더링. -> 부모가 바껴도 id, idDone ...은 변동 없음.