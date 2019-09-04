class Lion {
  constructor(name) {
    this.name = name;
    //생성자 함수 내의 this 는
    //new 를 통해 만들어진 새로운 변수가 된다.
  }
  getName() {
    console.log("내 이름은 " + this.name);
  }
}

myLion = new Lion("King"); //객체 생성
myLion.getName();
