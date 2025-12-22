import React from "react";

const MyBooks = ({ borrow, handleBorrowedBook }) => {
  return (
    <section className="py-5" style={{ background: "#F0F4F8" }}>
      <div className="container">
        <h3 className="fw-bold text-center text-primary mb-4">
          My Borrowed Books
        </h3>

        {borrow.length === 0 ? (
          <h5 className="text-center text-muted">No Books Available</h5>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered align-middle shadow-sm bg-white rounded">
              <thead className="table-primary">
                <tr className="text-center">
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Qty</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {borrow.map((b) => (
                  <tr key={b.id} className="text-center">
                    <td>
                      <img
                        src={b.image}
                        width="60"
                        height="70"
                        style={{
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                        alt=""
                      />
                    </td>

                    <td className="fw-bold">{b.title}</td>

                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleBorrowedBook(b, "removeQty")}
                        >
                          -
                        </button>

                        <span className="fw-bold">{b.qty}</span>

                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleBorrowedBook(b, "add")}
                          disabled={b.qty >= b.quantity}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleBorrowedBook(b, "delete")}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBooks;
