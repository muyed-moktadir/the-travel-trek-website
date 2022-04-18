import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Services from "./pages/Home/Services/Services";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Footer from "./pages/Shared/Footer/Footer";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import CheckOut from "./pages/Checkout/CheckOut";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
