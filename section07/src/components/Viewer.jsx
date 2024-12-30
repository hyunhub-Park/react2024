const Viewer = ({count})=>
{   // 구조분해할당.
    return (
        <div>
        <p>현재 카운트 : </p>
        <h1>{count}</h1>
        </div>
    );
}

export default Viewer;