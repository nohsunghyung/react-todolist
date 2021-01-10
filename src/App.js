import React, { Component } from "react";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todoLists: [
        {
          id: 1,
          text: "할일1",
          isComplete: false, // 완료된 할일 체크
          isUpdate: false,
        },
        {
          id: 2,
          text: "할일2",
          isComplete: false,
          isUpdate: false,
        },
        {
          id: 3,
          text: "할일2",
          isComplete: false,
          isUpdate: false,
        },
      ],
      nextId: 4,
    };
  }
  // 등록 input 변경
  onChangeValue = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };
  // todo의 완료상태를 변경
  onChangeComplete = (id) => {
    const newLists = this.state.todoLists.map((list) => {
      if (list.id === id) {
        return { ...list, isComplete: !list.isComplete };
      } else {
        return list;
      }

      // return list.id === id ? { ...list, isComplete: true } : list;
    });

    this.setState({
      todoLists: newLists,
    });
  };
  onSubmitForm = () => {
    const newItem = {
      id: this.state.nextId,
      text: this.state.inputValue,
      isComplete: false,
      isUpdate: false,
    };

    // 추가기능구현
    const newList = [...this.state.todoLists, newItem];
    this.setState({
      todoLists: newList,
      nextId: this.state.nextId + 1,
    });
  };
  // 수정폼 변경
  updateToggle = (id) => {
    const newLists = this.state.todoLists.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          isUpdate: !list.isUpdate,
        };
      } else {
        return list;
      }
    });
    this.setState({
      todoLists: newLists,
    });
  };
  // 업데이트 확인 버튼
  updateSubmitForm = (id, updateInputValue) => {
    const newList = this.state.todoLists.map((list) => {
      if (list.id === id) {
        return { ...list, text: updateInputValue, isUpdate: false };
      } else {
        return list;
      }
    });
    this.setState({
      todoLists: newList,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <header>TodoList</header>
          <div className="content">
            <InsertForm
              inputValue={this.state.inputValue}
              onChangeValue={this.onChangeValue}
              onSubmitForm={this.onSubmitForm}
            />
            <TodoList
              todoLists={this.state.todoLists}
              onChangeComplete={this.onChangeComplete}
              updateToggle={this.updateToggle}
              updateSubmitForm={this.updateSubmitForm}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
