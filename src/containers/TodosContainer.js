import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onChangeInput,
  addTodo,
  onChangeComplete,
  deleteItem,
  onChangeEdit,
  updateTodo,
} from "../modules/todos";
import InsertForm from "../components/InsertForm";
import TodoList from "../components/TodoList";

class TodosContainer extends Component {
  render() {
    const {
      inputValue,
      onChangeInput,
      addTodo,
      todos,
      onChangeComplete,
      deleteItem,
      onChangeEdit,
      updateTodo,
    } = this.props;

    return (
      <>
        <InsertForm
          inputValue={inputValue}
          onChangeInput={onChangeInput}
          addTodo={addTodo}
        />
        <TodoList
          todos={todos}
          onChangeComplete={onChangeComplete}
          deleteItem={deleteItem}
          onChangeEdit={onChangeEdit}
          updateTodo={updateTodo}
        />
      </>
    );
  }
}

export default connect(
  ({ todos }) => ({
    inputValue: todos.inputValue,
    todos: todos.todos,
  }),
  {
    onChangeInput,
    addTodo,
    onChangeComplete,
    deleteItem,
    onChangeEdit,
    updateTodo,
  }
)(TodosContainer);
