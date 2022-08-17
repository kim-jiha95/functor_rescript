//lambda - curry

const add1 = (x: number) => {
    return (y: number): number => {
        return x + y;
    }
}
console.log(add1(2)(3));

// 해쉬


// 포인트-프리
// tactic
// ==> 수행해야 할 매개변수나 인자를 식별하지 않고 함수를 정의하는 프로그래밍 패러다임 ex) 커리, 부분적용, 함수 합성
//curry
// let newBooks = books.filter(point => isTechnology(point))

// let newBooks_fix = books.filter(isTechnology)


//함수 합성
// word 가 언급되기 때문에 낫 포인트 프리
// const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_');

// 포인트 프리
// const snakeCase_Fix = compose(replace(/\s+/ig, '_'), toLowerCase);

// 부분함수 : 기대하는 것보다 적은 인자를 제공하는 함수가 부분 적용함수 = 인자가 부분적으로 이미 적용된 함수

//add2(a,b)
//increment(b) //a 가 부분 적용된 함수


// 토탈펑션 - 순수함수
// 완전 함수는 어떤 함수가 가능한 입력을 모두 다룸