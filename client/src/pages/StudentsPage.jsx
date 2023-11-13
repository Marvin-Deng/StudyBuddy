import { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";
import StudentComponent from "../components/StudentComponent";

const StudentsPage = () => {
  const [students, setStudents] = useState();
  const [error, setError] = useState(false);
  const { studentSearchResults } = useContext(AppContext);

  useEffect(() => {
    const fetchAllStudents = async () => {
      const response = await fetch("http://localhost:3001/student/getAll");
      if (response.status != 200) {
        setError(true);
      } else {
        const data = await response.json();
        if (data) {
          setStudents(data);
        } else {
          setError(true);
          setStudents(null);
        }
      }
    };

    if (studentSearchResults && studentSearchResults.length > 0) {
      setStudents(studentSearchResults);
    } else {
      fetchAllStudents();
    }
  }, [studentSearchResults]);

  return (
    <Container>
      {error && <h2>Error</h2>}
      <Row>
        {students &&
          students.map((student) => {
            return (
              <Col key={student.id} sm={12} md={6} lg={6}>
                <StudentComponent
                  id={student.id}
                  name={student.name}
                  major={student.major}
                  grad_year={student.grad_year}
                  social_media={student.social_media}
                  phone_number={student.phone_number}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default StudentsPage;
