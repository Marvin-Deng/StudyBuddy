import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import GroupComponent from "./GroupComponent";

const ViewGroups = ({ groups }) => {
  return (
    <Container>
      <Row>
        {groups &&
          groups.map((group) => {
            return (
              <Col key={group.id} sm={12} md={6} lg={6}>
                <GroupComponent
                  id={group.id}
                  name={group.name}
                  description={group.description}
                  location={group.location}
                  time={group.time}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default ViewGroups;
