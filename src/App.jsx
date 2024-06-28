import React from 'react'
import Root from './layout';
import { BrowserRouter } from 'react-router-dom';
import "./App.css"


const App = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);


export default App