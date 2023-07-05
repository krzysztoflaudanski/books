import { useState } from "react";

const BookForm = ({ addBook }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addBook({ title: title, author: author});
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" onChange={(e) => setTitle(e.target.value)} />
            Author: <input type="text" onChange={(e) => setAuthor(e.target.value)} />
            <button>Add book</button>
        </form>
    );
};

export default BookForm;