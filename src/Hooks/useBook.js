import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useBook = () => {
  const [book, setBook] = useState({});
  const [list, setList] = useState([]);
  const [borrow, setBorrow] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("books")) || [];
    let oldBorrow = JSON.parse(localStorage.getItem("borrow")) || [];
    setList(oldList);
    setBorrow(oldBorrow);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = list;

    if (book.id) {
      newList = list.map((val) => {
        if (book.id === val.id) {
          return book;
        }
        return val;
      });
      navigate("/admin/view-book");
    } else {
      newList = [...list, { ...book, id: Date.now() }];
      navigate("/admin/view-book");
    }

    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));
    setBook({});
  };

  const handleDelete = (id) => {
    let newList = list.filter((val) => val.id !== id);
    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));
  };

  const handleEdit = (id) => {
    let data = list.find((val) => val.id === id);
    setBook(data);
    navigate("/admin/add-book");
  };

const handleBorrowedBook = (book, action) => {
  if (!book) return alert("Book not available!");

  // Find book in main list
  const data = list.find((b) => b.id === book.id);
  if (!data) return alert("Book not found!");

  // ===== INCREASE QTY ( + ) =====
  if (action === "add") {
    if (data.quantity <= 0) return alert("Out of stock!");
    data.quantity--;

    const newList = list.map((b) => (b.id === data.id ? data : b));
    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));

    const newBorrow = borrow.map((b) =>
      b.id === data.id ? { ...b, qty: b.qty + 1 } : b
    );
    setBorrow(newBorrow);
    localStorage.setItem("borrow", JSON.stringify(newBorrow));

    return;
  }

  // ===== DECREASE QTY ( - ) =====
  if (action === "remove") {
    const existing = borrow.find((b) => b.id === data.id);
    if (!existing || existing.qty <= 0) return;

    existing.qty--;
    data.quantity++;

    const newList = list.map((b) => (b.id === data.id ? data : b));
    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));

    const newBorrow = borrow
      .map((b) =>
        b.id === data.id ? { ...b, qty: existing.qty } : b
      )
      .filter((b) => b.qty > 0);

    setBorrow(newBorrow);
    localStorage.setItem("borrow", JSON.stringify(newBorrow));

    return;
  }

  // ===== DELETE ENTIRE BOOK FROM BORROW LIST =====
  if (action === "delete") {
    const existing = borrow.find((b) => b.id === data.id);
    if (!existing) return;

    // Add back all qty into main stock
    data.quantity += existing.qty;

    // update main list
    const newList = list.map((b) => (b.id === data.id ? data : b));
    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));

    // remove from borrow
    const newBorrow = borrow.filter((b) => b.id !== data.id);
    setBorrow(newBorrow);
    localStorage.setItem("borrow", JSON.stringify(newBorrow));

    return;
  }

  // ===== FIRST TIME BORROW =====
  if (action === "first") {
    if (data.quantity <= 0) return alert("Out of stock!");
    data.quantity--;

    const newList = list.map((b) => (b.id === data.id ? data : b));
    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));

    const newBorrow = [...borrow, { ...data, qty: 1 }];
    setBorrow(newBorrow);
    localStorage.setItem("borrow", JSON.stringify(newBorrow));

    return;
  }
};

  return {
    book,
    list,
    borrow,
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleBorrowedBook,
    setBook,
  };
};

export default useBook;
