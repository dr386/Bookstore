import { useDispatch } from "react-redux";
import { deleteBook } from "../store";

import Button from "./Button";

function BooksListItem({ book, openUpdatePopUp }) {
  const dispatch = useDispatch();
  const handleDeleteBook = (e, id) => {
    e.stopPropagation();
    dispatch(deleteBook(id));
  };

  return (
    <tr
      onClick={() => openUpdatePopUp(book)}
      className="cursor-pointer hover:bg-gray-100"
    >
      <td className={"table-cell"}>{book.name}</td>
      <td className={"table-cell"}>${book.price}</td>
      <td className={"table-cell"}>{book.category}</td>
      <td className={"table-cell"}>{book.description}</td>
      <td>
        <Button danger onClick={(e) => handleDeleteBook(e, book.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default BooksListItem;
