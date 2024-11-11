class StateManager {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = newState;
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.state));
  }
}

let stateManager;
const useState = (initialState) => {
  stateManager = new StateManager(initialState);

  const getState = () => stateManager.getState();

  const setState = (newState) => {
    const oldState = stateManager.getState();
    if (!Object.is(oldState, newState)) {
      stateManager.setState(newState);
    }
  };

  return [getState, setState];
};

export { useState };
