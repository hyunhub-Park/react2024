import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import usePageTitle from "../hooks/usePageTitle";

const New = () =>
{
    usePageTitle("게시글 작성");

    const nav = useNavigate();
    const {onCreate} =useContext(DiaryDispatchContext);
    
    const onSubmit = (input) =>
    {         
        onCreate(input.createdDate.getTime(), input.emotionId, input.contentsTitle, input.content, input.author)
        nav('/', {replace: true})
    }

    return (
        <div>
            <Header
                title={"게시글 작성　　　　"} 
                leftChild={<Button onClick={(()=>nav(-1))} text={<FontAwesomeIcon icon={faChevronLeft} size="2x" />}/>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    );
};

export default New;

// import Header from "../components/Header";
// import Button from "../components/Button";
// import Editor from "../components/Editor";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { DiaryDispatchContext } from "../App";

// const New = () =>
// {
//     const { onCreate } = useContext(DiaryDispatchContext);
//     const nav = useNavigate();
    
//     const onSubmit = (input) =>
//     {
//         onCreate (
//         input.createdDate.getTime(),
//         input.emotionId,
//         input.content
//         );

//         //뒤로가기 방지 및 페이지 이동.
//         nav("/", { replace: true });
//     };

//     return (
//         <div>
//             <Header title={"새 일기 쓰기"}
//                     leftChild={
//                         <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}/>
//             <Editor onSubmit={onSubmit} />
//         </div>
//     );
// };

// export default New;



// import Header from './../components/Header'; 
// import Button from './../components/Button'; 
// import Editor from '../components/Editor';
// import { useNavigate } from 'react-router-dom';
// const New = ()=>{
//  const nav = useNavigate(); 
//  return(
//  <>
//  <div className="New">
//  <Header title={'새 일기쓰기'} 
//  leftChild={<Button text={'< 뒤로가기'} onClick={()=>{nav(-1)}}/>} />
//  <Editor name={'1'} />
//  </div>
//  </>
//  ); 
// };
// export default New;
