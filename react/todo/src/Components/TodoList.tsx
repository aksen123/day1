import React from 'react'
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly toDoList : ReadonlyArray<string>;
  readonly onDelete? : (todo: string) => void;
} 
const TodoList = ({toDoList,onDelete}: Props) => {
  return (
    <Container>
      {toDoList.map((todo) => (
      <TodoItem 
        key={todo} //key를 리렌더링 전과 비교하기위해 꼭 필요, key값을 지정안하면 오류메세지뜸
        label={todo}
        onDelete={() => {
        if(typeof onDelete === 'function') onDelete(todo);
      }}/> ))}
      {/* todoItem 한테 onDelete를 보내줌 ( if문 ) */}
    </Container>
  )
}

export default TodoList
