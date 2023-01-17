import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment 1',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodosList
          todos={todos}
          handleChangeProps={this.handleChange}
        />
      </div>
    );
  }
}
export default TodoContainer;
