// filter function
arr = [1, 2, 3, 4, 5, 6, 7, 8, 123, 4, 56, 778, 336];

arr_filter = arr.filter(function(v) {
  return v >= 10;
});

arr_filter2 = arr.filter(v => v >= 10);

//부등호는 무조건 부등호가 먼저 나온다.
// <=
// >=
// =>

console.log(arr_filter);
console.log(arr_filter2);
