import { useEffect, useState } from "react";
import { Container, Button, Row, Form, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { getAllStudents, joinGroup } from "../api/student";
import { getGroupById } from "../api/group";
import { getClassById } from "../api/class";
import Loader from "../components/Loader";

const JoinGroup = () => {
  const navigate = useNavigate();
  const [group, setGroup] = useState({});
  const [class_, setClass_] = useState({});
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getGroupAndClass = async () => {
      setLoading(true);
      const group_data = await getGroupById(id);
      setGroup(group_data[0]);

      const class_data = await getClassById(group_data[0].class_id);
      setClass_(class_data[0]);
      setLoading(false);
    };

    const fetchStudents = async () => {
      const data = await getAllStudents();
      setStudents(data);
      setStudent(data[0].id);
    };

    getGroupAndClass();
    fetchStudents();
  }, []);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ studentId: student, groupId: id }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const joinGroupResponse = await joinGroup(options);
    if (joinGroupResponse.success) {
      navigate(`/group/${id}`);
    }
  };

  return (
    <Container>
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <>
          <Row>
            <h1>Study group name: {group.name}</h1>
            <h2>
              Class: {class_.name} ({class_.subject})
            </h2>
            <h2>Professor: {class_.professor}</h2>
          </Row>
          <LinkContainer to="/register">
            <Button>Create User</Button>
          </LinkContainer>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Choose User</Form.Label>
                  <Form.Select
                    name="student"
                    value={student}
                    className="mb-3"
                    onChange={(e) => setStudent(e.target.value)}
                  >
                    {students &&
                      students.map((stdnt) => {
                        return (
                          <option key={stdnt.id} value={stdnt.id}>
                            {stdnt.name}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit">Join</Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default JoinGroup;
