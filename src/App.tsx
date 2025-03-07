

import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TODOI from './interfaces/TodoInterface';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TODOI[]>([
    { id: 1, text: 'task1', completed: false },
    { id: 2, text: 'task2', completed: true },
  ]);


  const addTodo = (todo: string): void => {
    const newTodo: TODOI = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: todo,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    window.alert('Todo added successfully!!');
  };


  const toggleTodo = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const deleteTodo = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="text-center my-2">React TypeScript Todo App</h1>
      <div className="row">
        <Form addTodo={addTodo} />
      </div>
      <div className="row mt-4">
        <ul className="list-group col-md-6 offset-md-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`list-group-item d-flex justify-content-between ${
                todo.completed ? 'list-group-item-success' : ''
              }`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{ cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <div>
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="btn btn-sm btn-outline-danger mx-2"
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
