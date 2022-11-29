/*
{has} - lodash - 입력받은 경로에 해당하는 element가 object에 있는지 확인함 리턴값은 boolean

import Engine from '@core/Engine';

const isInitialize = useSelector((state: any) => {
    if (
      has(state, ['engine', 'backgroundState', 'KeyringController', 'vault'])
    ) {
      return !!state.engine.backgroundState.KeyringController.vault;
    } else {
      return false;
    }
  });

  위와 같이 Network, evmaddres의 상태 변경하는데 자주 쓰임

*/

/*
Semaphore / mutex

Mutex - 자원에 대한 접근을 동기화하기 위한 상호배제 기법. 프로젝트에서는 업데이트와 작업이 교착상태 되지 않기 위해 사용함

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