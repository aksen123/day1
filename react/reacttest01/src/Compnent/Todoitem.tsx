import './Todoitem.css'

const Todoitem = ({id, content, isDone, createdDate, onUpdate}: any) => {
const onChangeCheckBox = () => {
  onUpdate({id})
}
  return (   
    <div className="Todoitem">
      <div className="checkbox_color">
        <input onChange={onChangeCheckBox} type="checkbox" checked={isDone}/>
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  ) 
}

export default Todoitem