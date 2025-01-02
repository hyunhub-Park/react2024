import { useState } from "react";
// import { useState, useRef } from "react";
import { useRef } from "react";

const Register = ()=>
{
    const countRef = useRef(0);
    const inputRef = useRef();  // undefined.

    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio:'',
    });

    // let input1 =
    // {
    //     name: '이름',
    //     birth: '',
    //     country: '',
    //     bio:'',
    // }
    // const [name, setName] = useState("이름");
    // useState는 return값을 2개 줌.
    // 구조분해 할당으로 하나는 name, 하나는 setName이라는 함수로 받음.
    //  console.log(obj);
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");
    
  
    // console.log({...input})
    // const onChangeName =(e)=>
    // {
    //     console.log(e);
    //     // console.log(e.target.value);
    //     // setName(e.target.value);
    //     setInput({...input, name: e.target.value});
    // }
    
    // const onChangeBirth =(e)=>
    // {
    //     // console.log(e.target.value);
    //     // setBirth(e.target.value);
    //     setInput({...input, birth: e.target.value});
    // }

    // const onChangeCountry =(e)=>
    // {
    //     // console.log(e.target.value);
    //     // setCountry(e.target.value);
    //     setInput({...input, country: e.target.value});
    // }

    // const onChangeBio =(e)=>
    // {
    //     // console.log(e.target.value);
    //     // setBio(e.target.value);
    //     setInput({...input, bio: e.target.value});
    // }

    // const onChange = ()=>
    // {
    // let onChange = function()
    // function onChange()    
    // }

    let onChange = function(e)
    {                       // target, name, value
                            // 위의 const들 모두 지워도 됨.
        countRef.current++;
        console.log({...input, [e.target.name]:e.target.value});
        setInput({...input, [e.target.name]:e.target.value});
    }

    // 전송 시 점검(패턴검색).
    const onSubmit = ()=>
    {
        if (input.name === '')
        {
            alert('name값이 존재하지 않습니다.');
            inputRef.current.focus();   // submit 방지.
            console.log(inputRef);
        }

    }

    // console.log(countRef);



// const Register = ()=>
// {
//     const [name, setName] = useState("이름");
//     // useState는 return값을 2개 줌.
//     // 구조분해 할당으로 하나는 name, 하나는 setName이라는 함수로 받음.
//    //  console.log(obj);
//     const [birth, setBirth] = useState("");
//     let name2 = "a";
//     console.log(name2);


//    const onChangeName =(e)=>
//    {
//     // console.log(e.target.value);
//     // setName(e.target.value);
//     name2 = e.target.value;
//     console.log("이벤트 " + name2)
//    }

//    const onChangeBirth =(e)=>
//    {
//     // console.log(e.target.value);
//     setBirth(e.target.value);
//    }

    return (
        // <>
        // <h1>Register</h1>
        // </>
        <>
        <div>
            <input ref={inputRef} /*value={name}*/ name="name" value={input.name} /*onChange={onChangeName}*/ onChange={onChange} type="text" placeholder="이름"/>
                                    {/* callBack함수이므로 이름만! */}
        </div>
        <div>
            <input /*value={birth}*/ name="birth" value={input.birth} type="date" /*onChange={onChangeBirth}*/ onChange={onChange} />

        </div>
        <select /*value={country}*/ name="country" value={input.country} /*onChange={onChangeCountry}*/ onChange={onChange}>
            <option value=""></option>
            <option value="KR">한국</option>
            <option value="US">미국</option>
            <option value="UK">영국</option>
        </select>
        <div>
            <textarea /*value={bio}*/ name="bio" value={input.bio} /*onChange={onChangeBio}*/ onChange={onChange}></textarea>
        </div>
        <button onClick={onSubmit}>전송</button>

        </>
    );
};

export default Register;