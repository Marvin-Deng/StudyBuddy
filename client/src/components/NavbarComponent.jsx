import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../contexts/AppContext";
import { LinkContainer } from "react-router-bootstrap";
import { filterStudents } from "../api/student";
import { filterGroups } from "../api/group";
import { filterClasses } from "../api/class";
import InputForm from "./InputForm";
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
  const [currentCategory, setCurrentCategory] = useState("Study Groups");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  const searchStudents = async (e) => {
    e.preventDefault();
    updateSearchResults(await filterStudents(searchString), currentCategory);
  };

  const searchClasses = async (e) => {
    e.preventDefault();
    updateSearchResults(await filterClasses(searchString), currentCategory);
  };

  const searchGroups = async (e) => {
    e.preventDefault();
    updateSearchResults(await filterGroups(searchString), currentCategory);
  };

  const selectFilterFunction = async (e) => {
    switch (currentCategory) {
      case "Students":
        return await searchStudents(e);
      case "Classes":
        return await searchClasses(e);
      case "Study Groups":
        return await searchGroups(e);
      default:
        return null;
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#FFFFCC" }}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className="fs-5 fw-bold">
            TutorMe
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavLink
              route="/"
              name="Study Groups"
              handleCategoryChange={setCurrentCategory}
            />
            <NavLink
              route="/students"
              name="Students"
              handleCategoryChange={setCurrentCategory}
            />
            <NavLink
              route="/classes"
              name="Classes"
              handleCategoryChange={setCurrentCategory}
            />
          </Nav>
        </Navbar.Collapse>
        <Form onSubmit={selectFilterFunction} className="mt-2 d-flex">
          <div className="col">
            <InputGroup className="mb-3">
              <InputForm
                key={currentCategory}
                formField={searchString}
                handleInputChange={handleInputChange}
                placeholder={`Search for ${currentCategory}`}
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
