import React, { Component } from "react";

/*
  등록 폼 컴포넌트
*/

class InsertForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="insert">
        <form>
          <input type="text" placeholder="Todo를 입력해주세요" />
          <button className="btn btn-add">등록</button>
        </form>
      </div>
    );
  }
}

export default InsertForm;
