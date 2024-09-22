import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";

import { selectUserName } from "../../redux/auth/selectors"; 
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={styles.menuWrapper}>
      <p className={styles.greeting}>Welcome, {username}</p>
      <button onClick={() => dispatch(logoutThunk())} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;