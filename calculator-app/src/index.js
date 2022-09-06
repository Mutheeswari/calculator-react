import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="calculator" element={<Calculator/>} />
          <Route path="user-management" element={<UserManagement/>} />
          <Route path="prtmgnt" element={<ProductManagement/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);