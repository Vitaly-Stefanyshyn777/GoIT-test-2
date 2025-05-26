import RegisterPage from "./page/RegisterPage";
import ContactPage from "./page/ContactPage";
import HomePage from "./page/HomePage";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/register"} element={<RegisterPage />}></Route>
        <Route path={"/contact"} element={<ContactPage />}></Route>
        <Route path={"/login"} element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
