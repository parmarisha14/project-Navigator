import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./ViewBook.css";

const ViewBook = ({ list, handleDelete, handleEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = list.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(list.length / booksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="viewbook-wrapper mt-5">
      <div className="viewbook-card">
        <div className="viewbook-header">
          <h2>Books List</h2>
        </div>
        <table className="viewbook-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Year</th>
              <th>Language</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.length > 0 ? (
              currentBooks.map((book, index) => (
                <tr key={book.id}>
                  <td>{indexOfFirstBook + index + 1}</td>
                  <td>
                    {book.image && (
                      <img
                        src={book.image}
                        alt={book.title}
                        style={{
                          width: 50,
                          height: 50,
                          objectFit: "cover",
                          borderRadius: 4,
                        }}
                      />
                    )}
                  </td>
                  <td title={book.title}>{book.title}</td>
                  <td title={book.author}>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.year}</td>
                  <td>{book.language}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleDelete(book.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEdit(book.id)}
                    >
                      <FaEdit /> Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  Data NOT Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="pagination mt-3 d-flex justify-content-center gap-2 flex-wrap">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active-page" : ""}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBook;
