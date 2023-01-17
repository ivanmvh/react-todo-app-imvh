import React from 'react';
/* eslint-disable react/prop-types */
function TodoItem(props) {
  const { todo, handleChangeProps } = props;
  const { id, title, completed } = todo;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      {' '}
      { title }
    </li>
  );
}

// code as a class
/*
class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {' '}
        {this.props.todo.title}
      </li>
    );
  }
}
*/

export default TodoItem;
