import React from 'react';
import { useDispatch, useState } from '../context';

const CountButton = () => {
  const dispatch = useDispatch();
  const { count } = useState();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>증가</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>감소</button>
    </div>
  );
};

export default CountButton;
