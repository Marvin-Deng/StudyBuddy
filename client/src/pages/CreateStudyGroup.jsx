import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toastUtils";
import InputForm from "../components/InputForm";

const CreateStudyGroup = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([])

  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    time: "",
    class_id: ""
  });

  useEffect(() => {
    const getAllClasses = async() => {
      const response = await fetch('http://localhost:3001/class/getAll')
      const data = await response.json()
      // console.log(data)
      setClasses(data)
      //By default the class_id will be equal to the ID of the first element found in classes
      //I would set this to ID 1 but if that class is deleted this would cause errors
      setFormData((prevFormData) => ({
        ...prevFormData,
        class_id: data[0].id,
      }));
    }
    getAllClasses()
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { name, description, location, time,class_id } = formData;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, location, time,class_id }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/group/createGroup",
        requestOptions
      );
      if (!response.ok) {
        showToast(
          "Invalid input (Group Name, Time, and Location are required) ",
          "error"
        );
      } else {
        const data = await response.json()
        console.log(data)
        showToast("Study group created!", "success");
        navigate("/");
      }
    } catch (error) {
      showToast(
        "Error: Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ height: "100vh" }}
    >
      <div style={{ width: "50%" }}>
        <Form onSubmit={handleSubmit}>
          <InputForm
            rows={1}
            title={"Group Name"}
            inputName={"name"}
            formField={formData.name}
            handleInputChange={handleInputChange}
          />
          <InputForm
            rows={3}
            placeholder={"(optional)"}
            title={"Description"}
            inputName={"description"}
            formField={formData.description}
            handleInputChange={handleInputChange}
          />
          <Row>
            <Col>
              <InputForm
                rows={1}
                title={"Location"}
                inputName={"location"}
                formField={formData.location}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col>
              <InputForm
                rows={1}
                title={"Time"}
                inputName={"time"}
                formField={formData.time}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
          <Form.Label>Choose Class</Form.Label>
          <Form.Select name="class_id" value={formData.class_id} className="mb-3" onChange={handleInputChange}>
            {classes && classes.map(cls => {
              return <option key={cls.id} value={cls.id}>{cls.name}</option>
              })
            }
          </Form.Select>
          </Form.Group>
          
          <Button className="fw-bold" variant="primary" type="submit">
            Create Group
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateStudyGroup;
