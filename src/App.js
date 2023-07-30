import BookForm from "./components/BookForm/BooksForm";
import BooksList from "./components/BooksList/BooksList";
import { useState } from "react";
import shortId from 'shortid';
import PropTypes from 'prop-types';


const App = () => {
  return (
    <div>
      <h1>Books App</h1>
      <BooksList/>
      <BookForm />
    </div>
  );
}

// BookForm.propTypes = 
// {
// addBook: PropTypes.func.isRequired,
// // removeBook: PropTypes.func.isRequired,
// // id: PropTypes.string.isRequired,
// // title: PropTypes.string.isRequired,
// // author: PropTypes.string.isRequired
// };

export default App;
