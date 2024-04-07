import React, { useState } from "react";

const ToDoItem = ({ todo, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [changedText, setChangedText] = useState(todo.title);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    setChangedText(event.target.value);
  };
  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-3 mb-2 rounded-lg shadow-md">
      {!isEditing ? (
        <p className="text-lg">{todo.title}</p>
      ) : (
        <input
          type="text"
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          value={changedText}
          onChange={handleChange}
        />
      )}
      <div>
        <button
          type="button"
          onClick={() => handleDelete(todo.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-md mr-2 hover:bg-red-700"
        >
          Delete
        </button>
        {isEditing ? (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              handleEdit(todo.id, changedText);
            }}
            className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={handleIsEditing}
            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
