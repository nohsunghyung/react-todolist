import TodoStore from "./TodoStore";
import CounterStore from "./CounterStore";

class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.counterStore = new CounterStore(this);
  }
}

export default RootStore;
