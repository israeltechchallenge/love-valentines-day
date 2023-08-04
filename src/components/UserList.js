import UserCard from './UserCard';
import Container from 'react-bootstrap/Container'

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