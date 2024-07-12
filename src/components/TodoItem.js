import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo, startEditing }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleTodo(index)} style={{ marginLeft: '10px' }}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => startEditing(index, todo.text)} style={{ marginLeft: '10px' }}>
        Edit
      </button>
      <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
