import React from "react";

const Books = ({ list, borrow, handleBorrowedBook }) => {
  const getQty = (bookId) => {
    const b = borrow.find(item => item.id === bookId);
    return b ? b.qty : 0;
  };

  return (
    <section className="py-5" style={{ background: "#f5f7fa" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#23739C" }}>All Books</h2>
          <p className="text-muted">Browse and borrow books from our library</p>
        </div>

        <div className="row g-4">
          {list.map(book => {
            const qty = getQty(book.id);
            const out = book.quantity <= 0; // stock khatam

            return (
              <div className="col-md-3" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "180px" }}
                    alt=""
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold">{book.title}</h5>
                    <p className="text-muted">{book.author}</p>

                    <p>
                      {out ? (
                        <span className="badge bg-danger">OUT OF STOCK</span>
                      ) : (
                        <span className="badge bg-success">Available</span>
                      )}
                    </p>

                    <button
                      disabled={out}
                      className={`btn fw-bold mt-auto ${out ? "btn-danger" : "btn-success"}`}
                      onClick={() =>
                        qty === 0
                          ? handleBorrowedBook(book, "first") // first time add
                          : handleBorrowedBook(book, "add") // increase qty
                      }
                    >
                      {out ? "Unavailable" : qty === 0 ? "Borrow" : "Add More"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Books;
