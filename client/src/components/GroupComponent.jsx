import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const GroupComponent = ({ id, name, description, location, time }) => {
  return (
    <Card className="display-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{location} - {time}</p>
          <p>{description}</p>
        </Card.Text>
        <LinkContainer to={`class/join/${id}`}>
          <Button>Join Group</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default GroupComponent;
