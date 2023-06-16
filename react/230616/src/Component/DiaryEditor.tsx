import { useState, useRef } from "react"

const DiaryEditor = ({onCreate}) => {
  const authorInput = useRef<any>(null);  
  const contentInput = useRef<any>(null);  
  const [state, setState] = useState({
      author: "",
      content: "",
      emotion: 1
    });

    const handleChangeState = (e: any) => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
      console.log({
        ...state
      })
    }

  const handleSubmit = () => {
    if(state.author.length < 2) {
      authorInput.current.focus();
      return;
    }
    if(state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    console.log(state)
    // alert("저장성공")
    onCreate(state.author, state.content, state.emotion);
    }

  return (
    <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input ref={authorInput} onChange={handleChangeState}  value={state.author} type="text" name="author" placeholder="작성자"/>
    </div>
    <div>
      <textarea ref={contentInput} onChange={handleChangeState}  value={state.content} name="content" placeholder="일기"></textarea>
    </div>
    <div>
      <span>오늘의 감정 점수: </span>
      <select value={state.emotion} onChange={handleChangeState} name="emotion">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
    <div>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </div>
    </div>
  )
}

export default DiaryEditor