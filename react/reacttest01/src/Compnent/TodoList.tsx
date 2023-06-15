import './TodoList.css'
import Todoitem from './Todoitem'

const TodoList = ({todo, onUpdate}: any) => {
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input type="text" className='searchbar' placeholder='검색어를 입력하세요'></input>
      <div className="list_wrapper">
        {todo.map((it: any) => {
          <Todoitem key={it.id} {...it} onUpdate={onUpdate}/>
        })}
      </div>
    </div>
  )
}

export default TodoList