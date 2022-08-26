import { Outlet, NavLink, useLocation} from "react-router-dom";
const Layout = () => {
    const location = useLocation();
    console.log(location);
    const active = {  
        color: "Green",  
        backgroundColor: "lightBlue",    
        fontFamily: "Arial"  
      };
  return (
    <>
      <nav>
        <ul>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName = {active}  to="/Home">Home</NavLink>
          </li>
          <li style = {{display:"inline"}}>
            <NavLink activeClassName = {active} to="/Calculator">Calculator</NavLink>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName = {active} to="/UserManagement">User Management</NavLink>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <NavLink activeClassName = {active} to="/prtmgnt"> Product Management</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
      
    </>
  )
};

export default Layout;