import { Outlet, Link ,useLocation} from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname)
  console.log(location.pathname === "/home")
  const active = {  
    color: "lightBlue",  
    fontFamily: "Arial"  
  };
  const noactive = {  
    color: "red",  
    fontFamily: "Arial"  
  };
  return (
    <>
      <nav>
        <ul>
          <li className={`noactive ${location.pathname === "/home" ? "active" : ""}`} style={{display:"inline", padding:"10px"}}>
            <Link to="/home">Home</Link>
          </li>
          <li className={`noactive ${location.pathname === "/home" ? "active" : ""}`} style={{display:"inline",padding:"10px"}}>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;