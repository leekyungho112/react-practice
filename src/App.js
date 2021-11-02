import React, { useReducer } from 'react';
import CountButton from './components/CountButton';
import LangButton from './components/LangButton';
import { buttonContext, initialState, reducer } from './reducer';

function App() {
  // const [count, setCount] = useState(0);
  // const [lang, setLang] = useState('안녕하세요');
  // const handleKor = () => {
  //   setLang('하하하하');
  // };
  // const handleEng = () => {
  //   setLang('Hello');
  // };
  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrease = () => {
  //   setCount(count - 1);
  // };
  return (
    // <buttonContext.Provider value={useReducer(reducer, initialState)}>
    <>
      <LangButton />
      <CountButton />
    </>
    // </buttonContext.Provider>
  );
}

export default App;
