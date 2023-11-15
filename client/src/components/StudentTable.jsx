import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
const StudentTable = ({students}) => {
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
                    <td><Button variant='outline-danger'>Leave</Button></td>
                </tr>
            )
        })}
      </tbody>
    </Table>
  )
}

export default StudentTable