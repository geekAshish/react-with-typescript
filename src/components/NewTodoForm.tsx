import React, {useRef} from "react";


const NewTodoForm = () => {
  // we have to define, which type of element is going to use the ref, in this case it's input element, and initial value is null
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Logic
    // it'll automatic give us suggetions, which method you can call on this refferd html tag
    const inputValue = todoTextInputRef.current?.value;
    if(inputValue?.trim().length === 0) {
      // throw an error on the ui for better user experience
      return;
    }

    
    
  }

  return <form onSubmit={formSubmitHandler}>
    <label htmlFor="todo">New Todo</label>
    <input type="text" id="todo" ref={todoTextInputRef} />
    <button>Add New</button>
  </form>
}

export default NewTodoForm;
