import { Suspense } from "react";
import PropTypes from 'prop-types';
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;