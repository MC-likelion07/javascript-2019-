class Lion {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    //생성자 함수 내의 this 는
    //new를 통해 만들어진 새로운 변수가 된다.
  }
  getName() {
    console.log("내 이름은 " + this.name);
  }
  getAge() {
    console.log(`나는 ${this.age}살이얌!`);
  }
}

myLion = new Lion("King", 22); //인스턴스 생성
myLion.getName();
myLion.getAge();
