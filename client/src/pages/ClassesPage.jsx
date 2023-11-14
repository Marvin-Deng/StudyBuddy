import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "../contexts/AppContext";
import ClassComponent from "../components/ClassComponent";
import Loader from "../components/Loader";
const ClassesPage = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const { classSearchResults } = useContext(AppContext);

  useEffect(() => {
    const fetchAllClasses = async () => {
      setLoading(true)
      const response = await fetch("http://localhost:3001/class/getAll");
      if (response.status != 200) {
        setError(true);
      } else {
        const data = await response.json();
        if (data) {
          setClasses(data);
        } else {
          setError(true);
        }
      }
      setLoading(false)
    };

    if (classSearchResults && classSearchResults.length > 0) {
      setClasses(classSearchResults);
    } else {
      fetchAllClasses();
    }
  }, [classSearchResults]);

  return (
    <Container>
      {error && <h2>Error</h2>}
      {loading && <Loader isLoading={loading}/>}
      {!loading && (
        <>
        
      <Row className="text-center">
        <Col>
          <h2>Classes</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <LinkContainer to="/createClass">
            <Button variant="primary">Create Class</Button>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        {classes &&
          classes.map((cls) => {
            return (
              <Col key={cls.id} sm={12} md={6} lg={6}>
                <ClassComponent
                  id={cls.id}
                  name={cls.name}
                  subject={cls.subject}
                  professor={cls.professor}
                />
              </Col>
            );
          })}
      </Row>
      </>
      )}
    </Container>
  );
};

export default ClassesPage;
