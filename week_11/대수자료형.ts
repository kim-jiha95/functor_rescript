// 곱타입 - class



/*
data class Person(val name: String, val age: Int, val email: String)

val lazysoul = Person("lazysoul", 33, "kotlin@gmail.com")
val goinhacker = Person("goinhacker", 36, "fp@gmail.com")
val myeongin = Person("myeongin", 33, "myeongin@gmail.comm")


    // 합타입 - 대표적으로 enum class, (Option, List, Either),
    // 합타입이 추가되면 추가된 타입에 대한 처리도 항상 해줘야 함
    
enum class RGB {
    RED(),
    GREEN(),
    BLUE()
}
*/

// 타입클래스 - 객체에 적용 가능한 오퍼레이션과 함께 인스턴스(객체)의 도메인을 상세화하는 데 사용되는 클래스. 
// 하나의 타입은 속성과 연관 관계를 가질 수 있다.



// js

// ADT: Algebraic Data Type

// 튜플/레코드 곱타입

// 베리언트 합타입

// 대수적 타입이란 위의 예와 같이 더하기와 곱하기가 조합된 데이터 타입

/*

    대수적 타입을 사용하는 이유 : 실행 전(컴파일?)에 신뢰할 수  있는 프로그램의 형태를 구성하기 위해 대수형 데이터 타입 사용함

*/

//합타입 - optional

type cardCase = TrumpCard | TropyCard

//개수 N(cardset) = N(TrumpCard) + N(TropyCard)

//곱타입 - 동시에 가짐 / 

// 타입을 더한다 -> 합집합 타입을 더해서 새로운 집합을 만든다. 
// ts 에서 유니언은 그냥 더할 수 없는 제약이 있음 + 완전한 합타입이 사실 아님 , 합타입은 중복이 안됨 , 
// 튜플은 레코드타입? // 태그드 유니언 - 디스크리미네이티드 유니언 = 합타입은 태그가 있음 


// 다음시간 todo : ts / rescript 합타입 곱타입 사용 방법 비교

//합타입 곱타입 사용 방법 - 실제로 쓰이는,, - 에러 타입 표현할 떄, null을 허용하지 않는 언어에서 type 안전하게 ... / generic하고 같이 쓰는 방법
