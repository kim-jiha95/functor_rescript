/*
{has} - lodash - 입력받은 경로에 해당하는 element가 object에 있는지 확인함 리턴값은 boolean


const isInitialize = useSelector((state: any) => {
  
   // if else 문이 없어도 되지 않았을까???
   // vault는 빈 문자열일 수 있는가?
   // vault를 빈문자열이 아니게 만들어야 한다
   // vault: option<string>; 옵션 타입으로 나타내주는게 코드를 명시적으로 만들 수 있음
   // 초기화될 수 있다는 가정을 약함,, 
   // vault는 비어있지만 초기화는 되어있다면 ? -> 이 변화가능성을 생각해야하는데,,,
   // 초기화가 필요하니깐 초기화 플래그를 따로 설정했어야 함..
   // 차라리 getInitialRoute 같은 함수를 만들어서 판단할거 같음
   // 이름도 isLoggedIn같은 이름이 맞지 않을까?


  위와 같이 Network, evmaddres의 상태 변경하는데 자주 쓰임

*/

/*
Semaphore / mutex

Mutex - 자원에 대한 접근을 동기화하기 위한 상호배제 기법. 프로젝트에서는 업데이트와 작업이 교착상태 되지 않기 위해 사용함


mutex - 멀티스레드 환경에서 자원을 공유하기 위해 사용함 : mutex 그 자체가 자원을 가지고 있는 것은 아니지만 mutex를 locking하면 해당 mutex가 lock in,,,, 대기....
기본적으로 js는 싱글스레드, mutex가 굳이 필요한 상황은 굳이 없을텐데....... npm 는 네이티브 플러그인이 공유자원을 사용하면 -> 필요할수도 있음 

마지막 todo : 프로그래밍 렝기지 이론 : plt programming language theory

const release = await mutex.acquire();
try {
    // ...
} finally {
    release();
}

*/

/*

Realm  

 Realm.ObjectSchema

 Realm.Results

*/