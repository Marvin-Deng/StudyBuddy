import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

const NavLink = ({ route, name, handleCategoryChange}) => {
  return (
    <LinkContainer to={route}>
      <Nav.Link
        className="mx-3 fs-5 fw-bold position-relative"
        onClick={() => handleCategoryChange(name)}
        style={{
          position: "relative",
          overflow: "hidden", 
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = "#007bff";
          e.currentTarget.querySelector(".underline").style.width = "100%";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = "#000";
          e.currentTarget.querySelector(".underline").style.width = "0";
        }}
      >
        {name}
        <span
          className="underline"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "0",
            height: "2px", 
            background: "#007bff",
            transition: "width 0.3s ease-in-out", 
          }}
        ></span>
      </Nav.Link>
    </LinkContainer>
  );
};

export default NavLink;
