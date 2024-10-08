import { RotatingLines } from "react-loader-spinner";

import styles from "./Refresher.module.css";  

const Refresher = () => {
  return (
    <div className={styles.refresherContainer}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="white"
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Refresher;