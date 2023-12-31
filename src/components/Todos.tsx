import { todo } from "../models/todos"

const Todos = (props: {items: todo[]}) => {
  return (
    <>
    <ul>
      {
        props.items.map((item) => {
          return <li key={item.id}>{item.text}</li>
        })
      }
    </ul>
    </>
  )
}

export default Todos
