import BookForm from "./components/BookForm/BooksForm";
import BooksList from "./components/BooksList/BooksList";
import { useState } from "react";
import shortId from 'shortid';


const App = () => {

const [books, setBooks] = useState ([
  {id: 1, title: 'Pan Tadeusz', author: 'Adam Mickiewicz'},
  {id: 2, title: 'Wiedzmin', author: 'Andrzej Sapkowski'}
]);

const removeBook = bookId => {
  setBooks(books.filter(book => book.id !== bookId))
}; 

const addBook = newBook => {
  setBooks([...books, {id: shortId(), title: newBook.title, author: newBook.author}])
};

  return (
    <div>
      <h1>Books App</h1>
      <BooksList books={books} removeBook={removeBook} />
      <BookForm addBook={addBook} />
    </div>
  );
}

export default App;
