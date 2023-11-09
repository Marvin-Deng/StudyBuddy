import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const StudentComponent = ({id,name,major,grad_year,social_media,phone_number}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Subtitle>
                {major} (Graduating {grad_year})
            </Card.Subtitle>
            <Card.Text>
                {social_media} - {phone_number}
            </Card.Text>
            <LinkContainer to={`student/${id}`}>
                    <Button>View profile</Button>
            </LinkContainer>
        </Card.Body>
    </Card>
  )
}

export default StudentComponent