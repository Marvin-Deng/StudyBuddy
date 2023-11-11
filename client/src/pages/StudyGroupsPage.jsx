import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import GroupComponent from "../components/GroupComponent";

const StudyGroupsPage = () => {
  const [groups, setGroups] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStudyGroups = async () => {
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
    };

    fetchStudyGroups();
  }, []);

  return (
    <Container>
      {error && <h2>Error</h2>}
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

export default StudyGroupsPage;
