import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () =>
{
    usePageTitle("게시글 수정");

    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const params = useParams();
    const nav = useNavigate();
    const currentDiaryItem = useDiary(params.id);

    const onClickDelete = () =>
    {
        if(window.confirm("삭제 하시겠습니까?"))
        {
            onDelete(params.id);
            nav("/", {replace: true})
        }
    };

    const onSubmit = (input) =>
    {
        if(window.confirm("수정 하시겠습니까?"))
        {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.contentsTitle, input.content, input.author);
            nav("/", {replace: true})
        }
    };

    return (
        <div>
            <Header title={"게시글 수정하기"}
                    leftChild={<Button onClick={()=>nav(-1)} text={<FontAwesomeIcon icon={faChevronLeft} size="2x" />}/>}
                    rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
            />
            <Editor initData = {currentDiaryItem} onSubmit={onSubmit}/>
        </div>
    );
};

export default Edit;

// import { useParams, useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import Button from "../components/Button";
// import Editor from "../components/Editor";
// import { useContext, useEffect, useState } from "react";
// import { DiaryDispatchContext, DiaryStateContext } from "../App";
// const Edit = () => {
//  const params = useParams();
//  const nav = useNavigate();
//  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
//  //전체 데이터를 가져오기
//  const data = useContext(DiaryStateContext);
//  const [curDiaryItem, setCurDiaryItem] = useState();
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
//  const onClickDelete = () => {
//  if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!") ) {
//  // 일기 삭제 로직
//  onDelete(params.id);
//  //뒤로가기 방지
//  nav("/", { replace: true });
//  }
//  };
//  const onSubmit = (input) => {
//  if (window.confirm("일기를 정말 수정할까요?")) {
//  onUpdate(
//  params.id,
//  input.createdDate.getTime(),
//  input.emotionId,
//  input.content
//  );
//  nav("/", { replace: true });
//  }
//  };
//  return (
// <div>
//  <Header
//  title={"일기 수정하기"}
//  leftChild={ <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} /> }
//  rightChild={ <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} /> }
//  />
//  <Editor initData={curDiaryItem} onSubmit={onSubmit} />
//  </div>
//  );
// };
// export default Edit;



// import { useParams } from "react-router-dom";

// const Edit = ()=>
// {
//     const params = useParams();

//     return (
//         <>
//             <div>
//                 <h1>no. {params.id} 일기의 수정페이지.</h1>
//                 {/* http://localhost:5173/edit/1 */}
//             </div>
//         </>
//     );
// };

// export default Edit;