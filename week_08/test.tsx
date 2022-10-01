
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
