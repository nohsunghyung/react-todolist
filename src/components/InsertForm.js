import React, { Component } from "react";

/*
  등록 폼 컴포넌트
*/

class InsertForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  onChangeInput = (e) => {
    const value = e.target.value;
    const { onChangeInput } = this.props;
    this.setState({
      inputValue: value,
    });
    onChangeInput(value);
  };
  addTodo = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="insert">
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Todo를 입력해주세요"
            value={inputValue}
            onChange={this.onChangeInput}
          />
          <button className="btn btn-add">등록</button>
        </form>
      </div>
    );
  }
}

export default InsertForm;
