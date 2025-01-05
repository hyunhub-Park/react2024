import './Editor.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import EmotionItem from './EmotionItem';

const emotionList =
[
   {
      emotionId: 1,
      emotionName: '완전 좋음',
   },
   {
      emotionId: 2,
      emotionName: '좋음',
   },
   {
      emotionId: 3,
      emotionName: '그럭저럭',
   },
   {
      emotionId: 4,
      emotionName: '나쁨',
   },
   {
      emotionId: 5,
      emotionName: '끔찍함',
   },
];

const getStringedDate = (targetDate) =>
{
   // 년(yyyy)-월(mm)-일(dd)
   let year = targetDate.getFullYear();
   let month = targetDate.getMonth() + 1;
   let date = targetDate.getDate();
   
   if (month < 10)
   {
      month = `0${month}`;
   }
   if (date < 10)
   {
      date = `0${date}`;
   }

   return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) =>
{
   const [input, setInput] = useState(
   {
      createdDate: new Date(),
      emotionId: 3,
      content: '',
      contentsTitle: '',   // 제목 추가
      author: '',  // 작성자 추가
      emotionImage: '',  // 감정 이미지 URL 추가
   });

   const nav = useNavigate();

   // Mount, initData에 변화가 있을 시 작동.
   useEffect(() =>
   {
      if (initData)
      {
         setInput (
         {
            ...initData,
            createdDate: new Date(Number(initData.createdDate)),
         });
      }
}, [initData]);
 
   const onChangeInput = (e) =>
   {
      let name = e.target.name;
      let value = e.target.value;

      if (name === 'createdDate')
      {
         value = new Date(value);
      }

      setInput(
      {
         ...input,
         [name]: value,
      });
   };

   const onSubmitButtonClick = () =>
   {
      onSubmit(input);
   };

   return (
      <div className="Editor">
         <section className="date_section">
            {/* <h4>오늘의 날짜</h4> */}
            <input
               name="createdDate"
               onChange={onChangeInput}
               value={getStringedDate(input.createdDate)}
               type="date"
            />
         </section>

         <section className="content_section">
            {/* <h4>오늘의 일기</h4> */}
            <input
               name="contentsTitle"
               value={input.contentsTitle}
               onChange={onChangeInput}
               placeholder="제목"
               className="contentsTitle_input"
            />
            <input
               name="author"
               value={input.author}
               onChange={onChangeInput}
               placeholder="작성자"
               className="author_input"
            />
            <textarea
               name="content"
               value={input.content}
               onChange={onChangeInput}
               placeholder="내용을 작성해주세요."
            />
         </section>

         <section className="emotion_section">
             <h4>◾ 게시글을 작성하는 현재의 기분은 ?</h4>
             <hr />
             <div className="emotion_list_wrapper">
                {emotionList.map((item) => (
               <EmotionItem onClick={() => onChangeInput({
                     target:{name: 'emotionId', value: item.emotionId,},})}
                     key={item.emotionId}
                     {...item}
                     isSelected={item.emotionId === input.emotionId}/>
                     )
                  )
               }
            </div>
            <hr />
            <br />

            {/* 감정 이미지 업로드 */}
            <h4>◾ 파일 첨부하기</h4>
            <input
               type="file"
               accept="image/*"
               onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                     const reader = new FileReader();
                     reader.onloadend = () => {
                        setInput({ ...input, emotionImage: reader.result });
                     };
                     reader.readAsDataURL(file);
                  }
               }}
            />


                        {/* 감정 이미지 첨부 */}
                        {input.emotionImage && (
               <div className="emotion_image_preview">
                  <img src={input.emotionImage} alt="Selected Emotion" width="200px" height="200px"/>
               </div>
            )}
         <hr />
         </section>


         {/* <section className="content_section">
            <h4>오늘의 일기</h4>
            <input
               name="author"
               value={input.author}
               onChange={onChangeInput}
               placeholder="작성자"
               className="author_input"
            />
            <input
               name="title"
               value={input.title}
               onChange={onChangeInput}
               placeholder="제목"
               className="title_input"
            />
            <textarea
               name="content"
               value={input.content}
               onChange={onChangeInput}
               placeholder="내용을 작성해주세요."
            />
         </section> */}

         <section className="button_section">
            <Button onClick={() => nav(-1)} text={'취소'} />
            <Button
               onClick={onSubmitButtonClick}
               text={'완료'}
               type={'POSITIVE'}
            />
         </section>
      </div>
   );
};

export default Editor;




// import './Editor.css';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from './Button';
// import EmotionItem from './EmotionItem';

// const emotionList =
// [
//    {
//       emotionId: 1,
//       emotionName: '완전 좋음',
//    },
//    {
//       emotionId: 2,
//       emotionName: '좋음',
//    },
//    {
//       emotionId: 3,
//       emotionName: '그럭저럭',
//    },
//    {
//       emotionId: 4,
//       emotionName: '나쁨',
//    },
//    {
//       emotionId: 5,
//       emotionName: '끔찍함',
//    },
// ];

// const getStringedDate = (targetDate) =>
// {
//    // 년(yyyy)-월(mm)-일(dd)
//    let year = targetDate.getFullYear();
//    let month = targetDate.getMonth() + 1;
//    let date = targetDate.getDate();
   
//    if (month < 10)
//    {
//       month = `0${month}`;
//    }
//    if (date < 10)
//    {
//       date = `0${date}`;
//    }

//    return `${year}-${month}-${date}`;
// };

// const Editor = ({ initData, onSubmit }) =>
// {
//    const [input, setInput] = useState(
//    {
//       createdDate: new Date(),
//       emotionId: 3,
//       content: '',
//    });

//    const nav = useNavigate();

//    // Mount, initData에 변화가 있을 시 작동.
//    useEffect(() =>
//    {
//       if (initData)
//       {
//          setInput (
//          {
//             ...initData,
//             createdDate: new Date(Number(initData.createdDate)),
//          });
//       }
// }, [initData]);
 
//    const onChangeInput = (e) =>
//    {
//       let name = e.target.name;
//       let value = e.target.value;

//       if (name === 'createdDate')
//       {
//          value = new Date(value);
//       }

//       setInput(
//       {
//          ...input,
//          [name]: value,
//       });
//    };

//    const onSubmitButtonClick = () =>
//    {
//       onSubmit(input);
//    };

//    return (
//       <div className="Editor">
//          <section className="date_section">
//             <h4>오늘의 날짜</h4>
//             <input
//                name="createdDate"
//                onChange={onChangeInput}
//                value={getStringedDate(input.createdDate)}
//                type="date"
//             />
//          </section>

//          <section className="emotion_section">
//             <h4>오늘의 감정</h4>
//             <div className="emotion_list_wrapper">
//                {emotionList.map((item) => (
//                <EmotionItem onClick={() => onChangeInput({
//                      target:{name: 'emotionId', value: item.emotionId,},})}
//                      key={item.emotionId}
//                      {...item}
//                      isSelected={item.emotionId === input.emotionId}/>
//                      )
//                   )
//                }
//             </div>
//          </section>

//          <section className="content_section">
//             <h4>오늘의 일기</h4>
//             <textarea
//                name="content"
//                value={input.content}
//                onChange={onChangeInput}
//                placeholder="내용을 작성해주세요."
//             />
//          </section>

//          <section className="button_section">
//             <Button onClick={() => nav(-1)} text={'취소'} />
//             <Button
//                onClick={onSubmitButtonClick}
//                text={'완료'}
//                type={'POSITIVE'}
//             />
//          </section>
//       </div>
//    );
// };

// export default Editor;