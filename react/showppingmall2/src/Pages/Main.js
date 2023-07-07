import React from 'react'
import MainContent from '../Components/MainContent'
import { useState, useEffect } from 'react'
const Main = () => {
  const [contents, setContents] = useState([]);
  
  const getContent = async() => {
    // let url = `http://localhost:3004/MainItem`;
    let url = `https://my-json-server.typicode.com/aksen123/nike/MainItem`;
    let response = await fetch(url);
    let data = await response.json();
    setContents(data)
    console.log(data)
  }
  useEffect(()=>{
    getContent()
  },[])
  return (
    <div>
      {contents.map((content)=> (
        <MainContent content={content}/>
      ))}
    </div>
  )
}

export default Main
