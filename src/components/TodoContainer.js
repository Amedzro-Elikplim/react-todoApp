import React, { PureComponent } from 'react'
import TodosList from './TodosList';

class TodoContainer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          todo: [
            {
              id: 1,
              title: "Setup development environment",
              completed: true,
            },
            {
              id: 2,
              title: "Develop website and add content",
              completed: false,
            },
            {
              id: 3,
              title: "Deploy to live server",
              completed: false,
            },
          ],
        };
    }

    render() {
        return (
            <TodosList props={this.state.todo} />
        )
    }
}

export default TodoContainer