function whoAreYou(yourName, age) {
  //문자열과 변수를 같이 쓸 때(,는 띄어쓰기 자동으로 됨. 반면 +는 안됨.)
  console.log("Hello my name is", yourName, "I'm", age, "years old.");
  console.log("Hello my name is " + yourName + " I'm " + age + " years old.");
  console.log(`Hello my name is ${yourName} I'm ${age} years old.`);
  //javascript 백틱 : ``을 활용해 좀 더 쉽게 코드 작성이 가능.
}

whoAreYou("mc", 22);
//=======================================================================================
function info(name, age) {
  return `Hello my name is ${name} I'm ${age} years old.`;
}

const myInfo = info("mc", 23); //myInfo 변수에는 info함수의 return값이 저장된다.
console.log(myInfo);
