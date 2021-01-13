import React, { Component } from "react";
import TodoItem from "./TodoItem";

/*
  todo list 컴포넌트
*/

class TodoList extends Component {
  render() {
    const {
      todos,
      onChangeComplete,
      deleteItem,
      onChangeEdit,
      updateTodo,
    } = this.props;
    return (
      <ul className="todo-list">
        {todos.map((info) => (
          <TodoItem
            info={info}
            key={info.id}
            onChangeComplete={onChangeComplete}
            deleteItem={deleteItem}
            onChangeEdit={onChangeEdit}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
