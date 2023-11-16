import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { showToast } from "../utils/toastUtils";
const ClassComponent = ({ id, name, subject, professor, setRefetch }) => {

  const handleDelete = async() => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      
    };
    const response = await fetch(`http://localhost:3001/class/deleteClass/${id}`, requestOptions)
    const data = await response.json()
    if (data.success){
      showToast("Class deleted", "success");
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
          {subject} - {professor}
        </Card.Text>
        <Link
          className="m-1"
          to={`editClass/?id=${id}&name=${name}&subject=${subject}&professor=${professor}`}
        >
          <Button variant="outline-primary">Edit Class</Button>
        </Link>
      
          <Button onClick={handleDelete} variant="outline-danger">Delete Class</Button>

      </Card.Body>
    </Card>
  );
};

export default ClassComponent;
