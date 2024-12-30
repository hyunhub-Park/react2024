const Viewer = ({count})=>
    {   // 구조분해할당.
        return (
            <div>
            <p>연산 결과</p>
            <h1 align="center">{count}</h1>
            </div>
        );
    }
    
    export default Viewer;