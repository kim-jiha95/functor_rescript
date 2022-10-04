
// todo 1: 명령형 -> 선언형
const isSquareEven = (x) => ((x * x) % 2 === 0 ? true : false)

console.log(
    isSquareEven(5)
);

// todo 2 : 제곱근 map / array
// # map
let numbers = [1, 2, 3, 4, 5]
var result_ = numbers.map(Math.sqrt)
console.log(result_)


// # reduce

const numbers_2 = [1, 2, 3, 4, 5]
const result_2 = numbers_2.reduce((acc, cur) => {
    acc.push(Math.sqrt(cur));
    return acc
}, [])
console.log(result_2);

// # reduce 콜백 사용

/*
//folder 구조
type Files = {
    path: string, size: number
}

//재귀적인 type 선언
type Folder = {
    name: string,
    folders: Array<Folder>,
    Files: Array<Files>,
}

const c_drive: Folder = {
    name: '/',
    folders: [
        { name: 'MyDocument', folders: [], Files: [] },
        {
            name: '바탕화면', folders: [

            ], Files: []
        },
    ],
    Files: []
}

console.log(c_drive.name, c_drive.folders, 'c_drive');

const get_file_count = (folder) => {
    let total = folder.files.length;
    for (const child of folder.folders) {
        total += child.files.length;
        total += get_file_count(child);
    }
    console.log(total, 'total');

    return total;
}
*/


// new 재귀적인 type

// type Json = string | number | boolean | null | JsonObject | JsonArray;
// interface JsonObject {
//     [property: string]: Json;
// }
// interface JsonArray extends Array<Json> { }

// const node: JsonArray = [
//     'apple',
//     ['banana', ['cat', 'cow', 'dog'], 'puppy']
// ]

// console.log(node, 'node');

//typescript 3.7부터 circularly references itself 에러..?
/*
type Item = [string, number, Items[]]

interface Items extends Item { }

const cart: Items = [
    '1', 3, []
]
*/

interface Query {
    condition: string
    rules: Query[]
}

const d: Query = {
    condition: '1243',
    rules: [
        {
            condition: '123', rules: [

            ]
        }
    ]
}
// SyntaxError: Unexpected identifier는 왜 자꾸 나느걸까?