import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice";
import { changeFilter } from "../redux/filtersSlice";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";

function App() {
  const dispatch = useDispatch();

  // Дістаємо стан із Redux
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  // Фільтрація контактів
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Додавання контакту
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  // Видалення контакту
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  // Зміна фільтра
  const handleChangeFilter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox inputValue={filter} setInputValue={handleChangeFilter} />
      <ContactList
        abonents={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
