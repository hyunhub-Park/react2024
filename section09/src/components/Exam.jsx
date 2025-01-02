import { useReducer } from "react";
import './Exam.css'

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action)
{
    switch (action.type)
    {
        case "PLUS":
            return state + action.data;
        
        case "MINUS":
            return state - action.data;
        
        default:
            return state;   // setState와 동일함.
    }
}

const Exam = () =>
{
    // dispatch : 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);
    
    const onClickPlus = ()=>
    {
        // 인수: 상태가 어떻게 변화되길 원하는지
        // -> 액션 객체
        dispatch(
        {
            type: "PLUS",
            data: 1,
        });
    };
        
    const onClickMinus = ()=>
    {
        dispatch(
        {
            type: "MINUS",
            data: 1,
        });
    };
    
    return (
        <div className="Exam">
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;