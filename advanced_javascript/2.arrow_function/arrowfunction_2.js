//map function

arr = [1, 2, 3, 4, 5, 6, 7, 8, 123, 4, 56, 778, 336];

arr_map = arr.map(v => v * 2);

arr_map2 = arr.map(function(v) {
  return v * 2;
});

// v나 value나 parameter(매개변수)는 내가 원하는 것으로 설정 가능

console.log(arr[0]);
console.log(arr_map);
console.log(arr_map2);

// arr.map();
