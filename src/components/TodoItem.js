import React from 'react';
/* eslint-disable react/prop-types */
function TodoItem(props) {
  const { todo } = props;
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => props.handleChangeProps(todo.id)} />
      {' '}
      { todo.title }
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
