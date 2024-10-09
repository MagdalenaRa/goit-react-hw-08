import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import Error from "../components/Error";

import { fetchContacts } from "../redux/operations-contacts";
import { selectError, selectLoading } from "../redux/selectors-contacts";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;