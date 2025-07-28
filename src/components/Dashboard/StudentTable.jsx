import "./studentTable.css";

const students = [
    { book: "Atomic Habits", booksQuantity: "12", id: "001", BorrowingDate: "10/06/25", ReturnDate: "Pending", status: "Active" },
    { book: "The peace of now", booksQuantity: "7", id: "002", BorrowingDate: "20/04/25", ReturnDate: "18/05/25", status: "Inactive" },
    { book: "IkiGai", booksQuantity: "20", id: "003", BorrowingDate: "05/05/25", ReturnDate: "30/05/25", status: "Inactive" },
    { book: "Biology", booksQuantity: "15", id: "004", BorrowingDate: "02/04/25", ReturnDate: "Pending", status: "Active" },
];

const StudentTable = () => {
    return (
        <div className="student-table-container">
            <div className="student-table-header">
                <div>
                    <h2>All Students</h2>
                </div>
                <div className="student-table-actions">
                    <input type="text" placeholder="Search" />
                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                </div>
            </div>

            <table className="student-table">
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
                    {students.map((s, index) => (
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

export default StudentTable;
