import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "../contexts/AppContext";
import GroupComponent from "../components/GroupComponent";
import Loader from "../components/Loader";
const StudyGroupsPage = () => {
  const [groups, setGroups] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const { groupSearchResults } = useContext(AppContext);


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
      setLoading(false)
    };

    if (groupSearchResults && groupSearchResults.length > 0) {
      setGroups(groupSearchResults);
    } else {
      fetchStudyGroups();
    }
  }, [groupSearchResults]);

  return (
    <Container>
      {error && <h2>Error</h2>}
      {loading  && <Loader isLoading={loading}/>}
      {!loading && (
        <>
      <Row className="text-center">
        <h2>Groups</h2>
      </Row>
      <Row>
        <Col>
          <LinkContainer to="/createGroup">
            <Button variant="primary" className="mt-4 mb-4">Create Group</Button>
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
                  class_id={group.class_id}
                  detailedView={false}
                />
              </Col>
            );
          })}
      </Row>
      </>)}
    </Container>
  );
};

export default StudyGroupsPage;
