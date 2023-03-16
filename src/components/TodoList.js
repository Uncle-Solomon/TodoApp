import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((item) => (
        <Todo
          key={item.id}
          todoitem={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}{" "}
    </div>
  );
};

export default TodoList;
