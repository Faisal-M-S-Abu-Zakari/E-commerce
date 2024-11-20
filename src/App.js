import HomePage from "./Pages/Home/HomePage";
import Footer from "./components/utilites/Footer";
import NavBarLogin from "./components/utilites/NavBarLogin";
import LoginPage from "./Pages/Auth/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategory from "./Pages/Category/AllCategoryPage";
import BrandPage from "./Pages/Brand/BrandPage";
import ShowProductPage from "./Pages/Products/ShowProductPage";
import ProductPageDetailes from "./Pages/Products/ProductPageDetailes";
function App() {
  return (
    <div className="App">
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Allcategory" element={<AllCategory />} />
        <Route path="/Allbrand" element={<BrandPage />} />
        <Route path="/ShowProduct" element={<ShowProductPage />} />
        <Route path="/product/:id" element={<ProductPageDetailes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
