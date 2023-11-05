import React from 'react'
import { Card } from 'react-bootstrap'
const StudentComponent = ({name,major,grad_year,desc}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Subtitle>
                {major} - {grad_year}
            </Card.Subtitle>
            <Card.Text>
                {desc}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default StudentComponent