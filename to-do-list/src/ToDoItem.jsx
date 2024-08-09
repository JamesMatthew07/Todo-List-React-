// eslint-disable-next-line react/prop-types
export function ToDoItem({completed, id, title, toggleTodo, deleteTodo}){
    return (
        <li key={id}>
        <label>
          <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-delete">Delete</button>
      </li>
    )
}