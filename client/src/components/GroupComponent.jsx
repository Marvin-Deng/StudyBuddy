import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const GroupComponent = ({ id, name, description, location, time,class_id }) => {
  const [class_,setClass_] = useState({})
  useEffect(() => {
    const getClassByID = async() => {
      const response = await fetch(`http://localhost:3001/class/${class_id}`)
      const data = await response.json()
      setClass_(data[0])
    }
    getClassByID()
  },[])
  return (
    <Card className="display-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <span className="mb-3">
           {class_ && class_.name} with professor {class_ && class_.professor}
          </span>
          <br/>
          <span className="mb-3">
            {location} - {time}
          </span>
          <br/>
          <span className="mb-3">{description}</span>
        </Card.Text>
        <LinkContainer to={`class/join/${id}`}>
          <Button>Join Group</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default GroupComponent;
