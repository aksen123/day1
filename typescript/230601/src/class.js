//클래스는 프로토타입의 객체를 선언하는것
class Student {
  constructor(name, grade, age){
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log("열공")
  }
  intro() {
    console.log(`안녕하세요 ${this.name}입니다`)
  }
}

const student = new Student("홍길동", "A+", 21);
console.log(student.intro());

class StudentDeveloper extends Student {
  constructor(name, grade, age,skill) {
    super(name,grade,age)
    this.skill = skill;
  }
}

const studentDe = new StudentDeveloper("aaa", "A+", 21, "JS");
console.log(studentDe);