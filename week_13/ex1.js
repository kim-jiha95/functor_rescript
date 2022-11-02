/*
수학적으로 같은 타입 취급 -> 타입을 바꿔써도(대체해도) 그 결과에는 변화가 없을 떄 -> 호환가능
// 동치관계 -> 

null undefined 모두 값이 하나인 타입
하지만 null 은 하나, undefined는 의미상 많기는 하지만 undefined라는 값 하나를 가지고 있는거임

튜플 유닛이 1인 이유는 항등원이기 때문임..

rescript unit - (https://rescript-lang.org/docs/manual/v8.0.0/primitive-types#unit)

리스크립트에서 인자가 0개인 함수는 존재하지 않음

unit을 사용해야 함

rs 에서 인자가 0개인 함수 f(())

(A + B) -> C ==> A->C x B -> C)
복잡한 함수 해석 쉬움

--> 리스크립트는 패턴매칭으로 지원해줌

글 참고 
- https://kseo.github.io/posts/2016-12-25-type-isomorphism.html


map 함수는 isodd를 3번(배열 크기만큼) 실행시켜줌
then은 promise 종료, resolve, 될 때 실행됨

observable의 data type의미는 비동기로 언제 발생할지 모르는 여러개의 값
값이 도착할때 실행시켜주는게 rxjs의 map


배열은 정해진 개수만큼 함수 실행 

promise의 context는 언제 등장할지 모르는

한계
map함수는 부호를 변경할 수 없음 -> functor, 약속 , 부호 변경 안됨
array는 갯수를 바꿀 수 없음, 
promise 는 실행 시점 바꿀 수 없음
observable는 filter - 버리고 싶어도 안됨 - 구조를 유지하려는 특성 때문에
set은 고유한 값이라서 functor를 만들 수 없음 / map돌리면 구조가 깨짐

todo : 구조를 변경하는 flatmap을 볼것이다. (배열의 갯수를 볼 수 있음)



then


*/