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

      <button
        onClick={() => toggleTodo(todo.id)}
        style={{ backgroundColor: "#4CAF50", color: "white" }}
      >✔</button>
      
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ backgroundColor: "#f44336", color: "white" }}
      >❌</button>
    </div>
  );
}



export default TodoItem;