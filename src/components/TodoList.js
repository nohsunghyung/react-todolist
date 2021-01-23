import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TodoItem from "./TodoItem";

/*
  todo list 컴포넌트
*/

@inject("todoStore")
@observer
class TodoList extends Component {
  render() {
    const { todoStore } = this.props;
    const { todoList } = todoStore;
    return (
      <ul className="todo-list">
        {todoList.map((list) => (
          <TodoItem key={list.id} list={list} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
