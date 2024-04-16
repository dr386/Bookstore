import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, addBook, deleteBook, updateBook } from "./booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export { store, addBook, deleteBook, updateBook };
