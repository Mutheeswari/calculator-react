import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Calculator" element={<Calculator/>} />
          <Route path="UserManagement" element={<UserManagement/>} />
          <Route path="prtmgnt" element={<ProductManagement/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);