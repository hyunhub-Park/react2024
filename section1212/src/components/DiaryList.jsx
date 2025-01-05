import "./DiaryList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
 
const DiaryList = ({data}) =>
{
    const [sortType, setSortType] = useState("latest");
    // placeholder 클릭 시 활성화, 비활성화를 위한 변수 선언.
    const [isInputClicked, setIsInputClicked] = useState(false);
    const nav = useNavigate();

    const onChangeSortType = (e) =>
    {
        setSortType(e.target.value)
    };

    // 오름차순, 내림차순. 
    const getSortedData = () =>
    {
        return data.slice().sort((a, b) =>
        {
            if (sortType === "oldest")
            {
                return a.createdDate - b.createdDate;
            } else
            {
                return b.createdDate - a.createdDate;
            }
        });
    }
    
    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="list_wrapper">
                {sortedData.length === 0 ? (
                    <div className="no-posts">작성된 게시글이 없습니다. <br />처음으로 게시글을 작성해보세요!</div>
                ) : (
                    sortedData.map((item) => {
                        console.log(item); // item 객체 출력
                        return <DiaryItem key={item.id} {...item} />;
                    })
                )}
            </div>
                <input className="search_bar"
                        type="search"
                        onFocus={() =>{setIsInputClicked(true);}}
                        onBlur={() =>{setIsInputClicked(false);}}
                        placeholder={isInputClicked === true ? "" : "검색할 내용을 입력하세요."}
                />
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"oldest"}>오름차순</option>
                    <option value={"latest"}>내림차순</option>
                </select>
                <button onClick={() => nav("/new")}>작성하기</button>
                {/* <Button onClick={() => nav("/new")} text={"작성하기"} /> */}
            </div>
        </div>
    );
    
    // return (
    // <div className="DiaryList">
    //     <div className="menu_bar">
    //         <select onChange={onChangeSortType}>
    //             <option value={"latest"}>오름차순</option>
    //             <option value={"oldest"}>내림차순</option>
    //         </select>
    //         <Button onClick={()=>nav("/new")} text={"작성하기"}/>
    //     </div>
    //     <div className="list_wrapper">
    //         {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
    //     </div>
    // </div>);
};

export default DiaryList;


// import "./DiaryList.css";
// import Button from "./Button";
// import DiaryItem from "./DiaryItem";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const DiaryList = ({ data }) =>
// {
//     const nav = useNavigate();
//     const [sortType, setSortType] = useState("latest");
    
//     const onChangeSortType = (e) =>
//     {
//         setSortType(e.target.value);
//     };
    
//     const getSortedData = () =>
//     {
//         //새로운 정렬을 리턴한다.
//         return data.toSorted((a, b) =>
//         {
//             if (sortType === "oldest")
//             {
//                 return Number(a.createdDate) - Number(b.createdDate);
//             } else
//             {
//                 return Number(b.createdDate) - Number(a.createdDate);
//             }
//         });
//     };

//     const sortedData = getSortedData();

//     return (
//         <div className="DiaryList">
//             <div className="menu_bar">
//                 <select value={sortType} onChange={onChangeSortType}>
//                     <option value={"latest"}>최신순</option>
//                     <option value={"oldest"}>오래된 순</option>
//                 </select>
//                 <Button
//                     onClick={() => nav("/new")}
//                     text={"새 일기 쓰기"}
//                     type={"POSITIVE"}
//                 />
//             </div>
//             <div className="list_wrapper">
//                 {sortedData.map((item) => (
//                 <DiaryItem key={item.id} {...item} />
//                         )
//                     )
//                 }
//             </div>
//         </div>
//     );
// };

// export default DiaryList;