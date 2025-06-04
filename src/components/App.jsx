import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="main">
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <strong>Loading contacts? please wait...</strong>}
      <ContactList />
    </div>
  );
}

export default App;
