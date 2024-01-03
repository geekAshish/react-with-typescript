import { Todo } from "../models/todos"
import TodosList from "./TodosList"
import classes from '../components/Todos.module.css';

const Todos = (props: {items: Todo[], onDeleteItem: (id: string) => void}) => {
  return (
    <>
    <ul className={classes.todos}>
      {
        props.items.map((item) => {
          return <TodosList key={item.id} text={item.text} onDeleteItem={props.onDeleteItem.bind(null, item.id)} />
        })
      }
    </ul>
    </>
  )
}

export default Todos
