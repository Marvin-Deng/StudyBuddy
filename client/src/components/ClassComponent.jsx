import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteClass } from "../api/class";

const ClassComponent = ({ id, name, subject, professor, setRefetch }) => {
  const handleDelete = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (await deleteClass(id, options).success) {
      showToast("Class deleted", "success");
      setRefetch(true);
    }
  };

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

        <Button onClick={handleDelete} variant="outline-danger">
          Delete Class
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ClassComponent;
