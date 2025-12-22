import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useBook = () => {
  const [book, setBook] = useState({});
  const [list, setList] = useState([]);
  const [borrow, setBorrow] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const oldList = JSON.parse(localStorage.getItem("books")) || [];
    const oldBorrow = JSON.parse(localStorage.getItem("borrow")) || [];
    setList(oldList);
    setBorrow(oldBorrow);
  }, []);


  const handleSubmit = (bookData) => {
    const newList = bookData.id
      ? list.map((b) => (b.id === bookData.id ? { ...bookData } : b))
      : [...list, { ...bookData, id: Date.now() }];

    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));
    setBook({});
    navigate("/admin/view-book");
  };

  
  const handleDelete = (id) => {
    const newList = list.filter((b) => b.id !== id);
    const newBorrow = borrow.filter((b) => b.id !== id);
    setList(newList);
    setBorrow(newBorrow);
    localStorage.setItem("books", JSON.stringify(newList));
    localStorage.setItem("borrow", JSON.stringify(newBorrow));
  };

 
  const handleEdit = (id) => {
    const data = list.find((b) => b.id === id);
    setBook(data);
    navigate("/admin/add-book");
  };

  
  const handleBorrowedBook = (bookItem, action) => {
    if (!bookItem) return alert("Book not available!");
    const data = list.find((b) => b.id === bookItem.id);
    if (!data) return alert("Book not found!");

    const existingBorrow = borrow.find((b) => b.id === data.id);
    const totalBorrowed = borrow.reduce((sum, b) => sum + (b.qty || 0), 0);

    const cloneList = list.map((b) => ({ ...b }));

    if (action === "add") {
      if (totalBorrowed >= 5) return alert("Maximum 5 books allowed!");
      if (data.quantity <= 0) return alert("Out of stock!");

      const updatedBook = { ...data, quantity: data.quantity - 1 };
      const updatedList = cloneList.map((b) => (b.id === updatedBook.id ? updatedBook : b));
      setList(updatedList);
      localStorage.setItem("books", JSON.stringify(updatedList));

      const newBorrow = existingBorrow
        ? borrow.map((b) =>
            b.id === updatedBook.id ? { ...b, qty: b.qty + 1 } : b
          )
        : [...borrow, { ...updatedBook, qty: 1 }];

      setBorrow(newBorrow);
      localStorage.setItem("borrow", JSON.stringify(newBorrow));
      return;
    }

    if (action === "removeQty") {
      if (!existingBorrow) return;

      const updatedBorrowQty = existingBorrow.qty - 1;
      const updatedBook = { ...data, quantity: data.quantity + 1 };
      const updatedList = cloneList.map((b) => (b.id === updatedBook.id ? updatedBook : b));
      setList(updatedList);
      localStorage.setItem("books", JSON.stringify(updatedList));

      const newBorrow = borrow
        .map((b) => (b.id === updatedBook.id ? { ...b, qty: updatedBorrowQty } : b))
        .filter((b) => b.qty > 0);

      setBorrow(newBorrow);
      localStorage.setItem("borrow", JSON.stringify(newBorrow));
      return;
    }

    if (action === "delete") {
      if (!existingBorrow) return;

      const updatedBook = { ...data, quantity: data.quantity + existingBorrow.qty };
      const updatedList = cloneList.map((b) => (b.id === updatedBook.id ? updatedBook : b));
      setList(updatedList);
      localStorage.setItem("books", JSON.stringify(updatedList));

      const newBorrow = borrow.filter((b) => b.id !== updatedBook.id);
      setBorrow(newBorrow);
      localStorage.setItem("borrow", JSON.stringify(newBorrow));
      return;
    }
  };

  return {
    book,
    setBook,
    list,
    borrow,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleBorrowedBook,
  };
};

export default useBook;
