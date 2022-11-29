// map과 flatmap
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);

// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);

// [2, 4, 6, 8]

arr1.flatMap(x => [[x * 2]]);

// [[2], [4], [6], [8]]


//함수형 프로그래밍의 목표 -> 부수효과 적고, 안전, 함수 합성할 때  안전하고 부수효과 밀어내게

// 수업 주석 : "https://jamboard.google.com/d/10rFNJ5OSeaacLjqlNhvff1tJYizeqJ7iUBA-hPkR5KM/viewer?f=8"

// flatmap map 함수 합성, 시그니처 --> todo : 11번 슬라이드 보고 찬찬히 생각해보아라.. --> 갯수 상관없이 flatmap의 array<b> 나옴 flatmap은 map과 다르게 구조를 변경 가능

// 합성되는 부분 무얼까??? 한번 보아라!

// 함수 합성 : "https://evan-moon.github.io/2020/01/27/safety-function-composition/"

// pipe 함수 : (a -> b) -> (b -> c) -> (a -> c)

// (a -> Promise<b>) -> (b -> Promise<c>) -> (a -> Promise<c>)

// compose : https://glebbahmutov.com/blog/refactoring-to-compose/

// https://glebbahmutov.com/blog/kleisli/ pipe composition

// functor monad : https://velog.io/@dlsxor21c/Functor%EC%99%80-Monad

// flatmap monad : https://medium.com/@Alpaca_iOSStudy/%EA%B3%B5%EC%9C%A0-flatmap-oaksongs-wiki-1f95bf0fb4eb

// redux 순수함수 ?? : 변경되어야 하는 상태, 공유해야 하는 것이 필수불가결함 -> 변경된 상태를 얼마나 잘 전파할 수 있느냐, 변경하는 것을 조각나지(불일치 되지) 않게 고민해서 나온게 flux 아키텍처인데 side effect를 만들지 않고 상태를 만드려는 것임. 

 // ex 바꾸었다는 사실을 나만 알고 있거나 ... 반대도 -> 상태 불일치 문제 어떻게 하면 안정적으로 다룰 수 있을 것이냐 emmutable해야 하는 상황에서 상태를 어떻게 만들 것이냐. 액션을 보내고 그 액션으로 상태를 

 // reducer 글 : https://bkase.dev/posts/reducers-are-monoids

 /// fetching 해온 데이터를 중앙에서 관리 , 캐싱해줌 ->swr/ react-query가 대신 잘 해줌 suspense도 해줌 > 데이터 로딩, 끝날을 때 잘 관리...
 
 // 특히 데이터 fetching을 redux에서 쓴다면 react-query가 좋은 선택일 것임.