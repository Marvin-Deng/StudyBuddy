import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../contexts/AppContext";
import { showToast } from "../utils/toastUtils";
import { LinkContainer } from "react-router-bootstrap";
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

  const filterStudents = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/student/search/${searchString}`;
    await fetchData(url);
  };

  const filterClasses = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/class/search/${searchString}`;
    await fetchData(url);
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length === 0 || data.length === undefined) {
        showToast(`No results found for "${searchString}"`, "error");
      } else {
        updateSearchResults(data, currentCategory);
        showToast(
          `Showing results for "${searchString}"`,
          "success"
        );
      }
    } catch (error) {
      showToast(
        "Error: Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  const selectFilterFunction = async (e) => {
    switch (currentCategory) {
      case "Students":
        return await filterStudents(e);
      case "Classes":
        return await filterClasses(e);
      default:
        return null
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
