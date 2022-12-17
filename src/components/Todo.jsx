import React from "react";
import styled from "styled-components";
const TodoList = styled.main`
  width: 200px;
  height: 50px;
  background-color: grey;
  margin: 0 auto;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
`;
function Todo({ todo, toggleTask, removeTask }) {
  return (
    <TodoList key={todo.id}>
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </div>
    </TodoList>
  );
}

export default Todo;
