import React from "react";
import styles from "../style.module.css";

const Todo = ({ todoitem, index }) => {
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 key={todoitem.id} className={styles.todoname}>
          {todoitem.name}
        </h3>
        <button className={styles.deletebutton}>Done</button>
      </div>
    </div>
  );
};

export default Todo;
