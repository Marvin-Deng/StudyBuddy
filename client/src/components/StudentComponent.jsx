import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const StudentComponent = ({
  id,
  name,
  major,
  grad_year,
  social_media,
  phone_number,
}) => {
  return (
    <Card className="mb-5">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>
          {major} (Graduating {grad_year})
        </Card.Subtitle>
        <Card.Text>
          {social_media} - {phone_number}
        </Card.Text>
        <LinkContainer to={`/student/${id}`}>
          <Button className="m-1">View profile</Button>
        </LinkContainer>
        <LinkContainer to={`/editStudent/${id}`}>
          <Button className="m-1">Edit profile</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default StudentComponent;
