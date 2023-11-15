import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ClassComponent = ({ id, name, subject, professor }) => {

  return (
    <Card className="display-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {subject} - {professor}
        </Card.Text>
        <LinkContainer className="m-1" to={`editClass/?id=${id}&name=${name}&subject=${subject}&professor=${professor}`}>
            <Button>Edit Class</Button>
        </LinkContainer>
        <LinkContainer className="m-1" to={`/classes/deleteClass/${id}`}>
            <Button>Delete Class</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default ClassComponent;
