import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/default';
import { DispatchContext, StateContext } from './state/context';
import { useImmerReducer } from 'use-immer';
import { formReducer } from './state/reducer';
import Home from './pages/Home';
import Submissions from './pages/Submissions';

function App() {
  let initialState = useContext(StateContext);
  const [state, dispatch] = useImmerReducer(formReducer, initialState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <GlobalStyle />
      <StateContext.Provider value={state}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submissions" element={<Submissions />} />
          </Routes>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default App