import React, { Component } from "react";
import TodosContainer from "./containers/TodosContainer";

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
            <TodosContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
