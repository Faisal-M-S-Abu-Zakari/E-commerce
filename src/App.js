import HomePage from "./Pages/Home/HomePage";
import Footer from "./components/utilites/Footer";
import NavBarLogin from "./components/utilites/NavBarLogin";
import LoginPage from "./Pages/Auth/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategory from "./Pages/Category/AllCategoryPage";
function App() {
  return (
    <div className="App">
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Allcategory" element={<AllCategory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
