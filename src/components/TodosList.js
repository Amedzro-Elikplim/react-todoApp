import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodosList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
