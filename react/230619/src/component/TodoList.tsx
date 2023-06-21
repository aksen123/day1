import './TodoList.css'
import TodoItem from './TodoItem'
import { useState,useMemo } from 'react'

const TodoList = ({todo, onUpdate, onDelete}: any) => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  }
  const getSearchresult = () =>{
    return search === "" ? todo : todo.filter((el: any) => el.content.toLowerCase().includes(search.toLowerCase()))
  }

  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출")
    const totalCount = todo.length; //투두 리스트 갯수
    const doneCount = todo.filter((it: any) => it.isDone).length; //체크박스가 체크된 투두 갯수
    const notDoneCount = totalCount - doneCount; //체크안된 투두 갯수
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  },[todo])
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className='TodoList'>
      <h4>Todo List🎉</h4>
      <div>
        <div>총개수 : {totalCount}</div>
        <div>완료된 할일 : {doneCount}</div>
        <div>아직 완료하지 못한 할일 : {notDoneCount}</div>
      </div>
      <input onChange={onChangeSearch} value={search} type="text" className='searchbar' placeholder='검색어를 입력해주세요'/>
      <div className="list_wrapper">
        {getSearchresult().map((it : any) => (<TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>))}
      </div>
    </div>
  )
}

export default TodoList