import React, { PureComponent } from 'react'

class TodosList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
                <ul>
                    {this.props.todos.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
        )
    }
}

export default TodosList