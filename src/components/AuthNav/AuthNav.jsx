import { NavLink } from "react-router-dom";

import styles from "./AuthNav.module.css";  

const AuthNav = () => {
  return (
    <div className={styles.authContainer}>
      <NavLink to="/register" className={styles.authLink}>
        Registration
      </NavLink>
      <NavLink to="/login" className={styles.authLink}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;