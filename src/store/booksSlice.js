import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      {
        id: "3de2",
        name: "Harry Potter",
        price: "12.5",
        category: "Fiction",
        description:
          "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
      },
      {
        id: "3de3",
        name: "Lord of the Rings",
        price: "15.5",
        category: "Fantasy",
        description:
          "The Lord of the Rings is an epic high fantasy novel written by English author J. R. R. Tolkien.",
      },
    ],
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    deleteBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook(state, action) {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
