// 1. 자바스크립트 기본 표현법 / block은 js의 표현법

if (condition) {
  block;
} else {
  block;
}

// 2. if - else if - else

if ("7" === 7) {
  console.log("string is not equal to number");
} else if ("10" === "10") {
  // ===는 양변의 값이 일치해야한다.
  console.log("They are the same.");
} else if ("8" == 8) {
  // ==는 문자열과 숫자를 같은 것으로 판단하는 연산자.
  console.log("They are the same, too.");
} else {
  console.log("incorrect");
}

// 3. 연산자(논리 연산자 - and(&&), or(||), not(!))

if (2019 < 2018 && "mc" === "mc") {
  // and 좌,우가 모두 참이어야 전체가 참이된다.
  console.log("Hello mc lee!");
} else if ("likelion" === "likelion" || "tiger" === "lion") {
  // or(||)의 좌, 우 중에서 하나만 참이어도 전체가 참이 된다.
  console.log("likelion 7th");
}
