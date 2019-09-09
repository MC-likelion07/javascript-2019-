// object에는 각 value에 이름(key)을 줄 수 있다.
// js의 객체는 파이썬의 딕셔너리와 유사 (key-value 형태의 property를 저장)
const emptyObject = {}; // 빈 객체 생성

const likeLion = {
  name: "cbnu", // key:value형태의 하나의 property
  op: 6,
  numMembers: 24,
  averageOfStudentID: 2016,
  duHeeLee: true,
  opName: ["김보연", "이민철", "최유진", "정아현", "박종현", "구경민"],
  // 객체 안에 배열을 생성해도 됨.

  opInfo: [
    { name: "mc", age: 22, dept: "isToSwe", gf: false },
    { name: "yk", age: 27, dept: "agecPlusCs", gf: "iDon'tKnow" }
  ] // 객체 안의 배열 안의 객체
};

// console.log(likeLion.opName);

// console.log(likeLion);

//마침표(.)를 사용하여 프로퍼티의 Key를 명시하면, Value를 읽을 수 있다.
//이를 활용하여 변경할 수도 있고, 변경할 내용이 없으면 자동으로 신규 생성된다.

//likeLion.op = 3; // const로 선언된 변수의 객체의 항목을 바꾸는 것은 가능.
// console.log(likeLion.op);

// console.log(likeLion.opInfo[1].name);
