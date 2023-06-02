//인덱스드 엑세스타입 >> 인덱스를 이용해 타입내 특정 프로퍼티 타입을 추출하는 방법

interface Post {
  title : string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number
  }
}

const post: Post = {
  title: "우산렌탈 타이틀",
  content: "우산렌탈 게시글",
  author: {
    id: 1,
    name: "황영재"
  }
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`)
}


//Keyof 연산자: 객체타입으로부터 프로퍼티의 모든 key를 추출하는 연산자
// keyof 는 오직 타입에만 적용 할수있음 ( 변수 / 객체 값은 사용불가 )
interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key]
}
//person이라는 객체를 받아서 key값을 반환하는 함수

const person: Person = {
  name: "홍길동",
  age : 27
}



//맵드타입 >> 기존의 객체타입을 기반으로 새로운 객체 타입을  만드는 문법

interface User7 {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User7[key]
}
// key가 id일때 id:User7[id] :number 반환 
function fetchUser(): User7 {
  return {
    id: 1,
    name:"슛돌이",
    age: 40
  }
}

function updateUser() {

}



//템플릿 리터럴 타입 >> 특정한 패턴을 갖고있어야 사용 가능
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
type ColoredAnimal = `${Color}-${Animal}`