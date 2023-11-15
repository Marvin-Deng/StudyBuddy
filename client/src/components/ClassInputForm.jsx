import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import InputForm from "./InputForm";

const ClassInputForm = (props) => {
  
  const [classes, setClasses] = useState([]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ height: "100vh" }}
    >
      <div style={{ width: "50%" }}>
        <Form onSubmit={props.handleSubmit}>
          <InputForm
            rows={1}
            title={"Class Name"}
            inputName={"name"}
            formField={props.formData.name}
            handleInputChange={handleInputChange}
          />
          <InputForm
            rows={1}
            title={"Professor"}
            inputName={"professor"}
            formField={props.formData.professor}
            handleInputChange={handleInputChange}
          />
          <InputForm
            rows={1}
            title={"Subject"}
            inputName={"subject"}
            formField={props.formData.subject}
            handleInputChange={handleInputChange}
          />

          <Button className="fw-bold" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ClassInputForm;
