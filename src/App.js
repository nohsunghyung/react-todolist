import React, { Component } from "react";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <header>TodoList</header>
          <div className="content">
            <InsertForm />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
