import UserCard from './UserCard';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';

const [users, setUsers] = useState([])


  const getUserData = async() => {
    const fetched = await fetch(`https://randomuser.me/api/?inc=gender,name&noinfo&results=10`)
    const response = await fetched.json()

    setUsers(response)
  }

getUserData();

const UserList = ({ users }) => {

  return (
    <Container id="items" className="p-3 d-flex flex-wrap">
      {users.map((user) => <UserCard
        name={user.name}
        age={user.age}
        interestedIn={user.interestedIn}
        gender={user.gender} />)}
    </Container>
  );
};

export default UserList;