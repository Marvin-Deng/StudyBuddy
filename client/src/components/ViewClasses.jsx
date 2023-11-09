import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import ClassComponent from './ClassComponent';
const ViewClasses = ({classes}) => {
  return (
    <Container>
    <Row> 
        {classes && classes.map((cls) => {
          return (<Col key={cls.id} sm={12} md={6} lg={6}>
          <ClassComponent id={cls.id} name={cls.name} subject={cls.subject} professor={cls.professor}/>
            </Col>  )
        })}
        
    </Row>
</Container>
  )
}

export default ViewClasses