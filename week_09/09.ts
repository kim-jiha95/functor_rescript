//data constructor , type constructor

// 시작점 선언
type Zero = { _tag: "Z" };
// 다음 수 successor , 이전수 : predeccsor
// n(시작점)의 다음 수 
type NPrime = { _tag: "NPrime", n: NaturalNumber }
type NaturalNumber = Zero | NPrime;

//as const literal?
const zero: Zero = { _tag: "Z" as const };
// n은 이전 수
const one: NaturalNumber = { _tag: "NPrime" as const, n: zero }
const two = { _tag: "NPrime" as const, n: one }

const zero_ = (): Zero => ({ _tag: "Z" as const })
const successor = (n: NaturalNumber): NaturalNumber => ({
    _tag: "NPrime" as const, n
})
const z = zero_()
const one_ = successor(z)
const two_ = successor(one_)
// 페아노 공리계에 맞춘 자연수
console.log(two_, 'two');


type Nil = { _tag: "Nil" };
type Cons<A> = { _tag: "Cons", head: A, tail: List<A> };
type List<A> = Nil | Cons<A>

const to_int = (n: NaturalNumber): number => {
    if (n._tag === "Z") return 0;
    return 1 + to_int(n.n)
}

console.log(to_int(two));

// number의 리스트 -> 유한한 방법으로 무한하게 표현
type ListOfNumber = [] | [number]

const l1: number[] = [1, 2, 4] //...

// 리스트 자료구조
// 배열 : 몇개 든지 담을 수 있는 자료구조, ts : 배열, 튜플 엄밀히 구분


// ts 제네릭 문법

type Nil_ = { _tag: "Nil" }
const nil = (): Nil => ({ _tag: "Nil" })
const cons_ = <A extends unknown>(head: A, tail: List<A>): List<A> => ({
    _tag: "Cons", head, tail
})

const empty_list1 = nil();
const b1 = cons_(1, nil())

//list의 함수
// const sum = <A extends unknown>(head: A, tail: List<A>):List<A> => ({
//     // _tag: "Cons", head, tail
//     if(list._tag ==="Nil") return 0;
//     1 = head  //+ tail
// })

//sum , mult, reduce 만들 수 있음


// 다른 자료구조 tree : head에서 left, right, (left, right 비어 있을 수 있냐?)
//자연수에서 출발해서 재귀 … 알고리즘 이해하기 도움 됨

// 주의 : 논리적 사고, 와 성능 결국엔 최적화된 코드 사용 -> 생각의 시작만 해보아라 

// 다음 시간 : 같은 내용 rescript 로 구현 해볼것임