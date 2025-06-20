import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container my-4" style={{ width: '70%', margin: '0 auto' }}>
      <div className="card shadow-sm">
        <div className="card-header bg-white border-bottom-0">
          <h4 className="mb-0">Todos List</h4>
        </div>
        <div className="card-body p-4">
          {todos.length === 0 ? (
            <div className="d-flex align-items-center justify-content-center py-5">
              <p className="text-muted mb-0">No todos to display</p>
            </div>
          ) : (
            <div className="list-group list-group-flush">
              {todos.map((todo) => (
                <TodoItem 
                  todo={todo} 
                  key={todo.sno} 
                  onDelete={onDelete} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};