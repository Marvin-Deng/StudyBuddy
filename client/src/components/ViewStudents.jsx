import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import TutorComponent from './StudentComponent';
const ViewStudents = () => {
    const mockData = [
        {
            id: 1,
            name: "Patrick B",
            major: "Computer Science",
            grad_year: 2026
        },
        {
            id: 2,
            name: "Marvin D",
            major: "Computer Science",
            grad_year: 2026
        }, 
        {
            id: 3,
            name: "John S",
            major: "Chemistry",
            grad_year: 2025
        }
    ]
  return (
    <Container>
        <Row> 
            {mockData.map((tutor) => {
              return (<Col key={tutor.id} sm={12} md={6} lg={6}>
              <TutorComponent name={tutor.name} major={tutor.major} grad_year={tutor.grad_year} desc="Needs help with classes"/>
                </Col>  )
            })}
            
        </Row>
    </Container>
  )
}

export default ViewStudents