import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components'
import Header from './Components/Header';
import BlogPost from './Components/BlogPost';
import mockPost from './Mock/posts.json'
import Button from './Components/Button';
import Form from './Components/Form';
const Container = styled.div`
background-color: #eee;
height: 100vh;
display: flex;
flex-direction: column;
overflow: scroll;
`
const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`
interface Post {
  readonly id : number;
  readonly title : string;
  readonly body : string;
}

function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([])
  const [showForm, setShowForm] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setPosts(mockPost)
    },1000)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // 데이터를 제대로 갖고왔을때 실행
    .then(json => setPosts(json))
    .catch(error => console.error(error)) // 데이터 못갖고 왔을때 실행
    
  },[])


  return (
    <Container>
      <Header />
      {posts.map((post)=>(
        <BlogPost key={post.id} title={post.title} body={post.body}/>
      ))}
      <ButtonContainer>
        <Button label='등록' onClick={()=>{setShowForm(true)}}/>
      </ButtonContainer>
      {showForm && <Form onClose={()=>{ setShowForm(false)}}/>}
    </Container>
  );
}

export default App;
