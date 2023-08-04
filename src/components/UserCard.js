import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserCard = ({ name, age, gender, interestedIn }) => {
  return <Card border="secondary" className="m-1" style={{ width: '18rem' }}>
    <Card.Header ><Row><Col sm={10}>{gender}, {age}</Col>
      <Col sm={2}>s2</Col></Row>
    </Card.Header>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text style={{ whiteSpace: 'pre-wrap' }}>
        {interestedIn}
      </Card.Text>
    </Card.Body>
  </Card>
};

export default UserCard;