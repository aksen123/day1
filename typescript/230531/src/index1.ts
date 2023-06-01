function func(value: number | string | Date) {
  if(typeof value === "number") {
    console.log(value.toFixed())
  } else if(typeof value === "string") {
    console.log(value.toUpperCase())
  } else if(value instanceof Date) {
    console.log(value.getTime())
  }
}

type Admin = {
  name: string,
  kickcount: number
}

type Member = {
  name: string,
  point: number
}

type Guest = {
  name: string,
  visitcount: number
}


type User = Admin | Member | Guest;

// function login(user: User) {
//   if("kickcount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickcount}명을 추방했습니다`)
//   } else if("point" in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitcount}번 오셨습니다`)
//   }
// }

function login(user: User) {
  switch (user.tag){
    case "ADMIN" : {
      console.log(`${user.name}님 현재까지 ${user.kickcount}명을 추방했습니다`)
    }
    case "MEMBER" : {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
    }
    case "GUEST" : {
      console.log(`${user.name}님 현재까지 ${user.visitcount}번 오셨습니다`)
    }
  }
}