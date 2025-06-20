import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {    
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!title.trim() || !desc.trim()) {
      alert("Please enter both title and description");
      setIsSubmitting(false);
      return;
    }

    try {
      await addTodo(title, desc);
      setTitle('');
      setDesc('');
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Failed to add todo. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-4" style={{ width: '70%', margin: '0 auto' }}>
      <div className="card shadow-sm">
        <div className="card-header bg-white border-bottom-0">
          <h3 className="mb-0">Add New Todo</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-semibold">Title</label>
              <input 
                type="text" 
                className="form-control"
                id="title"
                placeholder="Enter todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-semibold">Description</label>
              <textarea 
                className="form-control"
                id="description"
                rows="3"
                placeholder="Enter detailed description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="d-grid">
              <button 
                type="submit" 
                className="btn btn-success"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Adding...
                  </>
                ) : "Add Todo"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};