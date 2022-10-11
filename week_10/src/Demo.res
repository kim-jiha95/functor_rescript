//wow ,,,
Js.log("Hello, ReScript")

// variables and Functions
let x = 3

let add = (a, b) => a + b // int + int ==> int
// rescript has syntax , intentionally designed => type annotation less,,

let concat = (a, b) => a ++ b // string + string ==> string

// partial application => curring
let add5 = add(5)
let add9 = add(9)

let x_ = add5(add9(6))
let y = 3->add9->add5

// records and arrays
type person = {
  mutable name: string,
  age: int,
}
// typesidetracked?

let joe: person = {
  name: "Joe",
  age: 20,
}
// type 에 mutable powerful 붙일 수 있음
joe.name = "Dave"

//array

let arr = [2, 3, 4, 5]
// forEach 사용 방법 다름 ,,
arr->Belt.Array.forEach(x => Js.log(x))
Belt.Array.forEach(arr, x => Js.log(x))
