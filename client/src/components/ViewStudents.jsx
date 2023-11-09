import React, { useEffect } from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import StudentComponent from './StudentComponent';
const ViewStudents = ({students}) => {
    useEffect(() => {console.log(students)})

  return (
    <Container>
        <Row> 
            {students && students.map((student) => {
              return (<Col key={student.id} sm={12} md={6} lg={6}>
              <StudentComponent id={student.id} name={student.name} major={student.major} grad_year={student.grad_year} social_media={student.social_media} phone_number={student.phone_number}/>
                </Col>  )
            })}
            
        </Row>
    </Container>
  )
}

export default ViewStudents