import { Outlet, Link, useLocation} from "react-router-dom";

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
          <li className={(location.pathname === "/Home" ? active : "")} style = {{display:"inline", padding:"10px"}}>
            <Link to="/Home">Home</Link>
          </li>
          <li style = {{display:"inline"}}>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <Link to="/UserManagement">User Management</Link>
          </li>
          <li style = {{display:"inline", padding:"10px"}}>
            <Link to="/prtmgnt"> Product Management</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
      
    </>
  )
};

export default Layout;