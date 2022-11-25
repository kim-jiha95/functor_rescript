/*
map -> 어떤 함수에 부수효과가 동반되어 있는 값을 적용하는 역할을 하는 것.
*/

// f :: string -> boolean
function f(str: string) {
    return (str.length % 2) === 0;
}

// x :: string
const x: string = "abc";

// const result = f(x); // f가 있고 x가 있으면 무엇을 할 수 있을까?

// 함수가 있고, 함수의 인자와 동일한 타입의 값이 있을때, 이것을 무언가 처리해주는 함수
// apply :: (string -> boolean) -> string -> boolean
// apply :: (A      -> B      ) -> A      -> B
function apply<A, B>(f: (str: A) => B, x: A) {
    return f(x); // 블랙박스. 어떻게 구현되어있는지는 모름
}

// map :: (A -> B) -> Array<A> -> Array<B>
function map<A, B>(f: (x: A) => B, xs: Array<A>) {
    const result = [];

    for (let i = 0; i < xs.length; i++) {
        result.push(apply(f, xs[i]));
    }

    return result;
}

const result1 = apply(f, x);

// g :: number -> string
function g(n: number) {
    return n.toString()
}

// y :: number
const y: number = 123;

const result2 = apply(g, y);

const fst = <A, B>(a: A, b: B): A => {
    return a;
}

const ys: Array<number> = [1, 2, 3];
const result3 = map(g, ys);

const ys1 = ["abc", "123"]
const result4 = map(f, ys1);


type Option<A>
    = { _tag: "Some", value: A }
    | { _tag: "None" };

const o1: Option<number> = { _tag: "Some", value: 123 };
const o2: Option<number> = { _tag: "None" };

applyOption(g, o1);

applyOption(g, o2);

function applyOption<A, B>(f: (a: A) => B, ox: Option<A>): Option<B> {
    if (ox._tag === "Some") {
        return { _tag: "Some", value: apply(f, ox.value) };
    } else {
        return { _tag: "None" }
    }
}
/*
Array<number>.map

Promise<string>.then 값의 실행 순서 정확히 알 수 없음. then(map, flatmap이 함께 있음) 은 미래 시정에 값이 실행되면 그 때 함수를 실행시켜라는 의미임
*/

// type 중심적 사고 https://www.youtube.com/watch?v=M3pMCZqPvzI
// 수업 링크 추가
