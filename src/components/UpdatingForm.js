import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../store";
import Button from "./Button";

function UpdatingForm({ book, closeUpdatePopUp }) {
  const dispatch = useDispatch();

  // Initialize form state with book values
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (book) {
      setFormState({
        name: book.name,
        price: book.price,
        category: book.category,
        description: book.description,
      });
    }
  }, [book]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      id: book.id,
      ...formState,
    };

    dispatch(updateBook(updatedBook));
    closeUpdatePopUp();
  };

  const formFields = [
    { name: "name", type: "text", label: "Book Name" },
    { name: "price", type: "number", label: "Price" },
    { name: "category", type: "text", label: "Category" },
    { name: "description", type: "text", label: "Description" },
  ];

  const renderFormFields = () => {
    return formFields.map(({ name, type, label }) => (
      <div className="mb-4" key={name}>
        <label
          className="block text-gray-700 text-md font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          type={type}
          value={formState[name]}
          onChange={handleChange}
        />
      </div>
    ));
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {renderFormFields()}
        <div className="inline-flex">
          <Button primary className="mr-2">
            Update
          </Button>
          <Button primary onClick={closeUpdatePopUp} className="ml-2">
            Close
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdatingForm;
