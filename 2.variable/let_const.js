// 1. let은 같은 이름의 변수 선언을 막아준다.

let a = 200;
// let a = 10; -> (Identifier 'a' has already been declared)
// a = 50; -> 정상실행 됨.

// 2. const는 변수가 바뀌는 것을 허용하지 않는다.
const b = 200;
//b = 20; // (Assignment to constant variable.)
// const b = 20 -> Identifier 'b' has already been declared

// 3. var는 let과 const에서 생긴 제약사항들 없이 다 실행이 된다. 따라서 구분이 사라진다!(가급적 쓰지 말자.)
var c = 100;
var c = 200;
c = 300;
console.log(c);

// 4. let과 const는 상호보완적.
const d = 100;
let d = 20;
