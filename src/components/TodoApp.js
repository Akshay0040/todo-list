import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const startEditing = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const editTodo = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos[editingIndex].text = editingText;
    setTodos(newTodos);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
      />
      {editingIndex !== null && (
        <form onSubmit={editTodo}>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditingIndex(null)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default TodoApp;
