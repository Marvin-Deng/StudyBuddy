import React, { useState, useEffect } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ViewClasses from '../components/ViewClasses'
const Classes = () => {
    const [classes,setClasses] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchAllClasses = async() => {
            setLoading(true)
            const response = await fetch("http://localhost:3001/class/getAll")
            if (response.status!=200){
                setError(true)
            } else {
                const data = await response.json()
                if (data){
                    setClasses(data)
                } else {
                    setError(true)
                }
                console.log(data)
            }
            
            setLoading(false)
        }
        fetchAllClasses()
    },[])
  return (
    <div>
        <Container>
            <Row  className='text-center'>
                <Col><h2>Classes</h2></Col>
            </Row>
            <Row>
                <Col>
                <LinkContainer to="/"> 
                    <Button variant="primary">Create Class</Button>
                </LinkContainer>
                </Col>
            </Row>
        </Container>
        <Container>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error</h2>}
        </Container>
        <ViewClasses classes={classes}/>
            

    </div>
  )
}

export default Classes