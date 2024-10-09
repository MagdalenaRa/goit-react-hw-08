import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../redux/selectors";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 

const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};
RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;