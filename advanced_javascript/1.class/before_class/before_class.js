function getName(name) {
  console.log("내 이름은 " + name);
}

function getAge(age) {
  console.log(`내 나이는 ${age}살이야!`);
}

const id_1 = getName("King"); // 함수 호출
const id_2 = getName("Queen");
const id_3 = getName("개미");

const id_4 = getAge(6);

// 결론 : 관련 있는 내용들을 묶기 위해서 class를 사용한다.
