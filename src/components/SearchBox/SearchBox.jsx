import { useDispatch } from "react-redux";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";  

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterFieldId = useId();

  return (
    <div className="sub-card">
      <div className={styles.searchContainer}>
        <h2 className={styles.title}>Search for someone</h2>
        <label htmlFor={filterFieldId}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id={filterFieldId}
          placeholder="Enter search prompt..."
          className={styles.input}  
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;