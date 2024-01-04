import TodosList from "./TodosList"
import classes from '../components/Todos.module.css';
import { TodoContext } from "../store/todo-context";
import { useContext } from "react";

const Todos = () => {
  const todoCtx = useContext(TodoContext);
   
  return (
    <>
    <ul className={classes.todos}>
      {
        todoCtx.items.map((item) => {
          return <TodosList key={item.id} text={item.text} onDeleteItem={todoCtx.removeTodo.bind(null, item.id)} />
        })
      }
    </ul>
    </>
  )
}

export default Todos
