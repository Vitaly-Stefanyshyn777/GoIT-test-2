import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contact/contactsOps";

function ContactPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className="pageTitle">Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </>
  );
}

export default ContactPage;
