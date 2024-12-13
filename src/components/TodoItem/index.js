import './index.css'

const TodoItem = ({
  id,
  title,
  handleClickDelete,
  handleEditTodo,
  handleSaveTodo,
  editedTodo,
  newTitle,
  handleChangeEditTodo,
}) => (
  <li className="todo-item">
    {editedTodo.includes(id) ? (
      <p>
        <input type="text" value={newTitle} onChange={handleChangeEditTodo} />
      </p>
    ) : (
      <p>{title}</p>
    )}
    <div className="btn-group">
      <div>
        {editedTodo.includes(id) ? (
          <button
            type="button"
            className="btn save-btn"
            onClick={() => {
              handleSaveTodo(id, newTitle)
            }}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            className="btn edit-btn"
            onClick={() => {
              handleEditTodo(id, title)
            }}
          >
            Edit
          </button>
        )}
      </div>
      <div>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => handleClickDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  </li>
)

export default TodoItem
