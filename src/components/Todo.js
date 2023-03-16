import React from "react";
import styles from "../style.module.css";

const Todo = ({ todoitem, todoList, setTodoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoitem.id));
  };
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{todoitem.name}</h3>
        <button onClick={deleteTodo} className={styles.deletebutton}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo;
