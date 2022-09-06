import { Outlet, NavLink} from "react-router-dom";
import "./App.css";
const Menu = () => {
  return (
    <>
      <nav>
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
      </nav>
      <Outlet/>
      
    </>
  )
};

export default Menu;