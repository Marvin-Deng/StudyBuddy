import React, { useEffect, useState } from 'react'
import ViewStudents from '../components/ViewStudents'
import { Container } from 'react-bootstrap'
const ViewAllStudents = () => {
    const [students,setStudents] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        const fetchAllStudents = async() => {
            setLoading(true)
            const response = await fetch('http://localhost:3001/student/getAll')
            if (response.status != 200){
                setError(true)
            } else {
                const data = await response.json()
                if (data){
                    setStudents(data)
                } else {
                    setError(true)
                    setStudents(null)
                }
                console.log(data)
            }
            setLoading(false)
            }
        fetchAllStudents()
    
    },[])
  return (
    <>
    <Container>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error</h2>}
    </Container>
    
    <ViewStudents students={students}/>
    </>
  )
}

export default ViewAllStudents