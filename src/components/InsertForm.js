import React, { Component } from "react";

/*
  등록 폼 컴포넌트
*/

class InsertForm extends Component {
  constructor() {
    super();
  }
  render() {
    const { onSubmitForm } = this.props;
    return (
      <div className="insert">
        <input
          type="text"
          placeholder="Todo를 입력해주세요"
          value={this.props.inputValue}
          /* 
            인자를 넘겨줘야할때는 () => function(id);
            넘겨줄 인자가 없을경우는 this.function
          */
          onChange={this.props.onChangeValue}
        />
        <button className="btn btn-add" onClick={onSubmitForm}>
          등록
        </button>
      </div>
    );
  }
}

export default InsertForm;
