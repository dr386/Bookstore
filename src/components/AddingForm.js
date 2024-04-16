import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";

import { addBook } from "../store";
import Button from "./Button";

function AddingForm({ closeAddingPopup }) {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    bookName: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = {
      id: faker.string.uuid(4),
      name: formState.bookName,
      price: parseFloat(formState.price),
      category: formState.category,
      description: formState.description,
    };

    dispatch(addBook(book));
    closeAddingPopup();
  };

  const formFields = [
    { name: "bookName", type: "text", label: "Book Name" },
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
          <Button primary className="mr-2">Submit</Button>
          <Button primary onClick={closeAddingPopup} className="ml-2">
            Close
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddingForm;
