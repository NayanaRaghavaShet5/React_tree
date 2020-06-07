import React from "react";

function ToDoList(props) {
  return (
    <div onClick={() => props.deleteItem(props.id)}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoList;
