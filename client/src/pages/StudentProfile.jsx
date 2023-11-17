import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getStudentById } from "../api/student";
import StudentProfileComponent from "../components/StudentProfileComponent";

const StudentProfile = () => {
  const [student, setStudent] = useState();
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setStudent(await getStudentById(id));
      } catch (error) {
        setError(true);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <Container>
      {error && <h2>Error</h2>}
      {student && (
        <StudentProfileComponent
          name={student.name}
          school={student.school}
          major={student.major}
          grad_year={student.grad_year}
        />
      )}
    </Container>
  );
};

export default StudentProfile;
