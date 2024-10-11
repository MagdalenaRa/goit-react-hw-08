import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

const UserMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const user = useSelector(selectAuthUser);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={css.wrapper}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <button
        type="button"
        onClick={() => {
          //dispatch(apiLogout());
          openModal();
        }}
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

export default UserMenu;
