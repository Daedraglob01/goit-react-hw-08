import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import styles from "./Contact.module.css";  

import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "../../redux/contacts/operations";

export const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactDetails}>
        <p>
          <FaUser className={styles.contactIcon} />
          {item.name}
        </p>
        <p>
          <FaPhoneAlt className={styles.contactIcon} />
          {item.number}
        </p>
      </div>
      <button 
        className={styles.deleteButton} 
        onClick={() => dispatch(deleteContactsThunk(item.id))}
      >
        Delete
      </button>
    </div>
  );
};