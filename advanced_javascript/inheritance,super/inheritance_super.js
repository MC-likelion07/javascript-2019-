class Animal {
  constructor(leg) {
    this.leg = leg;
  }
  printAnimal() {
    console.log(this.name + "은 " + String(this.leg) + "개의 다리를 가진다.");
  }
}
class Lion extends Animal {
  constructor(name, leg) {
    super(leg);
    //부모 constructor의 input
    this.name = name;
    //생성자 함수 내의 this 는
    //new 를 통해 만들어진 새로운 변수가 된다.
  }
  getName() {
    console.log("내 이름은 " + this.name);
  }
}

myLion = new Lion("King", 4); //객체 생성
myLion.getName();
myLion.printAnimal();
