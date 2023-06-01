
// 필드안에 초기값을 반드시 명시해줘야 함


//TS클래스 필드값은 기본적으로 public이라는 디폴트 값을 갖고있어서 필드값에 접근해 수정 가능하다 ( 디폴트 값이라 생략돼있음 )
// 필드값에 접근하지 못하도록 하려면 private이라는 값을 적용해줘야함 ( 필드요소 앞에 적어두면 됨 )
// protected >>> 외부에선 수정이 불가하지만 확장클래스에선 제한적으로 수정이 가능하도록 해주는 필드 속성
class Employee {
  //필드
   name: string = "";
   age: number = 0;
  position: string = "";
  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 메서드
  work() {
    console.log("워커홀릭")
  }
}

const employee2 = new Employee("영심", 13, "developer");
employee2.name = "빵심"
employee2.age = 15
employee2.position = "Front"

console.log(employee2);



//TS 에서 클래스는 또 하나의 타입으로도 사용 가능함

const employeeC: Employee = {
  name: "",
  age:0,
  position:"",
  work() {}
}

console.log(employeeC);



//상속도 가능 상속받아온 필드는 super메서드로 호출해줘야함
class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number = 0;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position)
    this.officeNumber = officeNumber;
  }

  //메서드
  func() {
    // this.name;
    this.age;
  }
}



//인터페이스를 구현하는 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}
// implements >> TS에서 클래스를 생성할때 사용, 해당 인터페이스를 생성하고자 하는 클래스에서 구현하게 만드는 키워드 
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    // private extra: string,
  ) {}

  move(): void {
    console.log(`${this.moveSpeed}로 이동`)
  }
}

const mario: Character ={
  name:"마리오",
  moveSpeed:10,
  move() {
    console.log("qq")
  }
}
console.log(mario.move())