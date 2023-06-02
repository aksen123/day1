//TS 타입별칭 
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
}

let user: User = {
  id : 1,
  name: "홍길동",
  nickname: "dd",
  birth: "200.01.01",
  bio: "hi"
}

// TS 인덱스 시그니처
type ContryCode = {
  [key: string] : string
}

let code: ContryCode = {
  Korea : "ko",
  Usa : "us",
  UK : "uk", 
}


//타입변수
type Map2<T> = {
  [key: string]: T
}

let stringMap2 : Map2<string> = {
  key : "string"
}

interface KeyPair<K, V> {
  key : K,
  value : V
}

let keyPair: KeyPair<string, number> = {
  key : "key",
  value : 0
}

//제네릭 인터페이스 + 인덱스 시그니처

interface Map4<V> {
  [key : string] : V
}

let stringMap3: Map4<string> = {
  key : "value"
}


function goToSchool(user: User1<Student>) {
  if(user.profile.type !== "student") {
    console.log("잘못 오셨습니다!!");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`)
}

interface Student {
  type: "student",
  school: string
}

interface Developer {
  type: "developer";
  skill: string
}

interface User1<T> {
  name : string;
  profile : Student | Developer
}


const developerUser: User1<Developer> ={
  name:"영심이",
  profile: {
    type : "developer",
    skill:"typescript"
  }
}

const studentUser: User1<Student> = {
  name: "통키",
  profile : {
    type: "student",
    school:"피식대학"
  }
}