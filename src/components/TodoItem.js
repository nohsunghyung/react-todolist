import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateInputValue: "",
    };
  }
  onChangeInpuValue = (e) => {
    const value = e.target.value;
    this.setState({
      updateInputValue: value,
    });
  };
  updateToggleFn = (id, text) => {
    this.props.updateToggle(id);
    this.setState({
      updateInputValue: text,
    });
  };
  render() {
    const {
      list,
      onChangeComplete,
      updateToggle,
      updateSubmitForm,
    } = this.props;
    const { updateInputValue } = this.state;
    const { id, text, isComplete, isUpdate } = list;
    return (
      <li className={isComplete ? "list-item active" : "list-item"}>
        {isUpdate ? (
          <div>
            <input
              type="text"
              placeholder="todo를 적어주세요"
              value={updateInputValue}
              onChange={this.onChangeInpuValue}
            />
          </div>
        ) : (
          <>
            <div className="text">{text}</div>
            <div className="checked">
              <input
                type="checkbox"
                id="chk1"
                value={isComplete}
                onChange={() => onChangeComplete(id)}
              />
            </div>
          </>
        )}

        {isUpdate ? (
          /* 수정눌렀을경우 */
          <div className="button">
            <button
              type="button"
              className="btn btn-ok"
              onClick={() => updateSubmitForm(id, updateInputValue)}
            >
              수정완료
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={() => updateToggle(id)}
            >
              취소
            </button>
          </div>
        ) : (
          <div className="button">
            <button
              type="button"
              className="btn btn-modify"
              onClick={() => this.updateToggleFn(id, text)}
            >
              수정
            </button>
            <button type="button" className="btn btn-delete">
              삭제
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default TodoItem;
