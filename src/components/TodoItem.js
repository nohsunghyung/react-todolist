import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateValue: "",
    };
  }
  onChangeValue = (e) => {
    const value = e.target.value;
    this.setState({
      updateValue: value,
    });
  };
  onChangeEdit = (info) => {
    const { onChangeEdit } = this.props;
    onChangeEdit(info.id);
    this.setState({
      updateValue: info.text,
    });
  };
  updateTodo = (info) => {
    const { updateTodo } = this.props;
    const { updateValue } = this.state;
    updateTodo(info.id, updateValue);
  };
  render() {
    const { info, onChangeComplete, deleteItem, onChangeEdit } = this.props;
    const { id, text, isComplete, isEditActive } = info;
    const { updateValue } = this.state;
    return (
      <li className={isComplete ? "list-item active" : "list-item"}>
        {isEditActive ? (
          <>
            <div>
              <input
                type="text"
                placeholder="todo를 적어주세요"
                value={updateValue}
                onChange={this.onChangeValue}
              />
            </div>
            <div className="button">
              <button
                type="button"
                className="btn btn-ok"
                onClick={() => this.updateTodo(info)}
              >
                확인
              </button>
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => onChangeEdit(id)}
              >
                취소
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text">{text}</div>
            <div className="checked">
              <input
                type="checkbox"
                id="chk1"
                onChange={() => onChangeComplete(id)}
              />
            </div>
            <div className="button">
              <button
                type="button"
                className="btn btn-modify"
                onClick={() => this.onChangeEdit(info)}
              >
                수정
              </button>
              <button
                type="button"
                className="btn btn-delete"
                onClick={() => deleteItem(id)}
              >
                삭제
              </button>
            </div>
          </>
        )}
      </li>
    );
  }
}

export default TodoItem;
