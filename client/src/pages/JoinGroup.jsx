import React, { useEffect, useState } from 'react'
import { Container, Button, Row, Spinner, Form, Col } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { showToast } from "../utils/toastUtils";
import Loader from '../components/Loader';
const JoinGroup = () => {
    const [group, setGroup] = useState({})
    const [class_, setClass_] = useState({})
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState()
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    useEffect(() => {
        const getGroupAndClass = async() => {
            setLoading(true)
            const group_response = await fetch(`http://localhost:3001/group/${id}`)
            const group_data = await group_response.json()
            // console.log(data[0])
            setGroup(group_data[0])
            
            const class_response = await fetch(`http://localhost:3001/class/${group_data[0].class_id}`)
            const class_data = await class_response.json()
            setClass_(class_data[0])
            setLoading(false)
        }

        const getAllStudents = async() => {
          console.log()
            const response = await fetch("http://localhost:3001/student/getAll")
            const data = await response.json()
            // console.log(data)
            setStudents(data)
            setStudent(data[0].id)
        }
        getGroupAndClass()
        getAllStudents()
    },[])

    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId: student, groupId: id}),
      };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3001/student/joinGroup`, requestOptions)
            const data = await response.json()
            console.log(data)
            if (!response.ok || data.success == false) {
              showToast(
                data.message,
                "error"
              );
            } else {
              showToast("Class joined!", "success");
              Navigate("/");
            }
        } catch(err) {
            
        }
    }
  return (
    <Container>
        {loading ? (
   
            <Loader isLoading={loading}/>

        
            
            
        ) : (
            <>
        <Row>
            <h1>Study group name: {group.name}</h1>
            <h2>Class: {class_.name} ({class_.subject})</h2>
            <h2>Professor: {class_.professor}</h2>
            
        </Row>
        <LinkContainer to='/register'>
            <Button>Create User</Button>
        </LinkContainer>
        
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>Choose User</Form.Label>
                    <Form.Select name="student" value={student} className="mb-3" onChange={(e) => setStudent(e.target.value)}>
                        {students && students.map((stdnt) => {
                            return <option key={stdnt.id} value={stdnt.id}>{stdnt.name}</option>
                        })}
                    </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            
            <Button type="submit">Join</Button>
        </Form>
        
        </>
        )}
        
    </Container>
  )
}

export default JoinGroup