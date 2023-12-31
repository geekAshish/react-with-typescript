import NewTodoForm from "./components/NewTodoForm"
import Todos from "./components/Todos"
import { todo } from "./models/todos"

function App() {
  const todoList = [
    new todo('Learn ReactJS'),
    new todo('Learn Typescript'),
    new todo('Learn NextJS'),
  ]

  const addTodoHandler = (text: string) => {
    console.log(text);
    
  }

  return (
    <>
      <h1>Ashish Kushwaha</h1>
      <NewTodoForm onTodoAdd={addTodoHandler}/>
      <Todos items={todoList} />
    </>
  )
}

export default App
