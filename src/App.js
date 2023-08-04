import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path="/about-team"/>
          <Route path="/success-stories"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
