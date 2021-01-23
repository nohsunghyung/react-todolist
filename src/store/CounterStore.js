import { makeAutoObservable, observable } from "mobx";

class CounterStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable
  counter = 1;
}

export default CounterStore;
