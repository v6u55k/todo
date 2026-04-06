function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todo">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => toggleTodo(todo.id)}>✔</button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;