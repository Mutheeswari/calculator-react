import { Outlet, NavLink} from "react-router-dom";
import { Container, Nav , Navbar} from 'react-bootstrap';
import "./App.css";
const Menu = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName ="active"  to="/home">Home</NavLink>
          </li>
          <li style = {{display:"inline"}}>
            <NavLink activeClassName ="active" to="/calculator">Calculator</NavLink>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName ="active" to="/user-management">User Management</NavLink>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName ="active" to="/prtmgnt"> Product Management</NavLink>
          </li>
        </ul>
      </nav> */}
      <Navbar bg="dark" variant="dark">
        <Container fluid={true}>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
          <NavLink className = "nav-link" activeClassName ="active"  to="/home">Home</NavLink>
          <NavLink className = "nav-link" activeClassName ="active" to="/calculator">Calculator</NavLink>
          <NavLink className = "nav-link" activeClassName ="active" to="/user-management">User Management</NavLink>
          <NavLink className = "nav-link" activeClassName ="active" to="/prtmgnt">Product UserManagement</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
      
    </>
  )
};

export default Menu;