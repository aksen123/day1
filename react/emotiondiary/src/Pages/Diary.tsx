import {useParams, useSearchParams} from "react-router-dom"

const Diary = () => {
  // const {id} = useParams();
  // console.log({id})

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('sort'))
  return (
  <div>
    <div>Diary 페이지 입니다</div>
    <div> 일기</div>
  </div>
  )
}

export default Diary