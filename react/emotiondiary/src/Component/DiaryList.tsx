import "./DiaryList.css"
import Button from "./Button"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const sortOptionList = [
  {value: "latest", name: "최신순"},
  {value: "oldest", name: "오래된순"}
]


const DiaryList = ({data}) => {

  const [sortType, setSortType] = useState("latest");
  const onChangeSortType = (e: any) => {
    setSortType(e.target.value)
  }
  const [sortedData, setSortedData] = useState([])
  useEffect(()=>{
    const compare = (a, b) => {
      if(sortType === "latest") {
        return Number(b.date) - Number(a.date)
      } else {
        return Number(a.date) - Number(b.date)
      }
    }

  },[data, sortType])
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/New")
  }
  return (
    <div className="DiaryList"> 
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, i) => 
              <option key={i} value={it.value}>
                {it.name}
              </option>
            )}
          </select>
        </div>
        <div className="right_col">
          <Button type={'positive'}  text={"새일기 쓰기"} onClick={onClickNew}/>
        </div>
      </div>
    </div>
  )
}

export default DiaryList