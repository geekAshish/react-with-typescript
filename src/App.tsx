import NewTodoForm from "./components/NewTodoForm"
import Todos from "./components/Todos"
import { TodoContextProvider } from "./store/todo-context"

function App() {

  return (
    <>
      <h1>Ashish Kushwaha</h1>
      <TodoContextProvider>
        <NewTodoForm />
        <Todos />
      </TodoContextProvider>
    </>
  )
}

export default App
