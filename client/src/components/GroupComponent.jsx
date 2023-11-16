import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { showToast } from "../utils/toastUtils";
import { useNavigate } from "react-router-dom";
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
    const getClassByID = async () => {
      setLoading(true)
      const response = await fetch(`http://localhost:3001/class/${class_id}`);
      const data = await response.json();
      setClass_(data[0]);
      setLoading(false)
    };
    getClassByID();
  }, []);

  const handleDelete = async() => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    };
    const response = await fetch(`http://localhost:3001/group/deleteGroup/${id}`, requestOptions)
    const data = await response.json()
    if (data.success){
      showToast("Class deleted", "success");
      navigate('/')
      setRefetch(true)
    } else {
      showToast(
        "An error occured. ",
        "error"
      );
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
