import { text } from "stream/consumers"
import Button from "../Component/Button"
import Header from "../Component/Header"
import Editor from "../Component/Editor"
const Home = () => {

  return (
    <div>
      <Header 
      title={"Home"}
      leftChild={
        <Button
          type="positive"
          text={"긍정 버튼"}
          onClick={ () => alert("positive button")}
        />
      }
      rightChild={
        <Button 
          type="negative"
          text= {"부정 버튼"}
          onClick= {()=>alert("negative button")}
        />
      }
      />
  <Editor initData={"a"} onSubmit={()=>alert("작성완료버튼")} />
    </div>
  )
}

export default Home