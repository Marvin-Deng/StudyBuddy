import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { showToast } from '../utils/toastUtils';
import { useNavigate } from 'react-router-dom';
const StudentTable = ({students,groupId,setStudentDeleted}) => {
  const navigate = useNavigate()
  const handleLeave = async(studentId) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ studentId, groupId }),
    };
    try {
      const response = await fetch(
        "http://localhost:3001/student/leaveGroup",
        requestOptions
      );
      if (!response.ok) {
        showToast(
          "An error occured.",
          "error"
        );
      } else {
        showToast("Student removed", "success");
        
      }
    } catch (error) {
      showToast(
        "Error: Something went wrong. Please try again later.",
        "error"
      );
    }
    setStudentDeleted(true)
    // navigate(`/group/${groupId}`);
    // console.log(studentId,groupId)
  }
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
        {students && students.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>{student.grad_year}</td>
                    <td>{student.school}</td>
                    <td><Button variant='outline-danger' onClick={() => handleLeave(student.student_id)}>Leave</Button></td>
                </tr>
            )
        })}
      </tbody>
    </Table>
  )
}

export default StudentTable