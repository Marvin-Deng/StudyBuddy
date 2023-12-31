import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import InputForm from "./InputForm";
import { showToast } from "../utils/toastUtils";
import { useNavigate } from "react-router-dom";
import { getAllClasses } from "../api/class";

const GroupInputForm = (props) => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getAllClasses();
        if (data.length <= 0) {
          showToast(
            "Create at least one class before attempting to create a study group.",
            "error"
          );
          navigate("/");
        } else {
          setClasses(data);
          props.setFormData((prevFormData) => ({
            ...prevFormData,
            class_id: data[0].id,
          }));
        }
      } catch (error) {
        showToast("Error fetching classes:", "error");
      }
    };

    fetchClasses();
  }, []);

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
            title={"Group Name"}
            inputName={"name"}
            formField={props.formData.name}
            handleInputChange={handleInputChange}
          />
          <InputForm
            rows={3}
            placeholder={"(optional)"}
            title={"Description"}
            inputName={"description"}
            formField={props.formData.description}
            handleInputChange={handleInputChange}
          />
          <Row>
            <Col>
              <InputForm
                rows={1}
                title={"Location"}
                inputName={"location"}
                formField={props.formData.location}
                handleInputChange={handleInputChange}
              />
            </Col>
            <Col>
              <InputForm
                rows={1}
                title={"Time"}
                inputName={"time"}
                formField={props.formData.time}
                handleInputChange={handleInputChange}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Choose Class</Form.Label>
            <Form.Select
              name="class_id"
              value={props.formData.class_id}
              className="mb-3"
              onChange={handleInputChange}
            >
              {classes &&
                classes.map((cls) => {
                  return (
                    <option key={cls.id} value={cls.id}>
                      {cls.name}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>

          <Button className="fw-bold" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default GroupInputForm;
