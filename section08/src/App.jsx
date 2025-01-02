import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState } from 'react';
import { useRef } from 'react';


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

function App()
{
  const [todos, setTodos] = useState(mockData); // todos에 객체 배열이 저장되어있는 것.
  const idRef = useRef(3);

  // todos에 추가 할 객체(record)를 처리할 함수 handler함수 선언.
  const onInsert = (data) =>
  {
    const newTodo = {
      id: idRef.current++,  // id가 중복되면 안되기 때문에.
      idDone: false,
      content: data,
      date: new Date().getTime(),
    };

    // 위의 3개 객체를 모두 만들어줘야 함.
    setTodos([newTodo, ...todos]);
  };
  
  // todos에 수정 할 객체(record)를 처리할 함수 handler함수 선언.
  const onUpdate = (targetId)=>
  {
    setTodos(
      todos.map((item) =>
      {
        return item.id === targetId ? {...item, idDone: !item.idDone} : item
      })
    );
  };

  // todos에 삭제 할 객체(record)를 처리할 함수 handler함수 선언.
  const onDelete = (targetId)=>
  {
    setTodos(todos.filter((todos)=>
    {
      return todos.id !== targetId
    }));
  };

  return (
    <>
    <div className="App">
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
