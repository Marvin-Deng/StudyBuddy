import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createClass } from "../api/class"
import InputForm from "../components/InputForm";

const CreateClassPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    professor: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClass(options)
    navigate("/classes")
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
          <Row>
            <Col>
              <InputForm
                rows={1}
                title={"Subject"}
                inputName={"subject"}
                formField={formData.subject}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col>
              <InputForm
                rows={1}
                title={"Professor"}
                inputName={"professor"}
                formField={formData.professor}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>
          <Button className="fw-bold" variant="primary" type="submit">
            Create Class
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateClassPage;
