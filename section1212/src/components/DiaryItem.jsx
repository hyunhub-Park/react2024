import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = ({id, emotionId, createdDate, contentsTitle, content, author}) =>
{
    // console.log({id, emotionId, createdDate, contentsTitle, content, author});
    const nav = useNavigate();

    return (
        <div className="DiaryItem">
            <div onClick={()=>nav(`/diary/${id}`)} className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}/>
            </div>
            <div className="info_section">
                <div className="contentsTitle">{contentsTitle}</div>
                <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
                <div className="author">{author}</div>
            </div>
            <div className="button_section"><Button onClick={()=>nav(`/edit/${id}`)}text={"수정하기"}/></div>
        </div>
    );
}

export default DiaryItem;



// import { useNavigate } from "react-router-dom";
// import { getEmotionImage } from "../util/get-emotion-image";
// import Button from "./Button";
// import "./DiaryItem.css";

// const DiaryItem = ({ id, emotionId, createdDate, content }) =>
// {
//     const nav = useNavigate();

//     const goDiaryPage = () =>
//     {
//         nav(`/diary/${id}`);
//     };
    
//     const goEditPage = () =>
//     {
//         nav(`/edit/${id}`);
//     };

//     return (
//         <div className="DiaryItem">
//             <div onClick={goDiaryPage} className='img_section'>
//             {/* <div onClick={()=>{nav(`/diary/${id}`)}} className='img_section'> */}
//                 <img src={getEmotionImage(emotionId)} />
//             </div>
//             <div onClick={goDiaryPage} className="info_section">
//                 <div className="created_date">
//                     {new Date(createdDate).toLocaleDateString()}
//                 </div>
//                 <div className="content">{content}</div>
//             </div>
//             <div className="button_section">
//                 <Button onClick={goEditPage} text={"수정하기"} />
//             </div>
//         </div>
//     );
// };
// export default DiaryItem;