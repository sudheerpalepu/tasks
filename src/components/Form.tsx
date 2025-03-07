

import React, { useState } from 'react';

interface FormProps {
  addTodo: (todo: string) => void;
}

const Form: React.FC<FormProps> = ({ addTodo }) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput(''); 
    } else {
      alert('Please enter a valid todo!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a todo"
          value={input}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default Form;
