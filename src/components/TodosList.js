import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable react/prop-types */
function TodosList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleChangeProps={todos.handleChangeProps} />
      ))}
    </ul>
  );
}

/* class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </ul>
    );
  }
}

*/

export default TodosList;
