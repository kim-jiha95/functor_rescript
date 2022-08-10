// FEAT : 위키백과
// 함수 f는 다음과 같은 튜플- (셀 수 있는 수량의 순서 있는 열거) 이다.
// 튜플은 특정 조건 - ((x,y) -> Y가 유일하게 존재 )을 만족시켜야지만 함수라고 함 

// ++
// 보통 프로그래밍에서 함수란 하나의 특별한 목적의 작업을 수행하기 위해 독립적으로 설계된 프로그램 코드의 집합으로 정의함 
// 함수형 프로그래밍은 하나의 프로그래밍 패러다임으로 정의되는 일련의 코딩 접근 방식이며, 자료처리를 수학적 함수의 계산으로 취급하고 상태와 가변데이터를 멀리하는 프로그래밍 패러다임을 의미한다.

// 순수 함수는 동일한 인자를 주었을 때 항상 같은 값을 리턴해야 하고 외부 값 참조하지 않아야 함 -수학에서 사용되는 함수의 의미와 같음
// 순수 함수 내부에서 순수 함수를 호출하는 경우도 순수 함수의 조건에 위배되지 않음.

// 함수형 프로그래밍에서 중요한 2가지 개념 - 부수효과/ 참조투명성

// 부수 효과는 함수 내의 실행으로 인해 함수 외부가 영향을 받는 것을 의미함.
// 즉 함수형 코드가 되기 위해서는 외부 세계(데이터 베이스, 파일 시스템, 네트워크로 데이터 이동이 '함수 실행' 중에 발생하지 않아야 함

const area = radius => Math.PI * Math.pow(radius, 2);

// 참조 투명하다 -- 함수 입력 표현식을 그 결과로 치환해도 함수 작동에 문제가 없기 때문에
console.log(area(3) + area(4));;
//  ==
console.log(Math.PI * Math.pow(3, 2) + Math.PI * Math.pow(4, 2));

