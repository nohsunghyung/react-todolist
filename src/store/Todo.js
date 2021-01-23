import { makeAutoObservable, observable, action } from "mobx";

class Todo {
  constructor() {
    makeAutoObservable(this);
  }
  @observable todoList = [];
}

export default Todo;
