import { useState } from "react";
import PropTypes from "prop-types";

function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    onAddTodo && title && onAddTodo(title);
    setTitle("");
  };

  const handleKeyUp = (event) => {
    event.preventDefault();
    event.key === "Enter" && handleAdd();
  };
  const handleChange = (event) => {
    setTitle(event.target.value.trim());
  };

  return (
    <div className="todoinput">
      <input
        type="text"
        autoFocus
        value={title}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}
TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoInput;
