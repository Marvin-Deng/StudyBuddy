import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const ClassComponent = ({id,name,subject,professor}) => {
  return (
    <Card className='display-card'>
        <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Text>
                {subject} - {professor}
            </Card.Text>
            <LinkContainer to={`classs/join/${id}`}>
                    <Button>Join Class</Button>
            </LinkContainer>
        </Card.Body>
    </Card>
  )
}

export default ClassComponent