import "./booksTable.css";
import books from "./BooksDb.js";

const BooksTable = () => {
    return (
        <div className="books-table-container">
            <div className="books-table-header">
                <div>
                    <h2>All Books</h2>
                </div>
                <div className="books-table-actions">
                    <input type="text" placeholder="Search" />
                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                </div>
            </div>

            <table className="books-table">
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Books Quantiy</th>
                        <th>ID</th>
                        <th>Borrowing Date</th>
                        <th>Return Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((s, index) => (
                        <tr key={index}>
                            <td>{s.book}</td>
                            <td>{s.booksQuantity}</td>
                            <td>{s.id}</td>
                            <td>{s.BorrowingDate}</td>
                            <td>{s.ReturnDate}</td>
                            <td>
                                <span className={`status-tag ${s.status.toLowerCase()}`}>
                                    {s.status}
                                </span>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default BooksTable;
