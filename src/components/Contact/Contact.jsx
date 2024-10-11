import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";
import toast from "react-hot-toast";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
    toast.success("Your contact deleted sucsessfuly", { duration: 1500 });
  };

  return (
    <li className={css.contactWrapper}>
      <div className={css.wrapper}>
        <FaUser />
        <h3>{name}</h3>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>

      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
