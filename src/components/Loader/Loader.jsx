import { RotatingLines } from "react-loader-spinner";

import styles from "./Loader.module.css";  

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <RotatingLines
        visible={true}
        height="25"
        width="25"
        color="black"
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;