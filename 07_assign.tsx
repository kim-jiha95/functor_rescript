//result = oneTwoThree.map((v) => {
//  if (v % 2) {
//	return '홀수';
//  }
//  return '짝수';
//});
//result; // ['홀수', '짝수', '홀수']

// todo : map 함수를 reduce로 전개하기
console.log('1');

const oneTwoThree = [1, 2, 3]
/*
function( accumulator, currentValue, currentIndex, array)
 */

// 예시 - reduce ( accumulator, currentValue) - 반복되는 모든 것은 reduce로 만들 수 있다.
const names = ['탄지로', '무이치로', '하나코', '무이치로', '하나코', '하나코'];

const count = names.reduce(function (n, name) {
    name in n ? n[name]++ : (n[name] = 1);
    return n;
}, {});
console.log(
    count

);



const sum = [0, 2, 3, 4, 5].reduce((prev, curr) => prev + curr)

console.log(sum);


const result = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    console.log(acc, 'acc');
    return acc;
}, []);
result; // ['홀수', '짝수', '홀수']
console.log(result, 'result');

