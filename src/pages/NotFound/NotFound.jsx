import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.errorSection}>
        <div className={styles.messageWrapper}>
          <h1>Page not found</h1>
          <p>{`Sorry, the page you are looking for does not exist.`}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;