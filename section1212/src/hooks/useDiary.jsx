import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) =>
{
  const [curDiaryItem, setCurDiaryItem] = useState();
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();

  useEffect(() =>
  {
    const currentDiaryItem = data.find (
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem)
    {
      window.alert("게시글이 삭제되었습니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;