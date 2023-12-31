import Todos from "./components/Todos"
import { todo } from "./models/todos"

function App() {
  const todoList = [
    new todo('Learn ReactJS'),
    new todo('Learn Typescript'),
    new todo('Learn NextJS'),
  ]

  return (
    <>
      <h1>Ashish Kushwaha</h1>
      <Todos items={todoList} />
    </>
  )
}

export default App
