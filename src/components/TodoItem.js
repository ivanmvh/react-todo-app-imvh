import React from "react"

// code as a class
class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" /> {this.props.todo.title}
      </li>
    )
  }
}

/* code as a function
function TodoItem(props) {
    return  <li>{props.todo.title}</li>
}
*/

export default TodoItem