import { Outlet, NavLink} from "react-router-dom";
import { Container, Nav , Navbar} from 'react-bootstrap';
import "./App.css";
const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid={true}>

          <Nav className="me-auto">
          <NavLink className = "nav-link" activeClassName ="active"  to="/home">Home</NavLink>
          <NavLink className = "nav-link" activeClassName ="active" to="/calculator">Calculator</NavLink>
          <NavLink className = "nav-link" activeClassName ="active" to="/user-management">User Management</NavLink>
          <NavLink className = "nav-link" activeClassName ="active" to="/prtmgnt">Product Management</NavLink>
          <NavLink className = "nav-link" activeClassName ="active" to="/taskmgnt">Task Management</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
      
    </>
  )
};

export default Menu;