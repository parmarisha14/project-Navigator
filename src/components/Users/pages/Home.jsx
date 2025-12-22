import React, { useEffect, useState } from "react";
import p1 from "../../../assets/images/p1.jpg";
import p2 from "../../../assets/images/p2.jpg";
import p3 from "../../../assets/images/p3.jpg";
import "./Home.css";

const Home = ({ list, borrow, handleBorrowedBook }) => {
  const [newBooks, setNewBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (!list || list.length === 0) return;

    setNewBooks(list.slice(0, 4));
    setAllBooks(list);

    const cats = new Set();
    list.forEach(book => {
      if (book.category) cats.add(book.category);
      if (Array.isArray(book.categories)) book.categories.forEach(c => c && cats.add(c));
    });

    setCategories(["All", ...Array.from(cats)]);
  }, [list]);

  const getQty = (id) => {
    const b = borrow.find(item => item.id === id);
    return b ? b.qty : 0;
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    if (value === "All") {
      setAllBooks(list);
    } else {
      const filtered = list.filter(
        b => b.category === value || (Array.isArray(b.categories) && b.categories.includes(value))
      );
      setAllBooks(filtered);
    }
  };

  return (
    <>
      
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={p1}
              className="d-block w-100"
              style={{ height: "80vh", objectFit: "cover" }}
              alt="Library"
            />
          </div>
          <div className="carousel-item">
            <img
              src={p2}
              className="d-block w-100"
              style={{ height: "80vh", objectFit: "cover" }}
              alt="Teachers Day"
            />
          </div>
          <div className="carousel-item">
            <img
              src={p3}
              className="d-block w-100"
              style={{ height: "80vh", objectFit: "cover" }}
              alt="Books"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* New Books Section */}
      <section className="new-books py-5">
        <div className="container">
          <h3>New Books</h3>
          <div className="row g-4 mb-4">
            {newBooks.map(book => {
              const qty = getQty(book.id);
              const out = book.quantity <= 0;
              return (
                <div className="col-md-3 col-6" key={book.id}>
                  <div className="card h-100 d-flex flex-column">
                    <img src={book.image} alt={book.title} className="card-img-top" />
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title">{book.title}</h6>
                      <small className="text-muted">{book.author}</small>
                      <small className="text-secondary">{book.category}</small>
                      <span className={`badge mt-2 ${out ? "bg-danger" : "bg-primary"}`}>
                        {out ? "Out of Stock" : "Available"}
                      </span>
                      <button
                        className={`borrow-btn mt-3 ${out ? "btn-danger" : "btn-primary"}`}
                        disabled={out}
                        onClick={() => handleBorrowedBook(book, "add")}
                      >
                        {out ? "Unavailable" : qty === 0 ? "Borrow Book" : "Add More"}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Category Filter */}
          <h4>Categories</h4>
          <div className="row mb-4">
            <div className="col-md-3 ms-auto">
              <select className="form-select select-box" value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* All Books */}
          <div className="row g-4">
            {allBooks.map(book => {
              const qty = getQty(book.id);
              const out = book.quantity <= 0;
              return (
                <div className="col-md-3 col-6" key={book.id}>
                  <div className="card h-100 d-flex flex-column">
                    <img src={book.image} alt={book.title} className="card-img-top" />
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title">{book.title}</h6>
                      <small className="text-muted">{book.author}</small>
                      <small className="text-secondary">{book.category}</small>
                      <span className={`badge mt-2 ${out ? "bg-danger" : "bg-primary"}`}>
                        {out ? "Out of Stock" : "Available"}
                      </span>
                      <button
                        className={`borrow-btn mt-4 ${out ? "btn-danger" : "btn-primary"}`}
                        disabled={out}
                        onClick={() => handleBorrowedBook(book, "add")}
                      >
                        {out ? "Unavailable" : qty === 0 ? "Borrow Book" : "Add More"}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
