import React, { Component } from "react";
import TodoItem from "./TodoItem";

/*
  todo list 컴포넌트
*/

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <TodoItem />
      </ul>
    );
  }
}

export default TodoList;
