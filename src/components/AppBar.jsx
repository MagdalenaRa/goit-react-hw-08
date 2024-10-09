import { useSelector } from "react-redux";

import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

import { selectAuthIsLoggedIn } from "../redux/selectors";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.headerNav}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;