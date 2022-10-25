//배열

let arr: number[] = [1, 3, 5];
let arr2: string[] = ["a", "b", "c", "d"]

interface IBook {
    name: string;
    price: number;
}

let books: IBook[] = [
    { name: "story about evil", price: 35000 },
    { name: "critical thoery", price: 35000 },
]

// 일반 JS에서는 문자열을 문자의 배열로 인식
const str1 = "hello";
console.log(str1[1]);

// TS에서는 문자열을 배열로 따로 변환해야 함.
let str = "hello";
let array: string[] = str.split("");
let joined = array.join("");


type StringorNumber = number | string;

let list: StringorNumber[] = [1, 2, "doctor"];

let tuple: [string, number];

//tuple = ["what", 3, 5]; // error

tuple.push(5) // push, assign 등을 통해 tuple에 값을 넣을 수 있음

console.log(tuple) // ["what", 3, 5]

// 배열은 순서가 있음
// 배열 중간에 있는 요소를 삭제하려면 삭제된 공간으로부터 뒤에 있는 요소들을 모두 한칸씩 앞으로 당겨주어야 함 - 배열에서 요소를 삭제하는 것을 다른 자료 구조에 비해 느릴 수 있음**
// 정보가 자주 삭제되거나 추가되는 데이터를 담기에는 적절하지 않다

// Tuple
// list와 마찬가지로 데이터를 순차적으로 저장할 수 있는 순열 자료구조
// list와 다르게 한 번 정의되고 나면 수정할 수 없다(immutable)
// 2-3개의 소규모 데이터를 저장할 때 많이 사용함

// List

// 빈틈 없는 데이터의 적재
// 처음 끝 중간에 엘리먼트를 추가.삭제
//

