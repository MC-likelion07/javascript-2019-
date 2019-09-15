function findUserAndCallBack(id, cb) {
  setTimeout(function() {
    console.log("waited 10 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com"
    };
    cb(user);
  }, 10000);
}

findUserAndCallBack(1, function(user) {
  console.log("user:", user);
});
