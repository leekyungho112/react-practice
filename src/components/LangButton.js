import React from 'react';
import { useDispatch, useState } from '../context';

const LangButton = () => {
  const dispatch = useDispatch();
  const { lang } = useState();
  return (
    <div>
      <h1>{lang}</h1>
      <button onClick={() => dispatch({ type: 'kor' })}>νκΈ</button>
      <button onClick={() => dispatch({ type: 'eng' })}>μμ΄</button>
    </div>
  );
};

export default LangButton;
