import React from "react";
import "./AddBook.css";

const AddBook = ({ book, handleChange, handleSubmit }) => {
  const isEdit = !!book?.id;

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Biography",
    "Self Help",
    "Technology",
    "Science",
    "History",
    "Kids",
    "Comics",
    "Novel"
  ];

  return (
    <div className="addbook-wrapper">
      <div className="addbook-card">
        <h4 className="mb-3">{isEdit ? "Edit Book" : "Add New Book"}</h4>

        <form  onSubmit={handleSubmit} method="post">
          <div className="row">
            {/* Left Column */}
            <div className="col-12 col-md-6 mb-3">
              <div className="form-group mb-3">
                <label htmlFor="image" className="form-label">Book Image *</label>
                <input
                  id="image"
                  type="url"
                  className="form-control"
                  name="image"
                  value={book.image || ''}
                  onChange={handleChange}
                  placeholder="Enter book image URL"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="title" className="form-label">Book Title *</label>
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  name="title"
                  value={book.title || ''}
                  onChange={handleChange}
                  placeholder="Enter full title"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="author" className="form-label">Author Name *</label>
                <input
                  id="author"
                  type="text"
                  className="form-control"
                  name="author"
                  value={book.author || ''}
                  onChange={handleChange}
                  placeholder="Enter author name"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="category" className="form-label">Main Category / Genre *</label>
                <select
                  id="category"
                  className="form-control"
                  name="category"
                  value={book.category || ''}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 mb-3">
              <div className="form-group mb-3">
                <label htmlFor="year" className="form-label">Publication Year *</label>
                <input
                  id="text"
                  type="number"
                  className="form-control"
                  name="year"
                  value={book.year || ""}
                  onChange={handleChange}
                  placeholder="Enter publication year"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language" className="form-label">Book Language *</label>
                <input
                  id="language"
                  type="text"
                  className="form-control"
                  name="language"
                  value={book.language || ""}
                  onChange={handleChange}
                  placeholder="e.g. English, Hindi"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="quantity" className="form-label">Quantity Available *</label>
                <input
                  id="quantity"
                  type="number"
                  className="form-control"
                  name="quantity"
                  value={book.quantity || ""}
                  onChange={handleChange}
                  min={1}
                  max={20}
                  placeholder="Enter total copies"
                  required
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
              type="submit"
              className="btn btn-primary px-4"
              style={{ background: "#294666" }}
            >
              {isEdit ? "Update Book" : "Add Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
