import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { createContext, useEffect, useReducer, useRef, useState } from "react";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 읽기를 상세히 조회하는 Diary 페이지 


function reducer(state, action)
{
  let nextState;
  switch(action.type)
  {
    case "INIT": return action.data;

    case "CREATE": 
    nextState =  [action.data, ...state];
      break;

    case "UPDATE": 
    nextState =  state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
      break;

    case "DELETE": 
    nextState =  state.filter((item)=> String(item.id) !== String(action.id));
      break;

      default: return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState))
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App()
{
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const nav = useNavigate();  // 상위에 선언하지 않으면 오류가 남. 아래 onClickButton의 nav.

  useEffect(()=>
  {
    const storedData = localStorage.getItem("diary")

    if(!storedData)
    {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData))
    {
      setIsLoading(false);
        return;
    }

    let maxId = 0;
    parsedData.forEach(element =>
    {
      if(Number(element.id) > maxId)
      {
        maxId = Number(element.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch(
    {
      type:"INIT",
      data: parsedData
    })
    setIsLoading(false);
  }, []);

  // 새 일기 쓰기.
  const onCreate = (createdDate, emotionId, content)=>
  {
    dispatch (
    {
      type: "CREATE",
      data:
      {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  };

  // 수정하기.
  const onUpdate = (id, createdDate, emotionId, content) =>
  {
    dispatch (
    {
      type: "UPDATE",
      data:
      {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 삭제하기.
  const onDelete = (id) =>
  {
    dispatch (
    {
      type: "DELETE",
      id
    });
  }

  if (isLoading)
  {
    return <div>Loading the data...</div>
  }

  // Query String Event로 페이지 요청하기.
  const onClickButton = ()=>
  {
    nav('/new?value=hello2');
  };

  return (
    <>
      {/* 동적 라우팅 실습. (Query String) */}
      <Link to="/new?value=hello">NEW(Query)</Link>
      {/* <Link to="/diary/1">NEW(Query)</Link> */}
      <button onClick={onClickButton}>쿼리스트링 이벤트로 페이지 요청하기.</button>

      <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={
      {
        onCreate,
        onUpdate,
        onDelete
      }}>
      <Routes> 
        <Route path="/" element={<Home/>} />
        {/* <Route path="/new" element={<New />} /> */}
        <Route path="/new/*" element={<New />} />
        <Route path="/diary/:id" element={<Diary />}/>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />}/>
      </Routes>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

// export default App;// import "./App.css";


// import { useState } from "react";
// import "./default.css";

// function App() {

// const [userList, setUserList] = useState([

// { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },

// { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },

// { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },

// ]);

// const [name, setName] = useState("");

// const [age, setAge] = useState("");

// const [gender, setGender] = useState("");

// const [phone, setPhone] = useState("");

// const registUser = () => {

// const user = { name, age, gender, phone };

// userList.push(user);

// setUserList([...userList]);

// setName("");

// setAge("");

// setGender("");

// setPhone("");

// };

// return (

// <div className="App">

// <h1>회원 정보 출력</h1>

// <hr></hr>

// <table className="member_tbl">

// <thead>

// <tr>

// <th>이름</th>

// <th>나이</th>

// <th>성별</th>

// <th>전화번호</th>

// </tr>

// </thead>

// <tbody>

// {userList.map((item, index) => {

// <User key={"user" + index} item={item} />;

// })}

// </tbody>

// </table>

// <div className="regist-wrap">

// <h3>회원 정보 등록</h3>

// <hr></hr>

// <InputWrap text="이름" data={name} setData={setName} />

// <InputWrap text="나이" data={age} setData={setAge} />

// <InputWrap text="성별" data={gender} setData={setGender} />

// <InputWrap text="전화번호" data={phone} setData={setPhone} />

// <button onClick={registUser}>회원등록</button>

// </div>

// </div>

// );

// }

// const User = (props) => {

// const user = props.user;

// return (

// <tr>

// <td>{user.name}</td>

// <td>{user.age}</td>

// <td>{user.gender}</td>

// <td>{user.phone}</td>

// </tr>

// );

// };

// const InputWrap = (props) => {

// const text = props.text;

// const data = props.data;

// const setData = props.setData;

// const changeInputValue = (e) => {

// setData(e.target.value);

// };

// return (

// <div className="input_wrap">

// <label>{text}</label>

// <input type="text" value={data} onChange={changeInputValue} />

// </div>

// );

// };

// export default App;


// import { useReducer, useRef, createContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Diary from "./pages/Diary";
// import New from "./pages/New";
// import Edit from "./pages/Edit";
// import Notfound from "./pages/Notfound";
// const mockData = [
//   {
//   id: 1,
//   createdDate: new Date("2024-02-19").getTime(),
//   emotionId: 1,
//   content: "1번 일기 내용",
//   },
//   {
//   id: 2,
//   createdDate: new Date("2024-02-18").getTime(),
//   emotionId: 2,
//   content: "2번 일기 내용",
//   },
//   {
//   id: 3,
//   createdDate: new Date("2024-01-07").getTime(),
//   emotionId: 3,
//   content: "3번 일기 내용",
//   },
//  ];
//  function reducer(state, action) {
//   switch (action.type) {
//   case "CREATE":
//   return [action.data, ...state];
//   case "UPDATE":
//   return state.map((item) =>
//   String(item.id) === String(action.data.id)
//   ? action.data
//   : item
//   );
//   case "DELETE":
//   return state.filter(
//   (item) => String(item.id) !== String(action.id)
//   );
//   default:
//   return state;
//   }
//  }
//  export const DiaryStateContext = createContext();
//  export const DiaryDispatchContext = createContext();
//  function App() {
//   const [data, dispatch] = useReducer(reducer, mockData);
//   const idRef = useRef(0);
//   // 새로운 일기 추가
//   const onCreate = (createdDate, emotionId, content) => {
//   dispatch({
//   type: "CREATE",
//   data: {
//   id: idRef.current++,
 
//   createdDate,
//   emotionId,
//   content,
//   },
//   });
//   };
//   // 기존 일기 수정
//   const onUpdate = (id, createdDate, emotionId, content) => {
//   dispatch({
//   type: "UPDATE",
//   data: {
//   id,
//   createdDate,
//   emotionId,
//   content,
//   },
//   });
//   };
//   // 기존 일기 삭제
//   const onDelete = (id) => {
//   dispatch({
//   type: "DELETE",
//   id,
//   });
//   };
//   return (
//   <>
//   <DiaryStateContext.Provider value={data}>
//   <DiaryDispatchContext.Provider
//   value={{
//   onCreate,
//   onUpdate,
//   onDelete,
//   }}
//   >
//   <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/new" element={<New />} />
//   <Route path="/diary/:id" element={<Diary />} />
//   <Route path="/edit/:id" element={<Edit />} />
//   <Route path="*" element={<Notfound />} />
//   </Routes>
//   </DiaryDispatchContext.Provider>
//   </DiaryStateContext.Provider>
//   </>
//   );
//  }
//  export default App;
 


// import "./App.css";
// import { useReducer, useRef, createContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Diary from "./pages/Diary";
// import New from "./pages/New";
// import Edit from "./pages/Edit";
// import Notfound from "./pages/Notfound";
// const mockData = [
//   {
//   id: 1,
//   createdDate: new Date("2024-02-19").getTime(),
//   emotionId: 1,
//   content: "1번 일기 내용",
//   },
//   {
//   id: 2,
//   createdDate: new Date("2024-02-18").getTime(),
//   emotionId: 2,
//   content: "2번 일기 내용",
//   },
//   {
//   id: 3,
//   createdDate: new Date("2024-01-07").getTime(),
//   emotionId: 3,
//   content: "3번 일기 내용",
//   },
//  ];
//  function reducer(state, action) {
//   switch (action.type) {
//   case "CREATE":
//   return [action.data, ...state];
//   case "UPDATE":
//   return state.map((item) =>
//   String(item.id) === String(action.data.id)
//   ? action.data
//   : item
//   );
//   case "DELETE":
//   return state.filter(
//   (item) => String(item.id) !== String(action.id)
//   );
//   default:
//   return state;
//   }
//  }
//  export const DiaryStateContext = createContext();
//  export const DiaryDispatchContext = createContext();
//  function App() {
//   const [data, dispatch] = useReducer(reducer, mockData);
//   const idRef = useRef(3);
//   // 새로운 일기 추가
//   const onCreate = (createdDate, emotionId, content) => {
//   dispatch({
//   type: "CREATE",
//   data: {
//   id: idRef.current++,
//   createdDate,
//   emotionId,
//   content,
//   },
//   });
//   };
//   // 기존 일기 수정
//   const onUpdate = (id, createdDate, emotionId, content) => {
//   dispatch({
//   type: "UPDATE",
//   data: {
//   id,
//   createdDate,
//   emotionId,
//   content,
//   },
//   });
//   };
//   // 기존 일기 삭제
//   const onDelete = (id) => {
//   dispatch({
//   type: "DELETE",
//   id,
//   });
//   };
//   return (
//   <>
//   <DiaryStateContext.Provider value={data}>
//   <DiaryDispatchContext.Provider
//   value={{
//   onCreate,
//   onUpdate,
//   onDelete,
//   }}
//   >
//   <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/new" element={<New />} />
//   <Route path="/diary/:id" element={<Diary />} />
//   <Route path="/edit/:id" element={<Edit />} />
//   <Route path="*" element={<Notfound />} />
//   </Routes>
//   </DiaryDispatchContext.Provider>
//   </DiaryStateContext.Provider>
//   </>
//   );
//  }
//  export default App;





// export default App
// import './App.css'
// import { Routes, useSearchParams } from 'react-router-dom'
// import { Route, Link, useNavigate } from 'react-router-dom'
// import Home from './pages/Home'
// import Diary from './pages/Diary'
// import Edit from './pages/Edit'
// import New from './pages/New'
// import NotFound from './pages/NotFound'
// import { getEmotionImage } from './util/get-emotion-image'
// import Button from './components/Button'
// import Header from './components/Header'
// import { useReducer, useRef, createContext } from 'react'

// // 1. "/" : 모든 일기를 조회하는 Home 페이지
// // 2. "/new" : 새로운 일기를 작성하는 New 페이지
// // 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// // 4. "/edit" : 일기를 수정하는 Edit 페이지

// const mockData =
// [
//   {
//     id: 1,
//     createdDate: new Date().getTime(),
//     emotionId: 1,
//     content: "Diary no.1"
//   },
//   {
//     id: 2,
//     createdDate: new Date().getTime(),
//     emotionId: 2,
//     content: "Diary no.2"
//   },
// ];

// // useState -> useReducer
// function reducer(state, action)
// {
//   switch (action.type)
//   {
//     case "CREATE":
//       return [action.data, ...state];

//     case "UPDATE":
//       return state.map ((item) => 
//         String(item.id) === String(action.data.id) ? action.data : item
//     );

//     case "DELETE":
//       return state.filter ((item) =>
//         String(item.id) !== String(action.id)
//     );

//     default:
   
//     return state;
//   }
// }

// const DiaryStateContext = createContext();
// const DiaryDispatchContext = createContext();

// function App()
// {
//   // useNavigate() 선언.
//   // const [data, dispatch] = useReducer(reducer, mockData);
//   const nav = useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [data, dispatch] = useReducer(reducer, mockData);
//   const idRef = useRef(3);

//   // create new diary.
//   const onCreate = (createdDate, emotionId, content) =>
//   {
//     dispatch (
//     {
//       type: "CREATE",
//       data:
//       {
//         id: idRef.current++,
//         createdDate,
//         emotionId,
//         content,
//       },
//     });
//   };

//   // update diary.
//   const onUpdate = (id, createdDate, emotionId, content) =>
//   {
//     dispatch (
//     {
//       type: "UPDATE",
//       data:
//       {
//         id,
//         createdDate,
//         emotionId,
//         content,
//       },
//     });
//   };

//   // delete diary.
//   const onDelete = (id) =>
//   {
//     dispatch (
//     {
//       type: "DELETE",
//       id,
//     });
//   };
 

//   const onClickButton = ()=>
//   { // 이벤트 처리방식으로 페이지 이동.
//     nav("/new");
//   };

//   // <button onClick={() => { navigate('/about'); }}>
//   //   어바웃 페이지로 이동하기
//   // </button>
//   // <button onClick={() => { navigate(-1); }} >
//   //   이전 페이지로 이동하기
//   // </button>

//   return (
//     // Header는 고정, Route는 페이지 이동.
//     <>
//       {/* <Header
//         title={"Header"}
//         leftChild={<Button text={"Left"} />}
//         rightChild={<Button text={"Right"} />}
//       />

//       <Button
//         text={"button"}
//         onClick={() => { alert("click !"); }}
//       />

//       <Button
//         text={"button"}
//         type={"POSITIVE"}
//         onClick={() => { alert("click !"); }}
//       />
      
//       <Button
//         text={"button"}
//         type={"NEGATIVE"}
//         onClick={() => { alert("click !"); }}
//       /> */}

//       {/* <Button text={"button"} onClick={()=> {console.log("click !")}} />
//       <Button text={"button"} type={'POSITIVE'} onClick={()=> {alert("click !")}} />
//       <Button text={"button"} type={'NEGATIVE'} onClick={()=> {alert("click !")}} /> */}

//       <div>
//         {/* 페이지 이동 시, 깜빡임 없음. */}
//         {/* <Link to={'/'}>HOME</Link>
//         <Link to={'/new'}>NEW</Link>
//         <Link to={'/diary/2'}>DIARY</Link>
//         <Link to={'/edit'}>EDIT</Link> */}

//         {/* 페이지 이동 시, 깜빡임 있음. */}
//         {/* <a href='/'>HOME</a>
//         <a href='/new'>NEW</a> */}
//         {/* <a href='http://localhost:5173/new'>NEW</a> */}
//         {/* <a href='/diary/3'>DIARY</a>
//         <a href='/edit'>EDIT</a> */}
//       </div>

//         {/* 함수를 통해 페이지 이동 */}
//         {/* <button onClick={onClickButton}>
//           move the new page...
//         </button> */}
//         {/* <button onClick={()=>{nav('/')}}>
//           HOME
//         </button>
//         <button onClick={()=>{nav('/new')}}>
//           NEW
//         </button>
//         <button onClick={()=>{nav('/diary/4')}}>
//           DIARY
//         </button>
//         <button onClick={()=>{nav('/edit')}}>
//           EDIT
//         </button> */}
//         <br></br>
          
//         <div>
//           {/* <img src={getEmotionImage(1)} alt='emotion1' />
//           <img src={getEmotionImage(2)} alt='emotion2' />
//           <img src={getEmotionImage(3)} alt='emotion3' />
//           <img src={getEmotionImage(4)} alt='emotion4' />
//           <img src={getEmotionImage(5)} alt='emotion5' /> */}
//           {/* import img1 from './assets/emotion1.png'
//           <img src={img1} alt='emotion1'></img> */}
//         </div>
        
//         {/* <button onClick={()=>{setSearchParams({name: 'ksr'})}}>Query String...</button> */}
      
//       <Routes>
//         {/* pate='/' -> http://localhost:5173 과 동일함. */}
//         <Route path='/' element={<Home></Home>} />
//         <Route path='/new' element={<New />} />
//         <Route path='/diary/:id' element={<Diary />} />
//         <Route path='/edit/' element={<Edit />} />
//         {/* <Route path='/diary/:id' element={<Diary />} />
//         <Route path='/edit/:id' element={<Edit />} /> */}
//         {/* <Route path='*' element={<NotFound />} /> */}
//       </Routes>
//     </>
//   );
// };

// export default App