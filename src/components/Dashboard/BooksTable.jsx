import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OnScrollPagination from "../util/OnScrollPagination";
import GetData from "../util/GetData";
import "./booksTable.css"

const BooksTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCount, setCurrentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const columns = [
    { key: "book_name", header: "Book" },
    { key: "book_quantity", header: "Books Quantity" },
    { key: "book_id", header: "ID" },
    { key: "borrowing_date", header: "Borrowing Date" },
    { key: "return_date", header: "Return Date" },
    { key: "status", header: "Status" }
  ];

  const rowRenderer = (book, ref) => (
    <tr key={book.book_id} ref={ref}>
      <td>{book.book_name}</td>
      <td>{book.book_quantity}</td>
      <td>{book.book_id}</td>
      <td>{book.borrowing_date ? new Date(book.borrowing_date).toLocaleDateString() : "-"}</td>
      <td>{book.return_date ? new Date(book.return_date).toLocaleDateString() : "-"}</td>
      <td>
        <span className={`status-tag ${book.status.toLowerCase()}`}>
          {book.status}
        </span>
      </td>
    </tr>
  );

  const fetchInventoryData = useCallback(async () => {
    try {
      let url = "inventory";
      if (searchTerm.trim() !== "") {
        url = `inventory/search?search=${searchTerm}`;
      }
      const data = await GetData(url);
      return data || [];
    } catch (error) {
      return [];
    }
  }, [searchTerm]);

  const handleCountChange = useCallback((displayed, total) => {
    setCurrentCount(displayed);
    setTotalCount(total);
  }, []);

  return (
    <div className="books-table-container">
      <div className="books-table-header">
        <h2>All Books {totalCount > 0 && `(${currentCount} of ${totalCount})`}</h2>
        <div className="books-table-actions">
          <input
            type="text"
            placeholder="Search by book name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-book-btn" onClick={() => navigate("/dashboard/addbook")}>
            Add Book
          </button>
        </div>
      </div>

      <OnScrollPagination
        InventoryData={fetchInventoryData}
        columns={columns}
        rowRenderer={rowRenderer}
        LIMIT={10}
        onCountChange={handleCountChange}
      />
    </div>
  );
};

export default BooksTable;
