import React from "react";

const TodoItem = ({
  title,
  onChangeTodos,
  dataIndex,
  dataId,
  onKeyDownTodos,
}) => {
  const inputStyle = {
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.2)",
  };

  const focusEvent = (e) => {
    e.target.style.boxShadow = inputStyle.boxShadow;
  };
  const blurEvent = (e) => {
    e.target.style.boxShadow = "";
    e.target.disabled = true;
  };
  const doubleClickEvent = (e) => {
    if (e.target.className === "todo-input") {
      if (e.target.value !== "") {
        e.target.disabled = false;
        e.target.focus();
      }
    }
  };

  const clickEvent = (e) => {
    if (e.target.value === "") {
      e.target.disabled = false;
      e.target.focus();
    }
  };
  return (
    <div className="todo-item" onDoubleClick={doubleClickEvent}>
      <input
        className="todo-input"
        placeholder="Type here..."
        data-index={dataIndex}
        data-id={dataId}
        value={title}
        onFocus={focusEvent}
        onBlur={blurEvent}
        onChange={onChangeTodos}
        onKeyDown={onKeyDownTodos}
        onClick={clickEvent}
        autoFocus
      />
    </div>
  );
};

export default TodoItem;
