import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";

// 이번달에 해당하는 데이터 반환. 
const getMonthlyData = (pivotDate, data) =>
{
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23, 59, 59).getTime();

    return (
        data.filter ((item) =>
            beginTime <= item.createdDate && endTime >= item.createdDate
        )
    );
};

const Home = () =>
{
    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(DiaryStateContext);
    const monthlyData = getMonthlyData(pivotDate, data);
    
    const onIncreseMonth = () =>
    {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    }
    
    const onDecreaseMonth = () =>
    {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1))
    }

    return (
        <div>
            <Header 
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
                leftChild={<Button onClick ={onDecreaseMonth} text={<FontAwesomeIcon icon={faChevronLeft} size="2x" />}></Button>}
                rightChild={<Button onClick = {onIncreseMonth} text={<FontAwesomeIcon icon={faChevronRight} size="2x" />}/>}
            />
            
            <DiaryList data={monthlyData}/>
        </div>
    );
};

export default Home;


// import { useContext, useState } from "react";
// import { DiaryStateContext } from "../App";
// import Button from "../components/Button";
// import DiaryList from "../components/DiaryList";
// import Header from "../components/Header";

// // 이번달에 해당하는 데이터 반환 
// const getMonthlyData = (pivotDate, data)=>{
//     const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
//     const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23, 59, 59).getTime();

//     return data.filter((item)=> beginTime <= item.createdDate && endTime >= item.createdDate)
// }

// const Home = () => {
//     const data = useContext(DiaryStateContext);
//     const [pivotDate, setPivotDate] = useState(new Date());
//     const monthlyData = getMonthlyData(pivotDate, data);
    
//     const onIncreseMonth = () => {
//         setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
//     }
//     const onDecreaseMonth = () => {
//         setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1))
//     }

//     return (
//     <div>
//         <Header 
//         title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
//         leftChild={<Button onClick ={onDecreaseMonth} text = {"<"}/>}
//         rightChild={<Button onClick = {onIncreseMonth} text={">"}/>}
//         />
//         <DiaryList data={monthlyData}/>
//     </div>
//     );
// };

// export default Home;

// import Header from "../components/Header";
// import Button from "../components/Button";
// import DiaryList from "../components/DiaryList";
// import { useState, useContext } from "react";
// import { DiaryStateContext } from "../App";

// const getMonthlyData = (pivotDate, data) =>
// {
//     //이번달 시작되는 시점과 끝나는 시점사이에 들어오는것만 필터링
//     const beginTime = new Date( pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0 ).getTime();
//     const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59 ).getTime();
//     return data.filter((item) =>
//         beginTime <= item.createdDate && item.createdDate <= endTime
//     );
// };

// const Home = () =>
// {
//     // 공유데이터 가져오기.
//     const data = useContext(DiaryStateContext);
//     const [pivotDate, setPivotDate] = useState(new Date());

//     //이번달 시작되는 시점과 끝나는 시점사이에 들어오는것만 필터링
//     const monthlyData = getMonthlyData(pivotDate, data);
//     const onIncreaseMonth = () =>
//     {
//         setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
//     };

//     const onDecreaseMonth = () =>
//     {
//         setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
//     };

//     return (
//     <div>
//         <Header
//             title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
//             leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
//             rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
//         />
//         <DiaryList data={monthlyData} />
//     </div>
//     );
// };

// export default Home;