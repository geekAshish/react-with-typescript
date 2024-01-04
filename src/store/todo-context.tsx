import { createContext, useState } from "react";
import { Todo } from "../models/todos";

interface todoContext {
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void,
}

// defining a generic type for context initial object

export const TodoContext = createContext<todoContext>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {}
})


export const TodoContextProvider = ({children}: {children: React.ReactNode}) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const todo = new Todo(text);

    setTodoList((prev) => {
      return prev.concat(todo);
    })

  }

  const deleteItemHandler = (id: string) => {
    const newTodoList = todoList.filter((item) => item.id !== id)

    setTodoList(newTodoList)
  }

  const contextValue: todoContext = {
    items: todoList,
    addTodo: addTodoHandler,
    removeTodo: deleteItemHandler
  }

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}