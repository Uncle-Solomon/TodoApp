import React from "react";
import styles from "../style.module.css";

const Todo = () => {
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>Todo Item</h3>
        <button className={styles.deletebutton}>Done</button>
      </div>
    </div>
  );
};

export default Todo;
