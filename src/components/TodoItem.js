import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  const { id, title, completed } = todo;
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => handleChangeProps(id)} />
      {' '}
      <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
      {title}
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

TodoItem.propTypes = {
  todo: TodoItem.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
