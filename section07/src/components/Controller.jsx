import './Controller.css'

const Controller = ({onClickButton})=>
    {
        const onClickValue = (e)=>
        {
            onClickButton(Number(e.target.value))
        };
        return (
            <div>
                <button onClick={onClickValue/*{onClickButton(-1)}*/} value="-1">-1</button>
                <button onClick={onClickValue/*{onClickButton(-1)}*/} value="-10">-10</button>
                <button onClick={onClickValue/*{onClickButton(-1)}*/} value="-100">-100</button>
                <button onClick={()=>{onClickButton(100)}}>100</button>
                <button onClick={()=>{onClickButton(10)}}>10</button>
                <button onClick={()=>{onClickButton(1)}}>1</button>
            </div>
        );
    }
// const Controller = ({onClickButton})=>
//     {
//         const onClickValue = (e)=>
//         {
//             onClickButton(Number(e.target.value))
            
//         };
//         return (
//             <div >
//                 <button onClick={onClickValue/*{onClickButton(-1)}*/} value="-1">-1</button>
//                 <button onClick={onClickValue/*{onClickButton(-1)}*/} value="-10">-10</button>
//                 <button onClick={onClickValue/*{onClickButton(-1)}*/} value="-100">-100</button>
//                 <button onClick={()=>{onClickButton(100)}}>100</button>
//                 <button onClick={()=>{onClickButton(10)}}>10</button>
//                 <button onClick={()=>{onClickButton(1)}}>1</button>
//             </div>
//         );
//     }
    
    export default Controller;