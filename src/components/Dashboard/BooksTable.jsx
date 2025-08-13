import { useNavigate } from "react-router-dom";
import OnScrollPagination from "../util/OnScrollPagination";
import GetData from "../util/GetData";
import "./booksTable.css"

const BooksTable = () => {
  const navigate = useNavigate();

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

  return (
    <div className="books-table-container">
      <div className="books-table-header">
        <h2>All Books</h2>
        <div className="books-table-actions">
          <input type="text" placeholder="Search" />
          <button className="add-book-btn" onClick={() => navigate("/dashboard/addbook")}>
            Add Book
          </button>
        </div>
      </div>

      <OnScrollPagination
        InventoryData={() => GetData("inventory")}
        columns={columns}
        rowRenderer={rowRenderer}
        LIMIT={10}
      />
    </div>
  );
};

export default BooksTable;
