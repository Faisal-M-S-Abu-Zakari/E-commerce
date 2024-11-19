import HomePage from "./Pages/Home/HomePage";
import Footer from "./components/utilites/Footer";
import NavBarLogin from "./components/utilites/NavBarLogin";
import LoginPage from "./Pages/Auth/LoginPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
