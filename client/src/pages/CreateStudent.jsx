import React from 'react'
import InputForm from "../components/InputForm";
import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { showToast } from '../utils/toastUtils';
import { useNavigate } from "react-router-dom";
export const CreateStudent = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        school: "",
        email: "",
        grad_year: "",
        major: "",
        phone_number: ""
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const {name, school, email, grad_year, major, phone_number} = formData

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, school, email, grad_year, major, phone_number}),
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(
            "http://localhost:3001/student/createStudent",
            requestOptions
          );
          const data = await response.json()
          console.log(data)
          if (!response.ok) {
            showToast(
              "Invalid input (Name, School, Email, and Grad Year are required) ",
              "error"
            );
          } else {
            showToast("Student created!", "success");
            navigate("/students");
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
                <Row>
                    <Col>
                    <InputForm
                        rows={1}
                        title={"Name"}
                        inputName={"name"}
                        formField={formData.name}
                        handleInputChange={handleInputChange}
                    />
                    </Col>
                    <Col>
                    <InputForm
                        rows={1}
                        title={"School"}
                        inputName={"school"}
                        formField={formData.school}
                        handleInputChange={handleInputChange}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <InputForm
                        rows={1}
                        title={"Major"}
                        inputName={"major"}
                        formField={formData.major}
                        handleInputChange={handleInputChange}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <InputForm
                        rows={1}
                        title={"Grad Year"}
                        inputName={"grad_year"}
                        formField={formData.grad_year}
                        handleInputChange={handleInputChange}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <InputForm
                        rows={1}
                        title={"Phone Number"}
                        inputName={"phone_number"}
                        formField={formData.phone_number}
                        handleInputChange={handleInputChange}
                    />
                    </Col>
                    <Col>
                    <InputForm
                        rows={1}
                        title={"Email"}
                        inputName={"email"}
                        formField={formData.email}
                        handleInputChange={handleInputChange}
                    />
                    </Col>
                </Row>
                
                <Button className="fw-bold" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
      </div>
    </div>
  )
}
