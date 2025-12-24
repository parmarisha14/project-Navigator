import React, { useState, useEffect } from "react";
import "./AddBook.css";

const AddBook = ({ handleSubmit, book: editBook, setBook }) => {
  const [book, updateBook] = useState({});

  useEffect(() => {
    if (editBook?.id) {
      updateBook(editBook);
    }
  }, [editBook]);

  const handleChanges = (e) => {
    const { name, value, type } = e.target;
    updateBook({
      ...book,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    });
  };

  const isEdit = book?.id ? true : false;

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
    "Novel",
  ];

  return (
    <div className="addbook-wrapper mt-5">
      <div className="addbook-card">
        <h4 className="mb-2">{isEdit ? "Edit Book" : "Add New Book"}</h4>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(book);
            updateBook({
              title: "",
              author: "",
              image: "",
              category: "",
              year: "",
              language: "",
              quantity: 1,
            });
            setBook({});
          }}
        >
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label className="form-label">Book Image *</label>
              <input
                type="url"
                className="form-control"
                name="image"
                value={book.image}
                onChange={handleChanges}
                placeholder="Enter image URL"
              />

              <label className="form-label mt-2">Book Title *</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={book.title}
                onChange={handleChanges}
                placeholder="Enter book title"
              />

              <label className="form-label mt-2">Author Name *</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={book.author}
                onChange={handleChanges}
                placeholder="Enter author name"
              />

              <label className="form-label mt-2">Main Category *</label>
              <select
                className="form-control"
                name="category"
                value={book.category}
                onChange={handleChanges}
              >
                <option value="">Select category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <label className="form-label">Publication Year *</label>
              <input
                type="number"
                className="form-control"
                name="year"
                value={book.year}
                onChange={handleChanges}
                placeholder="Enter publication year"
              />

              <label className="form-label mt-2">Book Language *</label>
              <input
                type="text"
                className="form-control"
                name="language"
                value={book.language}
                onChange={handleChanges}
                placeholder="e.g. English, Hindi"
              />

              <label className="form-label mt-2">Quantity Available *</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                value={book.quantity}
                onChange={handleChanges}
                min={1}
                max={20}
                placeholder="Enter total copies"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end mt-3">
            <button
              type="submit"
              className="btn btn-primary px-4"
              style={{ background: "#294666" }}
            >
              {isEdit ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
