import { useState } from "react";
import styled from "styled-components";
const Form = styled.section`
  & input {
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid grey;
    outline: none;
    background-color:white;
  }
  & button {
    padding: 16px 7px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background-color:grey;
    color: #fff;
    text-transform: capitalize;
    box-sizing: border-box;
  }

`;
function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form style={styled}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="enter task..."
        />
        <button>Add</button>
      </Form>
    </form>
  );
}

export default TodoForm;
