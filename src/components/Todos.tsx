const Todos = (props: {items: string[]}) => {
  return (
    <>
    <ul>
    {props.items.map((item, i) => {
      return <li key={i}>{item}</li>
    })}
    </ul>
    </>
  )
}

export default Todos
