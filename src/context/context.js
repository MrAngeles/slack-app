import React, { createContext, useReducer } from "react";

import reducer from './reducer'

const initialState = ''

export const StateContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchResult = (testLoad) => dispatch({ type: 'TEST_ACTION', payload: testLoad })
  const dispatchResult2 = (state) => dispatch({ type: 'TEST_ACTION2', payload: state })

  return (
    <StateContext.Provider value={{
      dispatchResult,
      dispatchResult2
    }}>
      {children}
    </StateContext.Provider>
  );
}