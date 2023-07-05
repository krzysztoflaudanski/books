const BooksList = props => {
    return (
        <ul>
            {props.books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => props.removeBook(book.id)} >Remove</button></li>)}
        </ul>
    );
};

export default BooksList;