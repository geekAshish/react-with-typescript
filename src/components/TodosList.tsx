import classes from '../components/TodosList.module.css'


const TodosList = ({text, onDeleteItem}: {text: string, onDeleteItem: () => void}) => {
  return (
    <><li className={classes.item} onClick={onDeleteItem}>{text}</li></>
  )
}

export default TodosList

