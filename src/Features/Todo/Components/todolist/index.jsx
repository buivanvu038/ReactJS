//co giu lieu nhung khong biet render
import React from "react";
import PropTypes from "prop-types";

Todolist.propTypes = {
  todolist: PropTypes.array, //nhan vao 1 mang
};

Todolist.defoultProps = {
  todolist: [],
};
function Todolist({ todolist }) {
  return (
    <ul>
      {todolist.map((todo) => (
        <li key={todo.id}> {todo.title}</li>
      ))}
    </ul>
  );
}

export default Todolist;
