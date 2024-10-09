import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectAuthUser } from "../redux/selectors";
import { apiLogout } from "../redux/operations";

import css from "./UserMenu.module.css";
import ModalWindow from "./ModalWindow";

const UserMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function handleLogout() {
    dispatch(apiLogout());
    openModal();
  }

  return (
    <div className={css.wrapper}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <button
        type="button"
        onClick={handleLogout}
      >
        Log Out
      </button>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      ></ModalWindow>
    </div>
  );
};

export default UserMenu