import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; 

import styles from "./AppBar.module.css"; 

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.appBar}>
      <nav className={styles.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;