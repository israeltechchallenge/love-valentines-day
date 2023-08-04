import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <Container className="p-3">
      <UserList
        users={users}
        />
    </Container>
  );
}

export default App;
