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
