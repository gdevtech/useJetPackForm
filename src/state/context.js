import { createContext } from 'react';

const StateContext = createContext({
  formSubmissions: []
});

const DispatchContext = createContext({});

export { StateContext, DispatchContext };