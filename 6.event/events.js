// javascript는 html을 선택하기 위해서 만들어졌을 뿐만 아니라,
// 이벤트에 반응하기 위해 만들어졌다.
// 이벤트 : 웹사이트에서 발생하는 것들.
// We can intercept the event

const title = document.querySelector("#title");

function handleResize() {
  console.log("I have been resized");
}

// "resize" : 우리가 이벤트를 받기 기다리는 것(listen to event) javascript는 이벤트를 받기를 기다리고 있다.
// "resize" 뒤에는 함수이름을 적어준다.
// call the function handleResize when you needed.
// handleResize()라고 쓰면 해당 함수가 자동적으로 호출된다.(바로 실행된다.)
// 단, handleResize라고 쓰면 윈도우 사이즈가 변경될 때 해당 함수를 호출한다.

window.addEventListener("resize", handleResize);

//=================================================================================================
// 아래의 event는 자바스크립트로부터 온 것이다.
// 이벤트를 다룰 함수를 만들 때마다 자바스크립트는 자동적으로 함수를 객체에 붙인다.
// event가 발생할때마다 이벤트의 객체가 호출된다.

function handleResize(event) {
  console.log(event);
}
window.addEventListener("resize", handleResize);

//=================================================================================================
//누군가 title을 클릭할 때 이것의 색깔을 빨간색으로 바꾼다.
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "red";
}

title.addEventListener("click", handleClick);
