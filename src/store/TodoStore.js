import { makeAutoObservable, observable, action } from "mobx";

class TodoStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
  @observable todoList = [
    {
      id: 1,
      text: "할일1",
      isComplete: false,
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
  ];

  @observable
  todoInput = "";

  @action
  onChangeValue(name, value) {
    this[name] = value;
  }
}

export default TodoStore;
