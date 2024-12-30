import { useEffect } from "react";

const Even = ()=>
{

    // 언마운트
    useEffect (()=>{
        console.log(`Even mount`);
        return ()=>
        {
            console.log(`Even unmount`);

        }
    },[]);

    return (
        <>
            <h1>Even</h1>
        </>
    );
};

export default Even;