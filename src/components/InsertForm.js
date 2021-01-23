import React, { Component } from "react";
import { inject, observer } from "mobx-react";

/*
  등록 폼 컴포넌트
*/

@inject("todoStore")
@observer
class InsertForm extends Component {
  onChangeValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const { todoStore } = this.props;
    todoStore.onChangeValue(name, value);
  };
  render() {
    const { todoStore } = this.props;
    const { todoInput } = todoStore;
    return (
      <div className="insert">
        <form>
          <input
            type="text"
            name="todoInput"
            placeholder="Todo를 입력해주세요"
            value={todoInput}
            onChange={this.onChangeValue}
          />
          <button className="btn btn-add">등록</button>
        </form>
      </div>
    );
  }
}

export default InsertForm;
