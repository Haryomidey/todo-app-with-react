import { useState, useEffect } from "react";

import InputField from "./components/InputField";
import InputList from "./components/InputList";

const App = () => {
  const initialTodo = JSON.parse(localStorage.getItem('todos')) || [];
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(initialTodo);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
        
      <InputList
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
