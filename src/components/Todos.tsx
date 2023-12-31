import { todo } from "../models/todos"
import TodosList from "./TodosList"

const Todos = (props: {items: todo[]}) => {
  return (
    <>
    <ul>
      {
        props.items.map((item) => {
          return <TodosList key={item.id} text={item.text} />
        })
      }
    </ul>
    </>
  )
}

export default Todos
