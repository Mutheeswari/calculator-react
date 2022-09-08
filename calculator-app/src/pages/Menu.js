import {NavLink} from "react-router-dom";
import "./App.css";
const Menu = () => {
    return (
      <nav>
        <ul>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName ="active"  to="/Home">Home</NavLink>
          </li>
          <li style = {{display:"inline"}}>
            <NavLink activeClassName ="active" to="/Calculator">Calculator</NavLink>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName ="active" to="/UserManagement">User Management</NavLink>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName ="active" to="/prtmgnt"> Product Management</NavLink>
          </li>
        </ul>
      </nav>
      
    )
  };
  
  export default Menu;
     