// 대수 자료 형 (Algebraic Data Type)

//product type == tuple, 레포트

//oop에서 추상 클래스와 상속받은 클래스간 메소드 오버로딩을 통한 다형성과 비슷한 느낌이 듬

//NAT - 재귀적 구조

const zero = () => { };
const succ = (nat) => (() => nat);


//재귀를 통해 구현
const toInt = (nat) =>
    nat === zero
        ? 0
        : 1 + toInt(nat())

console.log(toInt(succ(succ(succ(zero))))); // 3

//트램펄린과 비슷하게 구현
const toInt1 = (nat) => {
    let count = 0;
    for (; nat !== zero; nat = nat(), count++);
    return count;
}

console.log(toInt(succ(succ(succ(zero))))); // 3

//CONS - 자료형

function Cons(head, tail) {
    this.head = head;
    this.tail = tail;
}
const Nil = new Cons(null, () => {
    throw new Error('Empty!');
});



const int = (n) => new Cons(n, () => int(n + 1))

int(0)        // { head: 0, tail: [Function] }
int(0).tail() // { head: 1, tail: [Function] }


const fromArray = (arr = []) => {
    if (arr.length === 0) return Nil;
    else return new Cons(arr.shift(), () => fromArray(arr.slice()));
}

//두 개 연결하는 :

let cons = fromArray([1, 2]);
console.log(cons); // { head: 1, tail: [Function] }
cons = cons.tail();
console.log(cons); // { head: 2, tail: [Function] }
cons = cons.tail();
console.log(cons, cons === Nil); // { head: null, tail: [Function] } true
cons = cons.tail();

// filter & map

const filter = (f, cons) => {
    if (cons === Nil) return Nil;
    else if (!f(cons.head)) return filter(f, cons.tail());
    else return new Cons(cons.head, () => filter(f, cons.tail()));
}

const map = (f, cons) => {
    if (cons === Nil) return Nil;
    else return new Cons(f(cons.head), () => map(f, cons.tail()));
}

const prt = (cons) => {
    while (cons !== Nil) {
        console.log(cons.head);
        cons = cons.tail();
    }
}
