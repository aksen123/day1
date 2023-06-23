import { useContext, useState, useEffect } from "react"
import { DiaryStateContext } from "../App"
import { useNavigate } from "react-router-dom";


const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();
  console.log(id, data, "ㅇㅇ")

  useEffect(() => {
    const matchDiary = data.find((it) =>String(it.id) === (id));
    if(matchDiary) {
      setDiary(matchDiary)
    } else { // 일기가 존재 하지않을때
      alert("일기가 존재하지 않습니다");
      navigate('/', {replace: true})
    }
  },[id, data])

  return diary
}

export default useDiary