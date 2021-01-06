import React, { useState, useEffect, useRef } from "react";

function Create(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    const wval = e.target.value;
    setInput(wval);
  };
  const handleInput = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleInput}>
      {props.edit ? (
        <>
          <input
            className="todo-input edit"
            onChange={handleChange}
            name="input"
            placeholder="Update Record"
            value={input}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            onChange={handleChange}
            name="input"
            placeholder="Enter text"
            value={input}
            ref={inputRef}
          />
          <button className="todo-button">Add Todolist</button>
        </>
      )}
    </form>
  );
}

export default Create;
