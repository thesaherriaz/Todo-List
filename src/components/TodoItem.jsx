import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title"> {todo.title}</h5>
        <p className="card-text text-muted">
          Description: {todo.desc}
        </p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => { onDelete(todo) }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};