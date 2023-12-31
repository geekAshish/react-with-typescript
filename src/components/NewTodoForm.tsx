import React from "react";


const NewTodoForm = () => {

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Logic
  }

  return <form onSubmit={formSubmitHandler}>
    <label htmlFor="todo">New Todo</label>
    <input type="text" id="todo" />
    <button>Add New</button>
  </form>
}

export default NewTodoForm;