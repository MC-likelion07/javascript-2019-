//함수 기능을 객체 안에서 구현
const calculator = {
  plus: function(a, b) {
    return a + b;
  }
};

//calculator, console은 객체. plus와 log는 함수
const plus = calculator.plus(5, 5);
console.log(plus);
