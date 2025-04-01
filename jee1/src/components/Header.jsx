import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaSearch, FaBell, FaUser, FaBars } from "react-icons/fa";
import { useState } from "react";
import "../style/Header.css"; 

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="md" className="shadow-sm px-3">
      <Container fluid>
        {/* Left Side - Logo & Toggle Button */}
        <Navbar.Brand className="fw-bold">Jee1</Navbar.Brand>
        <Button variant="light" className="d-md-none" onClick={() => setExpanded(!expanded)}>
          <FaBars size={22} />
        </Button>

        {/* Collapsible Section */}
        <Navbar.Collapse in={expanded} className="mt-2 mt-md-0">
          <Form className="d-flex flex-grow-1 mx-md-3">
            <FormControl type="text" placeholder="Search..." className="me-2" />
          </Form>

          {/* Right Side Icons */}
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <FaSearch size={20} className="text-dark d-md-none" />
            <FaBell size={20} className="text-dark" />
            <FaUser size={20} className="text-dark" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
