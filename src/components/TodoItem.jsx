import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const {
    todo, handleChangeProps, deleteTodoProps, setUpdateProps,
  } = props;
  const { id, title, completed } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.7,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div
        onDoubleClick={handleEditing}
        style={viewMode}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button
          type="button"
          onClick={() => deleteTodoProps(id)}
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdateProps(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

TodoItem.propTypes = {
  todo: TodoItem.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
};

export default TodoItem;
