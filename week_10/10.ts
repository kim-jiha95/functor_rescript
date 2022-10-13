/* 
재귀적 자료구조에 대한 이해가 있으면 다른 자료구조 이해 편함 , linked list
귀납은 base case가 시작점, 재귀 -> 끝에서
리스크립트 패턴매칭 -> js도 검사중
태그드유니언 - 섬타입 / 레코드 오브젝트 -곱타입

테그드유니언
 **
 **
 **

레코드 
 ** 기본적으로 불변
 ** 고정된 필드 소유
 ** key로 문자열 리터럴을 허용
 ** Record Type은 속성을 제한하고 싶은 경우 문자열 리터럴을 사용하여 Key에 허용 가능한 값을 제한합니다.

*/

//태그드 유니언
type ActionAdd = {
    type: 'ADD',
    payload: {
        num: number;
    }
}

type ActionSubtract = {
    type: 'SUBTRACT',
    payload: {
        num: number;
    }
}

type ActionMultiply = {
    type: 'MULTIPLY',
    payload: {
        num: number;
    }
}

type Action = ActionAdd | ActionSubtract | ActionMultiply;

/*
아래처럼 사용.
switch(action.type){
    case 'ADD':
    case 'SUBTRACT':
    case 'MULTIPLY':
}
*/

//Record Type

type names = '홍길동' | '둘리' | '마이콜';

type humanInfo = Record<names, number>

let human: humanInfo = {
    '홍길동': 20,
    '둘리': 30,
    '마이콜': 40
};
