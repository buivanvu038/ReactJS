import React from "react";
import Todolist from "./Components/todolist";

Todofeatures.propTypes = {};

function Todofeatures(props) {
  const todolist = [
    {
      id: 1,
      title: "eat",
    },
    {
      id: 2,
      title: "sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];
  return (
    <div>
      <h3>toto list</h3>
      <Todolist todolist={todolist}></Todolist>
    </div>
  );
}

export default Todofeatures;
