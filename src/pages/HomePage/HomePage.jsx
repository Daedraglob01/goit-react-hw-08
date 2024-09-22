import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className={styles.contactSection}>
        <div className={styles.contentWrapper}>
          <h1>Your Phonebook</h1>
          <p>Welcome to your contact book!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;