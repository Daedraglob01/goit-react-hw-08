import { useSelector } from "react-redux";

import styles from "./ContactList.module.css";  

import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredItems = useSelector(selectFilteredContacts);

  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <h2 className={styles.title}>Check contacts list</h2>
        <p className={styles.count}>Length: {filteredItems.length}</p>
      </div>

      <ul className={styles.contactList}>
        {filteredItems.length ? (
          filteredItems.map((item) => <Contact item={item} key={item.id} />)
        ) : (
          <p>No contacts found</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;