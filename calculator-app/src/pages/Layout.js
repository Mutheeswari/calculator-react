import { Outlet, NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import "./App.css";
const Layout = () => {
  return (
    <>
 <Nav>
    <Nav.Item>
        <Nav.Link href="/Home">Home</Nav.Link>
     </Nav.Item>
     <Nav.Item>
        <Nav.Link href="/Calculator">Calculator</Nav.Link>
     </Nav.Item>
     <Nav.Item>
        <Nav.Link href="/UserManagement">User Management</Nav.Link>
     </Nav.Item>
     <Nav.Item>
        <Nav.Link href="/prtmgnt">Product Management</Nav.Link>
     </Nav.Item>
     </Nav>
      <Outlet/>
      
    </>
  )
};

export default Layout;