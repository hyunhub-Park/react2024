import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';
import { useCallback, useState } from 'react';
import { useRef, useReducer } from 'react';




// 가상의 데이터(Mount : 서버로부터 데이터를 가지고 옴.)
// result set -> mount되면 AJAX를 통해 JSON파일 가져올 것.(oracle server.)
const mockData = [
  {
    // checkbox, study hard, data -> 저장항목 총 3개.
    id: 0,  // primary key가 없으므로, sequence를 받을 id key.
    idDone: false,
    content: 'REACT Studying',
    date: new Date().getTime(),
  },
  {
    // checkbox, study hard, data -> 저장항목 총 3개.
    id: 1,  // primary key가 없으므로, sequence를 받을 id key.
    idDone: false,
    content: 'SpringBoot Studying',
    date: new Date().getTime(),
  },
  {
    // checkbox, study hard, data -> 저장항목 총 3개.
    id: 2,  // primary key가 없으므로, sequence를 받을 id key.
    idDone: false,
    content: 'Java Studying',
    date: new Date().getTime(),
  },
];

function reducer(state, action)
{
  switch (action.type)
  {
    case "INSERT": return [action.data, ...state];
    case "UPDATE": return state.map((item)=>
      {return item.id === action.targetId ? {...item, isDone: !item.isDone} : item});

    case "DELETE": return state.filter((item)=>
      {
        // targetId: targetId의 앞 targetId.
        return item.id !== action.targetId
      });

    default : return state;
  }
}

function App()
{
  // const [todos, setTodos] = useState(mockData); // todos에 객체 배열이 저장되어있는 것.
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3);

  // todos에 추가 할 객체(record)를 처리할 함수 handler함수 선언.
  // const onInsert = (data) =>
  // {
  //   dispatch(
  //   {
  //     type: "INSERT",
  //     data: {
  //       id: idRef.current++,  // id가 중복되면 안되기 때문에.
  //       idDone: false,
  //       content: data,
  //       date: new Date().getTime(),        
  //     }
  //   });

    // todos에 추가 할 객체(record)를 처리할 함수 handler함수 선언
    const onInsert = useCallback((data)=>
    {
      dispatch(
          {
            type: "INSERT",
            data: {
              id: idRef.current++,  // id가 중복되면 안되기 때문에.
              idDone: false,
              content: data,
              date: new Date().getTime(),        
            }
     
    }, []);
    
    const newTodo = {
      id: idRef.current++,  // id가 중복되면 안되기 때문에.
      idDone: false,
      content: data,
      date: new Date().getTime(),
    };
  });
  
  // todos에 수정 할 객체(record)를 처리할 함수 handler함수 선언.
  // const onUpdate = (targetId)=>
  // {
  //   dispatch(
  //   {
  //     type: "UPDATE",
  //     targetId: targetId
  //   });
  // };

  const onUpdate = useCallback((targetId)=>
  {
    dispatch(
      {
        type: "UPDATE",
        targetId: targetId
      });

  }, []);

  // todos에 삭제 할 객체(record)를 처리할 함수 handler함수 선언.
  // const onDelete = (targetId)=>
  // {
  //   dispatch(
  //   {
  //     type: "DELETE",
  //     // data: targetId,로 해도 됨.
  //     targetId: targetId,
  //   });
  // };

  const onDelete = useCallback((targetId)=>
  {
    dispatch(
      {
        type: "DELETE",
        // data: targetId,로 해도 됨.
        targetId: targetId,
      });


  }, []);

  return (
    <>
    <div className="App">
      <Exam />
      <Header />

              {/* props 전달. */}
      <Editor onInsert={onInsert}/>
        {/* state를 props로 전달. */}
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
    </>
  )
}

export default App
