import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClassComponent = ({ id, name, subject, professor }) => {
  return (
    <Card className="display-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {subject} - {professor}
        </Card.Text>
        <Link
          className="m-1"
          to={`editClass/?id=${id}&name=${name}&subject=${subject}&professor=${professor}`}
        >
          <Button>Edit Class</Button>
        </Link>
        <Link className="m-1" to={`/classes/deleteClass/${id}`}>
          <Button>Delete Class</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ClassComponent;
