//함수 기능을 객체 안에서 구현
// 참고 : 함수 기능이 객체안에서 구현되었을 경우 이를 '메소드'라고 부른다.
const calculator = {
  plus: function(a, b) {
    return a + b;
  }
};

//calculator, console은 객체. plus와 log는 함수

const plus = calculator.plus(5, 5);
console.log(plus);
