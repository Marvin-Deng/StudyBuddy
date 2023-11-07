import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import StudentProfileComponent from '../components/StudentProfileComponent'
const StudentProfile = () => {
    const [student, setStudent] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    useEffect(() => {
        const fetchUserProfile = async() => {
            console.log(id)
            const response = await fetch(`http://localhost:3001/student/${id}`)
            if (response.status != 200){
                setError(true)
            } else {
                const data = await response.json()
                if (data){
                    setStudent(data[0])
                } else {
                    setError(true)
                    setStudent(null)
                }
                console.log(data)
            }
            setLoading(false)
        }

        fetchUserProfile()
        
    },[])
    return (
        <>
        <Container>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error</h2>}
        </Container>
        {student && (
            <StudentProfileComponent name={student.name} school={student.school} major={student.major} grad_year={student.grad_year}/>
        )}
        </>
    )
}

export default StudentProfile