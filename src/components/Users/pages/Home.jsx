import React, { useEffect, useState } from 'react';
import slider1 from "../../../assets/images/p1.jpg";
import slider2 from "../../../assets/images/s1.jpg";
import slider3 from "../../../assets/images/s2.jpg";
import "./Home.css"; 

const Home = ({ list, borrow, handleBorrowedBook }) => { 
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    setNewBooks([...list.slice(0, 4)]);
  }, [list]);

  const getQty = (bookId) => {
    const b = borrow.find(item => item.id === bookId);
    return b ? b.qty : 0;
  }

  return (
    <>
      <style>
        {`.slider-img { height: 80vh; object-fit: cover; }`}
      </style>

      {/* ===== SLIDER ===== */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active"><img src={slider1} className="d-block w-100 slider-img" alt="..." /></div>
          <div className="carousel-item"><img src={slider2} className="d-block w-100 slider-img" alt="..." /></div>
          <div className="carousel-item"><img src={slider3} className="d-block w-100 slider-img" alt="..." /></div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* ===== NEW BOOK SECTION ===== */}
      <section className="new-books py-5">
        <div className="container">
          <div className="row"><div className="col-12"><h3>New Books</h3></div></div>

          <div className="row">
            {newBooks.map(book => {
              const qty = getQty(book.id);
              const out = qty >= book.quantity || book.quantity <= 0;

              return (
                <div className="col-md-3" key={book.id}>
                  <div className="card">
                    <div className="position-relative">
                      <img src={book.image} className="card-img-top" alt={book.title} />
                      <span className="position-absolute top-0 end-0 mt-2 badge rounded-pill bg-success">New</span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p>{book.author}</p>
                      {out ? (
                        <span className="py-2 px-3 bg-secondary rounded text-white">Out of Stock</span>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleBorrowedBook(book, "add")}
                        >
                          Borrow Book
                        </button>
                      )}
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
};

export default Home;
