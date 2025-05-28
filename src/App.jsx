import RegisterPage from "./page/RegisterPage";
import ContactPage from "./page/ContactPage";
import HomePage from "./page/HomePage";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operation";
import PrivateRoute from "./components/route/PrivateRoute";
import PubliceRoute from "./components/route/PubliceRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        {/* <Route path={"/register"} element={<RegisterPage />}></Route> */}
        <Route
          path={"/register"}
          element={<PubliceRoute component={<RegisterPage />} />}
        ></Route>
        {/* <Route path={"/contact"} element={<ContactPage />}></Route> */}
        <Route
          path={"/contact"}
          element={<PrivateRoute component={<ContactPage />} />}
        ></Route>
        <Route
          path={"/login"}
          element={<PubliceRoute component={<LoginPage />} />}
        ></Route>

        {/* <Route path={"/login"} element={<LoginPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
