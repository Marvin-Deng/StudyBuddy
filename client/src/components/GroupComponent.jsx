import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getClassById } from "../api/class"
import { deleteGroup } from "../api/group"

const GroupComponent = ({
  id,
  name,
  description,
  location,
  time,
  class_id,
  detailedView,
  setRefetch
}) => {
  const navigate = useNavigate()
  const [class_, setClass_] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getClass = async () => {
      setLoading(true)
      const classResponse = await getClassById(class_id)
      setClass_(classResponse[0]);
      setLoading(false)
    };
    if (class_id){
      getClass();
    }
    
  }, []);

  const handleDelete = async() => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    };
    const data = await deleteGroup(id, options)
    if (data.success){
      navigate('/')
      setRefetch(true)
    }
  }
  
  return (
    <Card className="display-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <span className="mb-3">
            {loading ? (
              <span>Loading class info...</span>
            ) : (
              <>
              {class_ && class_.name} with professor {class_ && class_.professor}
              </>
            )}
            
          </span>
          <br />
          <span className="mb-3">
            {location} - {time}
          </span>
          <br />
          <span className="mb-3">{description}</span>
        </Card.Text>
        {!detailedView && (
          <>
            <Link className="m-1" to={`joinGroup/${id}`}>
              <Button variant="outline-success">Join Group</Button>
            </Link>
            <LinkContainer className="m-1" to={`/group/${id}`}>
              <Button variant="outline-primary">View Group</Button>
            </LinkContainer>
          </>
        )}
        {detailedView && (
          <>
          <Link
          to={`/editGroup/?id=${id}&name=${name}&description=${description}&location=${location}&time=${time}&class_id=${class_id}`}
          className="m-1"
        >
          <Button variant="outline-warning">Edit Group</Button>
        </Link>
        
          <Button onClick={handleDelete} variant="outline-danger">Delete Group</Button>
          </>
          
        )}
      </Card.Body>
    </Card>
  );
};

export default GroupComponent;
