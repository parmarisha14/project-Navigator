import React, { useState, useEffect } from "react";

const Books = ({ list, borrow, handleBorrowedBook }) => {
  const [category, setCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCats = new Set();
    list.forEach(book => {
      if (Array.isArray(book.categories)) book.categories.forEach(c => c && allCats.add(c));
      else if (book.category) allCats.add(book.category);
    });
    setCategories(["All", ...Array.from(allCats)]);
  }, [list]);

  const getQty = (bookId) => {
    const b = borrow.find(item => item.id === bookId);
    return b ? b.qty : 0;
  };

  const filteredBooks = category === "All"
    ? list
    : list.filter(book =>
        Array.isArray(book.categories)
          ? book.categories.includes(category)
          : book.category === category
      );

  return (
    <section className="py-5" style={{background:"#f5f7fa"}}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{color:"#23739C"}}>All Books</h2>
          <p className="text-muted">Browse and borrow books from our library</p>
        </div>

        <div className="row mb-4">
          <div className="col-md-4 mx-auto">
            <select className="form-select shadow-sm" value={category} onChange={(e)=>setCategory(e.target.value)}>
              {categories.map((cat,i)=><option key={i} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>

        <div className="row g-4">
          {filteredBooks.length === 0 && <p className="text-center text-danger fw-bold">No books found in this category!</p>}

          {filteredBooks.map(book => {
            const qty = getQty(book.id);
            const out = book.quantity <= 0;

            return (
              <div className="col-md-3" key={book.id}>
                <div className="card shadow-sm h-100 d-flex flex-column">
                  <img src={book.image} className="card-img-top" style={{objectFit:"cover", height:"180px"}} alt={book.title}/>
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold mb-1">{book.title}</h5>
                    <small className="text-muted">{book.author}</small>
                    <small style={{border:"1px solid #999", borderRadius:"20px", padding:"4px 10px", fontSize:"0.85rem", display:"inline-block", marginTop:"8px"}}>
                      {Array.isArray(book.categories) ? book.categories.join(", ") : book.category}
                    </small>
                    <p className="mt-2">{out ? <span className="badge bg-danger">OUT OF STOCK</span> : <span className="badge bg-primary">Available</span>}</p>
                    <button disabled={out} className={`btn btn-primary fw-bold w-100 mt-auto py-2 ${out ? "btn-danger" : ""}`} onClick={()=>handleBorrowedBook(book, "add")}>
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
