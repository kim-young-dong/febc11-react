import { produce } from "immer";

const randomIdMaker = () => {
  return Math.random().toString(36).substr(2, 9);
};

// state: 현재 상태, action: { type: string, value: {_id: number, title: string, done: bool} }
function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state.concat({
        _id: randomIdMaker(),
        title: action.value.title,
        done: false,
      });
    case "TOGGLE":
      return produce(state, (draft) => {
        const todo = draft.find((todo) => todo.id === action.value.id);
        if (todo) {
          todo.done = !todo.done;
        }
      });
    case "DELETE":
      return state.filter((todo) => todo.id !== action.value.id);
    default:
      return state;
  }
}

export default TodoReducer;
