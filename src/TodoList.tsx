import React from 'react';
import { useForm } from 'react-hook-form';

const TodoList = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <h1>TodoList</h1>
      <form>
        <input type="text" placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </>
  );
};

export default TodoList;
