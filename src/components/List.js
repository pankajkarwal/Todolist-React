import React, { useState } from "react";
import Create from "./Create";
import Todo from "./Todo";

function List() {
  const [todos, setTodos] = useState([]); // Passing empty array

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(newTodos);
  };

  const updateTodo = (id, newvalue) => {
    if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === id ? newvalue : item)));
  };
  const removeTodo = id => {
    const removeAr = [...todos].filter(todo => todo.id != id);
    setTodos(removeAr);
  };

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <div>
      <h1>What's the plan today</h1>
      <Create onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
export default List;
