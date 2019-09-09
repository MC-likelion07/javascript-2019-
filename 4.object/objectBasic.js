// object에는 각 value에 이름(key)을 줄 수 있다.
// 파이썬의 딕셔너리와 유사 (key-value 형태의 property를 저장)
const emptyObject = {}; // 빈 객체 생성

const likeLion = {
  name: "cbnu",
  op: 6,
  numMembers: 24,
  averageOfStudentID: 2016,
  duHeeLee: true,
  memFront: ["a", "b", "c", "d", "e"], // 객체 안에 배열을 생성해도 됨.
  //object들의 array
  opInfo: [
    { name: "mc", age: 22, dept: "isToSwe", gf: false },
    { name: "yk", age: 27, dept: "agecPlusCs", gf: "iDonKnow" }
  ]
};

// console.log(likeLion);
console.log(likeLion.op);

//마침표(.)를 사용하여 프로퍼티의 Key를 명시하면, Value를 읽을 수 있다.
//게다가 이를 활용하여 변경할 수도 있고, 변경할 내용이 없으면 자동으로 신규 생성된다.

likeLion.op = 3; // const로 선언된 변수의 객체의 항목을 바꾸는 것은 가능.
console.log(likeLion.op);

console.log(likeLion.opInfo[1].name);
