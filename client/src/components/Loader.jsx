import { Row, Spinner } from 'react-bootstrap'

const Loader = ({isLoading}) => {
  return (
    <>
     {isLoading && (
        <Row className='justify-content-center align-items-center'>
            <Spinner animation="border" />
        </Row>
    )}
    </>
  )
}

export default Loader