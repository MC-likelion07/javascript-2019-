const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"; // css의 clicked class를 저장

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS); // true or false값을 준다.
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}

// 위의 handleClick 함수와 똑같다.
// function handleClick() {
//   title.classList.toggle(CLICKED_CLASS);
// }

function init() {
  title.addEventListener("click", handleClick);
}

init();
