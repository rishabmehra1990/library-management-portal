import { useState } from 'react';
import { postData } from '../util/api';
import './addbook.css';

const AddBook = () => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        quantity: '',
        borrowDate: '',
        returnDate: '',
        status: 'active',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const finalData = {
            book_name: formData.name,
            book_id: parseInt(formData.id),
            book_quantity: parseInt(formData.quantity),
            borrowing_date: formData.borrowDate,
            return_date:
                formData.status === 'active' && !formData.returnDate
                    ? null
                    : formData.returnDate,
            status: formData.status,

        };

        try {
            const res = await postData('inventory/add', finalData);
            alert('Book added successfully!');
            setFormData({
                name: '',
                id: '',
                quantity: '',
                borrowDate: '',
                returnDate: '',
                status: 'active',
            });
        } catch (error) {
            alert('Failed to add book');
        }
    };

    return (
        <div className="form-container">
            <form className="book-form" onSubmit={handleSubmit}>
                <h2>Add New Book</h2>

                <div className="form-group">
                    <label>Book Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter book name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Book ID</label>
                    <input
                        type="text"
                        name="id"
                        placeholder="e.g. 001"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Book Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="e.g. 12"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Borrowing Date</label>
                    <input
                        type="date"
                        name="borrowDate"
                        value={formData.borrowDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Return Date</label>
                    <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <div className="radio-buttons">
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="active"
                                checked={formData.status === 'active'}
                                onChange={handleChange}
                            />
                            Active
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="inactive"
                                checked={formData.status === 'inactive'}
                                onChange={handleChange}
                            />
                            Inactive
                        </label>
                    </div>
                </div>

                <button type="submit" className="submit-button">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;

