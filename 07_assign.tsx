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



/*
todo : 
*1 : reduce 함수를 전개 - spread syntax 해 보아라
*2 : map 함수를 reduce 함수를 통해 구현해 보기

    reduce 함수란? 

    const numbers = [1, 2, 3, 4]

    numbers.reduce((누산값, 현재요소값, 현재요소의index(optional), 현재배열(optional)) => {
        return 다음 누산값;
    }, (초기 누산값) -> 생략 가능)

    ** 초기 누산값을 생략한 경우 배열의 첫번째 요소가 초기값이 되어 동작함
    */


// ex 0
var function_1 = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, 'a');
    console.log(currentValue, 'c');

    console.log(accumulator + currentValue, 'sum');

    return accumulator + currentValue;
});
console.log(function_1);

/*
log => {
  0 a
1 c
1 sum
1 a
2 c
3 sum
3 a
3 c
6 sum
6 a
4 c
10 sum
10
}
*/


/*
callback	accumulator	currentValue	currentIndex	array	반환 값
1번째 호출	0	1	1	[0, 1, 2, 3, 4]	1
2번째 호출	1	2	2	[0, 1, 2, 3, 4]	3
3번째 호출	3	3	3	[0, 1, 2, 3, 4]	6
4번째 호출	6	4	4	[0, 1, 2, 3, 4]	10
*/

//ex1 => arrow

const function_2 = [0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);
console.log(function_2, 'function2');
console.log("function_1 == function2 !!");


//ex2 - 중첩 배열 펼치기
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function (accumulator, currentValue) {
        return accumulator.concat(currentValue);
    },
    []
);

console.log(flattened, 'flattened');



//ex3 => array
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

var allbooks = friends.reduce(function (accumulator, currentValue) {
    console.log([...accumulator, ...currentValue.books]);

    return [...accumulator, ...currentValue.books];
}, ['start']);

console.log(allbooks);

/* spread syntax - ex 3. array
 1) 초기 누산값 + 현재 요소값 
 
 [ 'start', 'Bible', 'Harry Potter' ]
 
 2) 누산값 + 현재요소 값
[
  'start',
  'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet'
]
 
 3) 누산값 + 현재요소 값
 
[
  'start',
  'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet',
  'The Lord of the Rings',
  'The Shining'
]
 
 4) 누산값 + 현재요소 값
 
[
  'start',
  'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet',
  'The Lord of the Rings',
  'The Shining'
]
*/
