import React, { Component } from "react";
import TodoItem from "./TodoItem";

/*
  todo list 컴포넌트
*/

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todoLists.map((list) => (
          <TodoItem
            key={list.id}
            list={list}
            onChangeComplete={this.props.onChangeComplete}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
