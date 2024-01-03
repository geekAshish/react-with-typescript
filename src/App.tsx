import { useState } from "react"
import NewTodoForm from "./components/NewTodoForm"
import Todos from "./components/Todos"
import { Todo } from "./models/todos"

function App() {
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

  return (
    <>
      <h1>Ashish Kushwaha</h1>
      <NewTodoForm onTodoAdd={addTodoHandler}/>
      <Todos items={todoList} onDeleteItem={deleteItemHandler} />
    </>
  )
}

export default App
