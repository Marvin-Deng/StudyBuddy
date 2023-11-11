import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ViewGroups from "../components/ViewGroups";

const StudyGroups = () => {
  const [groups, setGroups] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudyGroups = async () => {
      setLoading(true)
      const response = await fetch(`http://localhost:3001/group/getAll`);
      if (response.status != 200) {
        setError(true);
      } else {
        const data = await response.json();
        if (data) {
          setGroups(data);
        } else {
          setError(true);
          setGroups(null);
        }
      }
      setLoading(false);
    };

    fetchStudyGroups();
  }, []);

  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Groups</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <LinkContainer to="/studyGroups/createGroup">
              <Button variant="primary">Create Group</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
      <Container>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error</h2>}
      </Container>
      <ViewGroups groups={groups} />
    </div>
  );
};

export default StudyGroups;
