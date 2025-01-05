import { useNavigate, useParams } from "react-router-dom";
import { getStringedDate } from "../util/get-stringed-date"
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () =>
{
    usePageTitle("일기장");

    const params = useParams();
    const nav = useNavigate();
    const currentDiaryItem = useDiary(params.id);

    if(!currentDiaryItem)
    {   return<div>Loading the data...</div>    }

    const {createdDate, emotionId, contentsTitle, content, author} = currentDiaryItem;
    const title = getStringedDate(new Date(createdDate))

    return (
        <div>
            <Header title={`${title} 게시글`}
                    leftChild={<Button onClick={()=>nav(-1)} text={"< 뒤로가기"}/>}
                    rightChild={<Button onClick={()=>nav(`/edit/${params.id}`)}
                    text={"수정하기"}/>}
            />
            <Viewer emotionId={emotionId} contentsTitle={contentsTitle} content={content} author={author} />
        </div>
    );
};

export default Diary;

// import { useParams, useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import Button from "../components/Button";
// import Viewer from "../components/Viewer";
// import { getStringedDate } from "../util/get-stringed-date";
// import { DiaryStateContext } from "../App";
// import { useContext, useEffect, useState } from "react";

// const Diary = () => {
//  const params = useParams();
//  const nav = useNavigate();
//  //사용자 훅스를 만들어서 사용한다.
//  //const curDiaryItem = useDiary(params.id);
//  //if (!curDiaryItem) {
//  // return <div>데이터 로딩중...!</div>;
// //}
// //전체 데이터에서 해당되는 id 가져오기
//  const data = useContext(DiaryStateContext);
//  const [curDiaryItem, setCurDiaryItem] = useState();
 
//  //마운트될 때 해당되는 id를 찾아서 객체가져오기
//  useEffect(() => {
//  const currentDiaryItem = data.find(
//  (item) => String(item.id) === String(params.id)
//  );
//  if (!currentDiaryItem) {
//  window.alert("존재하지 않는 일기입니다.");
//  nav("/", { replace: true });
//  }
//  setCurDiaryItem(currentDiaryItem);
//  }, [params.id, data]);
// //================================
// const { createdDate, emotionId, content } = curDiaryItem;
// //날짜를 문자열로 가져오기
//  const title = getStringedDate(new Date(createdDate));
//  return (
//  <div>
//  <Header
//  title={`${title} 기록`}

//  leftChild={
//    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
//    }
//    rightChild={
//    <Button
//    onClick={() => nav(`/edit/${params.id}`)}
//    text={"수정하기"}
//    />
//    }
//    />
//    <Viewer emotionId={emotionId} content={content} />
//    </div>
//    );
//   };
//   export default Diary;

// import { useParams } from "react-router-dom";

// const Diary = ()=>
// {
//     const params = useParams();
//     console.log(params);

//     return (
//         <>
//             <div><h1>no. {params.id} 일기</h1></div>
//             {/* http://localhost:5173/dairy/1 */}
//         </>
//     );
// };

// export default Diary;