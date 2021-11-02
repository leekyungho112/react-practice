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
