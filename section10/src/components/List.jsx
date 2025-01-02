import './List.css'
import ListItem from './ListItem';
import { useState } from 'react';
import { useMemo } from 'react';

// const List = (props)로 해도 되는데, 구조분해 할당으로(하단).
const List = ({todos, onUpdate, onDelete})=>
{
    const [search, setSearch] = useState('');
    const onChangeSearch = (e)=>
    {
        // 여기에 값을 저장해야 리랜더링이 진행됨.
        setSearch(e.target.value);
    };

    // useState에 해당되는 서치 내용 변경 시, List 리랜더링 발생.
    // 해당 내용 수행 시, 필터링 진행.
    const getFilterItem = ()=>
    {
        if (search === '')
        {
            return todos;
        }

        return todos.filter((item)=>
        {
            // App의 mockData -> item의 content안에 해당 search값이 존재하는가?
            return item.content.toLowerCase().includes(search.toLocaleLowerCase());
        });
    };

    const filterItem = getFilterItem();

    // 랜더링 발생 시, 전체 갯수 | 업무 완료 갯수 | 업무 미완료 갯수 연산.
    // const getAnalyzeData = ()=>
    // {
    //     console.log("getAnalyzeData 호출");
    //     const totalCount = todos.length;
    //     const todosDone = todos.filter((item)=>
    //     {
    //         // 배열이 전달함.
    //         return item.isDone === true;
    //     });

    //     const doneCount = todosDone.length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {totalCount, doneCount, notDoneCount,}
    // };

    // const {totalCount, doneCount, notDoneCount} = getAnalyzeData();

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>
    {
        console.log("getAnalyzeData 호출");
        const totalCount = todos.length;

        // 시간이 많이 소요됨.
        const todosDone = todos.filter((item)=>
        {
            // 배열이 전달함.
            return item.isDone === true;
        });

        const doneCount = todosDone.length;
        const notDoneCount = totalCount - doneCount;

        return {totalCount, doneCount, notDoneCount,};
    }, [todos]); // 딱 한 번만 실행.







    return (
        <div className='List'>
        <h4>To do list</h4>
        <div>
            <p>total : {totalCount}</p>
            <p>doneCount : {doneCount}</p>
            <p>notDoneCount : {notDoneCount}</p>
        </div>

        <input value={search} type='text' onChange={onChangeSearch} placeholder='please input the keywords...'/>
        <div className='todos_wrapper'>
            
            {/* object, index, array */}
            {filterItem.map((item)=>
            { //todos.map(item)
                {/*map인 경우, 유일한 key값 무조건 존재해야 함./ 원래는 key={item.id} id={item.id} isDone={idDone}...*/}
                return <ListItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
            })}
        </div>
        </div>
    );
}

export default List;