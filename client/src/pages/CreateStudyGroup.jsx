import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toastUtils";
import InputForm from "../components/InputForm";

const CreateStudyGroup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { name, description, location, time } = formData;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, location, time }),
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
        showToast("Study group created!", "success");
        navigate("/studyGroups");
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
          <Button className="fw-bold" variant="primary" type="submit">
            Create Group
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateStudyGroup;
