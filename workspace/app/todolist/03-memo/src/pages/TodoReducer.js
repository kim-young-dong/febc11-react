import { produce } from "immer";

const randomIdMaker = () => {
  return Math.random().toString(36).substr(2, 9);
};

// state: 현재 상태, action: { type: string, value: {_id: number, title: string, done: bool} }
function TodoReducer(state, action) {
  let newState;
  switch (action.type) {
    case "ADD":
      console.log("ADD", action.value);

      newState = state.concat({
        _id: randomIdMaker(),
        title: action.value.title,
        done: false,
      });
      break;
    case "TOGGLE":
      console.log("TOGGLE", action.value);

      newState = produce(state, (draft) => {
        const targetIndex = draft.findIndex(
          (item) => item._id === action.value.id
        );
        draft[targetIndex].done = !draft[targetIndex].done;
      });
      break;
    case "DELETE":
      console.log("DELETE", action.value);
      newState = produce(state, (draft) => {
        const targetIndex = draft.findIndex(
          (item) => item._id === action.value.id
        );
        draft.splice(targetIndex, 1);
      });
      break;
    default:
      newState = state;
  }
  return newState;
}

export default TodoReducer;
