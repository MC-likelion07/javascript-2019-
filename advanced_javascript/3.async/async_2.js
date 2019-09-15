function sayHello(sayGoodBye) {
  setTimeout(() => {
    console.log("안녕하세요");
    sayGoodBye();
  }, 2000);
}

sayHello(function() {
  console.log("안녕히 가세요");
});
