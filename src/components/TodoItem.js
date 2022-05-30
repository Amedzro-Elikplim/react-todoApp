import React from 'react';

const TodoItem = (props) => (
  <li>
    <input type="checkbox" checked={props.todo.completed} />
    {props.todo.title}
  </li>
);

export default TodoItem;
