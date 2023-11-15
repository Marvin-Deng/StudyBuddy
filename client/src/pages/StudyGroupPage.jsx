import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import GroupComponent from "../components/GroupComponent";
import {useParams} from "react-router-dom"
import StudentTable from "../components/StudentTable";
const StudyGroupPage = () => {
  const { id } = useParams()
  const [group, setGroup] = useState({});
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudyGroup = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/group/${id}`);
      const data = await response.json();
      // console.log(data[0]);
      if (data) {
        setGroup(data[0]);
      } else {
        setGroup(null);
      }
      setLoading(false);
    };
    const fetchStudentsForGroup = async() => {
      const response = await fetch(`http://localhost:3001/group/studentsInGroup/${id}`);
      const data = await response.json()
      if (data.success){
        setStudents(data.data)
      } else {
        setStudents(null)
      }
      console.log(data.data)
    }

    fetchStudyGroup();
    fetchStudentsForGroup()
  }, []);
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
            />
          </Col>
        </Row>
        <Row>
          <Col> 
          {students ? (
            <StudentTable students={students}/>
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
