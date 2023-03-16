import React from "react";
import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
  };
  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={todo}
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
