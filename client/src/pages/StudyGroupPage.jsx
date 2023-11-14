import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader';
import GroupComponent from '../components/GroupComponent';
const StudyGroupPage = () => {
    const {id} = useParams()
    const [group, setGroup] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchStudyGroup = async () => {
          setLoading(true)
          const response = await fetch(`http://localhost:3001/group/${id}`);
            const data = await response.json();
            console.log(data[0])
            if (data) {
              setGroup(data[0]);
            } else {
              setGroup(null);
            }
            setLoading(false)
          
        };
    
        fetchStudyGroup();
      }, []);
  return (
    <Container>
        {loading ? (
            <Loader isLoading={loading}></Loader>
        ) : (
            <Row>
                <Col>
                    <GroupComponent id={group.id} name={group.name} description={group.description} location={group.location} time={group.time} class_id={group.class_id} detailedView={true}/>
                </Col>
            </Row>
        )}
    </Container>
  )
}

export default StudyGroupPage