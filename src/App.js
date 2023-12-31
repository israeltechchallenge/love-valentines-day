import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import UserList from './components/UserList';
import AboutTeam from './components/AboutTeam';
import Login from './components/LogIn';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([])


  const getUserData = async() => {
    const fetched = await fetch(`https://randomuser.me/api/?inc=gender,name&noinfo&results=10`)
    const response = await fetched.json()

    setUsers(response)
  }

getUserData();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/find-love" element={<UserList users={users.results}/>}/>
          <Route path="/about-team" element={<AboutTeam/>}/>
          <Route path="/success-stories"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;