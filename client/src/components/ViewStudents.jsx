import React, { useEffect } from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import TutorComponent from './StudentComponent';
const ViewStudents = ({students}) => {
    useEffect(() => {console.log(students)})

  return (
    <Container>
        <Row> 
            {students && students.map((student) => {
              return (<Col key={student.id} sm={12} md={6} lg={6}>
              <TutorComponent name={student.name} major="CS" grad_year={student.grad_year} desc="Needs help with classes"/>
                </Col>  )
            })}
            
        </Row>
    </Container>
  )
}

export default ViewStudents