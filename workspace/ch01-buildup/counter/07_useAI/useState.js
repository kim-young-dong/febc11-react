// useState.js
let states = [];
let currentStateIndex = 0;

export const useState = (initialState) => {
  const stateIndex = currentStateIndex;

  // 상태가 없을 때만 초기화
  if (states[stateIndex] === undefined) {
    states[stateIndex] = {
      value: initialState,
      listeners: new Set(),
    };
  }

  currentStateIndex++;

  const getState = () => states[stateIndex].value;

  const setState = (newValue) => {
    const state = states[stateIndex];
    const nextValue =
      typeof newValue === "function" ? newValue(state.value) : newValue;

    if (!Object.is(state.value, nextValue)) {
      state.value = nextValue;
      state.listeners.forEach((listener) => listener(state.value));
    }
  };

  const useSubscribe = (listener) => {
    states[stateIndex].listeners.add(listener);
    return () => {
      states[stateIndex].listeners.delete(listener);
    };
  };

  return [getState, setState, useSubscribe];
};

// 리렌더링 전에 상태 인덱스 초기화를 위한 함수 추가
export const resetStateIndex = () => {
  currentStateIndex = 0;
};
