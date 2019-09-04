function sayHello(name, byeCallback) {
  setTimeout(() => {
    console.log(name + "님, 안녕하세요");
    byeCallback();
  }, 2000);
}

sayHello("Mike", function() {
  console.log("안녕히 가세요");
});

function sayHello2(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name + "님, 안녕하세요");
      resolve("서울");
    }, 3000);
  });
}
// sayHello2("Frank").then(() => console.log("안녕히 가세요"));

async function sayHelloBye(name) {
  loc = await sayHello2(name);
  // await는 일반 비동기 함수와는 달리 결과값을 얻을 수 있을 때까지 기다려준다.
  console.log(loc + "로 안녕히 가세요");
}

sayHelloBye("MC");
