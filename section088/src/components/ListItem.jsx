import "./ListItem.css";

// 💗💗💗💗💗
import { useState } from "react";

const ListItem = ({ id, isDone, title, content, date, onUpdate, onDelete }) =>
{
    // 💗💗💗💗💗 수정 상태 관리
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

  const onChangeCheckBox = () =>
  {
    onUpdate(id);
  };

  const onClickItem = () =>
  {
    onDelete(id);
  };

    // 💗💗💗💗💗 수정 시작
    const onEditClick = () => {
      setIsEditing(true); // 수정 모드로 전환
    };

    // 💗💗💗💗💗 수정된 내용 저장
    const onSaveClick = () => {
    onUpdate(id, newTitle, newContent); // 수정된 제목과 내용 반영
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div className="ListItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      {isEditing ? (
        <div>
          <input
            type='text'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)} // 제목 수정
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)} // 내용 수정
          />
          <button onClick={onSaveClick}>저장</button>
        </div>
      ) : (
        // 수정하지 않은 상태에서 제목과 내용 표시
        <p id="modi_content" className='content'>
          <p id="modi_title" className='title'>{title}</p>
          <br />
          {content}
        </p>
        // <p className='content'>
        //   <p className='title'>{title}</p>
        //   <br />
        //   {content}
        // </p>
      )}

      <p className='date'>{new Date(date).toLocaleDateString()}</p>

      {/* 수정 버튼을 체크박스가 선택되지 않은 상태에서만 보여주기 */}
      {!isEditing && isDone && (
        <button onClick={onEditClick}>수정하기</button>
      )}

      <button onClick={onClickItem}>삭제</button>
      
      {/* <p className="content">
        <p className="title">{title}</p>
        <br />
        {content}
      </p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button onClick={onClickItem}>delete</button> */}
    </div>
  );
};

export default ListItem;