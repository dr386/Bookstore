import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import BooksListItem from "./BooksListItem";
import Button from "./Button";
import Panel from "./Panel";
import AddingForm from "./AddingForm";
import UpdatingForm from "./UpdatingForm";

function BooksList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const [showAddingForm, setShowAddingForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const openAddingPopup = useCallback(() => setShowAddingForm(true), []);
  const closeAddingPopup = useCallback(() => setShowAddingForm(false), []);

  const openUpdatePopUp = useCallback((book) => {
    setShowUpdateForm(true);
    setCurrentBook(book);
  }, []);
  const closeUpdatePopUp = useCallback(() => {
    setShowUpdateForm(false);
    setCurrentBook(null);
  }, []);

  const booksListItem = books.map((book) => {
    return (
      <BooksListItem
        book={book}
        key={book.id}
        openUpdatePopUp={openUpdatePopUp}
      />
    );
  });

  const content = (
    <table className="min-w-full divide-y divide-gray-200 table-fixed border-collapse border border-slate-1000">
      <thead className="bg-blue-200">
        <tr>
          <th className="table-header">Name</th>
          <th className="table-header">Price</th>
          <th className="table-header">Category</th>
          <th className="table-header">Description</th>
          <th className="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {booksListItem}
      </tbody>
    </table>
  );

  return (
    <div>
      <Button primary onClick={openAddingPopup}>
        Add Book
      </Button>
      {showAddingForm && (
        <Panel>
          <AddingForm closeAddingPopup={closeAddingPopup} />
        </Panel>
      )}
      <div className="mt-5">{content}</div>
      {showUpdateForm && (
        <Panel>
          <UpdatingForm
            book={currentBook}
            closeUpdatePopUp={closeUpdatePopUp}
          />
        </Panel>
      )}
    </div>
  );
}

export default BooksList;
