import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getGroupById, getStudentsInGroup } from "../api/group";
import StudentTable from "../components/StudentTable";
import Loader from "../components/Loader";
import GroupComponent from "../components/GroupComponent";

const StudyGroupPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState({});
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [studentDeleted, setStudentDeleted] = useState(true);
  const [refetch, setRefetch] = useState(false)
  useEffect(() => {
    const fetchStudyGroup = async () => {
      setLoading(true);
      const data = await getGroupById(id);
      if (data) {
        setGroup(data[0]);
      } else {
        setGroup(null);
      }
      setLoading(false);
    };

    const fetchStudentsInGroup = async () => {
      const data = await getStudentsInGroup(id);
      if (data.success) {
        setStudents(data.data);
      } else {
        setStudents(null);
      }
      setStudentDeleted(false);
    };

    fetchStudyGroup();
    if (studentDeleted) {
      fetchStudentsInGroup();
    }
  }, [studentDeleted]);

  return (
    <Container>
      {loading ? (
        <Loader isLoading={loading}></Loader>
      ) : (
        <>
          <Row>
            <Col>
              <GroupComponent
                id={group.id}
                name={group.name}
                description={group.description}
                location={group.location}
                time={group.time}
                class_id={group.class_id}
                detailedView={true}
                setRefetch={setRefetch}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {students ? (
                <StudentTable
                  students={students}
                  groupId={group.id}
                  setStudentDeleted={setStudentDeleted}
                />
              ) : (
                <h1>No students in this group.</h1>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default StudyGroupPage;
