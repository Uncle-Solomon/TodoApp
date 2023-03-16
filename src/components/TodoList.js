import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((item) => (
        <Todo todoitem={item} />
      ))}{" "}
    </div>
  );
};

export default TodoList;
