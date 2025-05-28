import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selektIsLoginIn } from "../../redux/auth/selectors";

function PubliceRoute({ component: Component }) {
  const isLoginIn = useSelector(selektIsLoginIn);
  return !isLoginIn ? Component : <Navigate to="/contact" />;
}

export default PubliceRoute;
