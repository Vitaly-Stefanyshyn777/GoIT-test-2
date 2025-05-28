import { Navigate } from "react-router-dom";
import { selektIsLoginIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component }) {
  const isLoginIn = useSelector(selektIsLoginIn);
  return !isLoginIn ? <Navigate to="/login" /> : Component;
}

export default PrivateRoute;
