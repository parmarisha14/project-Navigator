import React, { useEffect, useState } from "react";
import { FaBook, FaBookReader, FaUsers, FaSearch } from "react-icons/fa";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [totalBooks, setTotalBooks] = useState(0);
  const [availableBooks, setAvailableBooks] = useState(0);
  const [borrowedBooks, setBorrowedBooks] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const booksData = JSON.parse(localStorage.getItem("books")) || [];
    const usersData = JSON.parse(localStorage.getItem("userData")) || [];

    setBooks(booksData);
    setTotalBooks(booksData.length);
    setAvailableBooks(booksData.filter((b) => b.quantity > 0).length);

    // Safe borrowed calculation
    const borrowed = usersData.reduce((total, user) => {
      if (Array.isArray(user?.myBooks)) {
        return total + user.myBooks.length;
      }
      return total;
    }, 0);
    setBorrowedBooks(borrowed);

    setTotalMembers(usersData.length);
  }, []);

  // SAFE SEARCH FILTER
  const filteredBooks = books.filter((book) => {
    const s = search.toLowerCase();

    const title = book?.title ? book.title.toLowerCase() : "";
    const author = book?.author ? book.author.toLowerCase() : "";
    const category = book?.category ? book.category.toLowerCase() : "";
    const language = book?.language ? book.language.toLowerCase() : "";
    const year = book?.year ? book.year.toString() : "";

    return (
      title.includes(s) ||
      author.includes(s) ||
      category.includes(s) ||
      language.includes(s) ||
      year.includes(search)
    );
  });

  const cardData = [
    { title: "Total Books", value: totalBooks, icon: <FaBook />, iconClass: "blue" },
    { title: "Available Books", value: availableBooks, icon: <FaBook />, iconClass: "green" },
    { title: "Borrowed Books", value: borrowedBooks, icon: <FaBookReader />, iconClass: "purple" },
    { title: "Total Members", value: totalMembers, icon: <FaUsers />, iconClass: "blue" },
  ];

  return (
    <div className="admin-dashboard">
      <h2>Welcome! Admin</h2>

      {/* Cards Section */}
      <div className="cards-row mt-5">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className={`card-icon ${card.iconClass}`}>{card.icon}</div>
            <div>
              <p className="card-title">{card.title}</p>
              <p className="card-value">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="search-bar mt-3">
        <div className="search-input-group d-flex align-items-center">
          <span className="search-icon-box">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search by Title, Author, Category, Year or Language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-100"
          />
        </div>
      </div>

      <div className="books-table-wrapper mt-4">
        <h3>Books List</h3>
        <table className="books-table">
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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>
                    {book?.image && (
                      <img
                        src={book.image}
                        alt={book.title}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                    )}
                  </td>
                  <td>{book?.title}</td>
                  <td>{book?.author}</td>
                  <td>{book?.category}</td>
                  <td>{book?.year}</td>
                  <td>{book?.language}</td>
                  <td>{book?.quantity}</td>
                  <td className={book?.quantity > 0 ? "available" : "out-of-stock"}>
                    {book?.quantity > 0 ? "Available" : "Out of Stock"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
