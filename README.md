# useState useEffect useContext useReducer 연습

### state

- react.js에서는 state의 상태변화에 따라 컴포넌트가 리렌더링 즉 컴포넌트 내부에 모든 함수가 다시 실행된다.

### useState

- react hook에서 제공하는 함수로

```js
const data = useState(1);
```

console로그로 찍어보면 [1, f()]의 찍히게 될것이다. useState함수에 초기값을 설정할 수 있고 구조분해 할당으로 대입을 해주게되면

```js
const [data, setData] = useState(1);
```

data라는 변수에 초기값 1이 설정되었고, react에서는 state에 직접적으로 데이터 변경을 허용하지 않는다. 두번째 인자인 setData함수로 state를 변경해줄수 있다.

#### useReducer

- 간단히 정리하자면 state가 많고 state를 변경하는 함수가 많을 때 사용에 용이하다.

#### useContext

- props를 전달하는데 계층이 너무 많을 때 사용에 용이하다.

---

- reducer.js

```js
import { createContext } from 'react';

export const buttonContext = createContext();

export const initialState = {
  lang: '초기값',
  count: 0,
};

export const reducer = (state, { type }) => {
  switch (type) {
    case 'kor':
      return { ...state, lang: '안녕하세요' };
    case 'eng':
      return { ...state, lang: 'Hello' };
    case 'increase':
      return { ...state, count: state.count + 1 };
    case 'decrease':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};
```

- context.js

```js
import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

const IndexContext = createContext();

const IndexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <IndexContext.Provider value={{ state, dispatch }}>
      {children}
    </IndexContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(IndexContext);
  return dispatch;
};

export const useState = () => {
  const { state } = useContext(IndexContext);
  return state;
};

export default IndexProvider;
```
