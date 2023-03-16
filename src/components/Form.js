import React from "react";
import styles from "../style.module.css";

const Form = () => {
  return (
    <div className={styles.todoform}>
      <form>
        <input
          className={styles.todoinput}
          placeholder="Add Todo Item"
          type="text"
        ></input>
        <button className={styles.todobutton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
