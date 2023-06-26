import {useParams, useSearchParams,useNavigate} from "react-router-dom"
import useDiary from "../Hooks/useDiary";
import Button from "../Component/Button";
import Header from "../Component/Header";
import { getFormattedDate, setPageTitle } from "../Component/Util";
import Viewer from "../Component/Viewer";
import { useEffect } from "react";

const Diary = () => {
  const {id} = useParams();
  const data = useDiary(id)
  console.log(id, data)

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  };
  const goEdit = () => {
    navigate(`/edit/${id}`)
  }

  useEffect(()=> {
    setPageTitle(`${id}번 일기`)
  },[])

  if(!data) { //데이터가 안불러졌을때 
  return <div>아직 일기를 불러오고 있습니다.</div>
  } else {
    const {date, emotionId, content} = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`
    return (
    <div className="Diary">
      <Header 
        title = {title}
        leftChild = {<Button text={"< 뒤로가기"} onClick={goBack}/>}
        rightChild = {<Button text={"수정하기"} onClick={goEdit}/>}
      />
      <Viewer content={content} emotionId ={emotionId} />
    </div>
    )
  }
}

export default Diary