import React, { PureComponent } from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
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

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <TodosList todos={todos} />
      </>
    );
  }
}

export default TodoContainer;
