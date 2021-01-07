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
        },
        {
          id: 2,
          text: "할일2",
          isComplete: false,
        },
        {
          id: 3,
          text: "할일3",
          isComplete: false,
        },
      ],
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
    // 수정은 map함수
    // 등록 or 추가 concat함수
    // 삭제 filter 함수
    // state의 배열과 객체를 변경할때는 직접 수정은 안되고 새로운 배열을 넣어줘야함

    const newTodoList = this.state.todoLists.map((info) => {
      if (info.id === id) {
        return { ...info, isComplete: !info.isComplete };
      } else {
        return info;
      }

      // return info.id === id ? { ...info, isComplete: !info.isComplete } : info;
    });

    this.setState({
      todoLists: newTodoList,
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
            />
            <TodoList
              todoLists={this.state.todoLists}
              onChangeComplete={this.onChangeComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
