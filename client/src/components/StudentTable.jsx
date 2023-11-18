import { Button } from "react-bootstrap";
import { leaveGroup } from "../api/student";
import Table from "react-bootstrap/Table";

const StudentTable = ({ students, groupId, setStudentDeleted }) => {
  const handleLeave = async (studentId) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ studentId, groupId }),
    };
    await leaveGroup(options);
    setStudentDeleted(true);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Major</th>
          <th>Grad Year</th>
          <th>School</th>
          <th>Leave</th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.major}</td>
                <td>{student.grad_year}</td>
                <td>{student.school}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleLeave(student.student_id)}
                  >
                    Leave
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default StudentTable;
