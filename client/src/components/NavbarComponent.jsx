import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import InputForm from "./InputForm";
import { AppContext } from "../contexts/AppContext";
import { showToast } from "../utils/toastUtils";
import { LinkContainer } from "react-router-bootstrap";
import NavLink from "./NavLink";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

const NavbarComponent = () => {
  const { updateSearchResults } = useContext(AppContext);
  const [searchString, setSearchString] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3001/student/search/${searchString}`
      );
      const data = await response.json();
      if (data.length === 0 || data.length === undefined) {
        showToast(`No results found for "${searchString}"`, "error");
      } else {
        updateSearchResults(data);
      }
    } catch (error) {
      showToast(
        "Error: Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className="fs-5 fw-bold">
            TutorMe
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse> 
          <Nav className="ms-auto">
            <NavLink route="/" name="Study Groups" />
            <NavLink route="/students" name="Students" />
            <NavLink route="/classes" name="Classes" />
          </Nav>
        </Navbar.Collapse>
        <Form onSubmit={handleSubmit} className="mt-2 d-flex">
          <div className="col">
            <InputGroup className="mb-3">
              <InputForm
                formField={searchString}
                handleInputChange={handleInputChange}
                placeholder={"Search for students"}
              />
            </InputGroup>
          </div>
          <Button
            variant="outline-secondary"
            type="submit"
            className=" mt-4 h-100 "
          >
            <FaSearch />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
