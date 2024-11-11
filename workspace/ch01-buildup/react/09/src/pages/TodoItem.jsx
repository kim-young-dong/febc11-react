function TodoItem({ item, onTodoDone, onDeleteTodo }) {
  return (
    <li>
      <span>{item._id}</span>
      <span onClick={() => onTodoDone(item._id)}>
        {item.done ? <s>{item.title}</s> : item.title}
      </span>
      <button type="button" onClick={() => onDeleteTodo(item._id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
