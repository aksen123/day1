import React, { useState,useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import DiaryEditor from './Component/DiaryEditor';
import DiaryList from './Component/DiaryList';
import Lifecycle from './Component/Lifecycle';


function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1)
  const onCreate = (author: any, content: any, emotion: any) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);

    console.log(author,content,emotion)
    console.log(newItem)
  };

  const onDelete = (targetId) => {
    const newDiaryLIst = data.filter(it => it.id !== targetId)
    setData(newDiaryLIst);
    if(newDiaryLIst.length === 0) dataId.current = 1
  }

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList diaryList = {data} onDelete ={onDelete}/>
    </div>
  );
}


export default App;
