// loop로
// let total = init;
// for (const n of arr) {
//     total = f(n, total);
// }

// return total

// reduce 함수를 전개해보기 전개 : 재귀라서 계산/실행 과정을 펼처보아라 함수 call / call graph 



/*
code
const arr = [1,2,3,4,1230,4567,234,6578];
function length(arr) {
  if (arr === []) return 0;
  const n = arr.shift();
  return 1 + length(arr);
}

length([1,2,3,4,1230,4567,234,6578])
-> 1 + length([2,3,4,1230,4567,234,6578])
-> 1 + 1 + length([3,4,1230,4567,234,6578])
-> 1 + 1 + ... + length([])
-> 1 + 1 + ... + 0

function sum(arr) {
  if (arr === []) return 0;
  const n = arr.shift();
  return plus(n, sum(arr));
}
// [a,b,c] -> a + b + c
// sum([a,b,c]) -> a + sum([b,c]) -> a + b + sum([c]) -
const arr = [1,2,3,4,1230,4567,234,6578];
function length(arr) {
  if (arr === []) return 0;
  const n = arr.shift();
  return 1 + length(arr);
}

length([1,2,3,4,1230,4567,234,6578])
-> 1 + length([2,3,4,1230,4567,234,6578])
-> 1 + 1 + length([3,4,1230,4567,234,6578])
-> 1 + 1 + ... + length([])
-> 1 + 1 + ... + 0

function sum(arr) {
  if (arr === []) return 0;
  const n = arr.shift();
  return plus(n, sum(arr));
}
// [a,b,c] -> a + b + c
// sum([a,b,c]) -> a + sum([b,c]) -> a + b + sum([c]) -> a + b + c + sum([]) -> a + b + c + 0

function mult(arr) {
  if (arr === []) return 1;
  const n = arr.shift();
  return times(n, mult(arr));
}
// [a, b, c] -> a * b * c
김춘구오후 7:16
map 함수를 reduce로 구현해보아라
function reduce(arr, init, f) {
  if (arr === []) return init;
  const n = arr.shift();
  return f(n, f(arr));
}

function sum(arr) {
  return f(arr, 0, (n, acc) => n + acc);
}
function mult(arr) {
  return f(arr, 1, times);
}

function length(arr) {
  return f(arr, 0, (n, acc) => 1 + acc);
}

[1,2,3] => 1, [2, [3, []]]

*/

["tomato", "banana", "apple"].map(x => length(x))
// [6, 6, 5]

["tomato", "banana", "apple"].map(length)

const map = (f) => (arr) => arr.map(f);
map(length, ["tomato", "banana", "apple"]);

const apply = (f) => (value) => f(value);

length("tomato"); // 6
apply(length)("tomato") // 6

map(length)(["tomato", "banana", "apple"]);
//length :: string -> number
//arrayLength :: array<string> -> array<number>
functor -> promise option ....~
    apply(length) ??? // string -> number, length 함수 그 자체를 반환
    map(length) ??? // array<string> -> array<number>, map은 어떤 함수를 array에 적용 할 수 있는 함수로 탈바꿈 시켜줌.