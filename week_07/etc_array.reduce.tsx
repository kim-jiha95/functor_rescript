// Array.reduce()
//arr.reduce(callback[, initialValue])

const arr3 = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0)
console.log(result); //15


// map(), fileter() reduce(로 실행 가능)