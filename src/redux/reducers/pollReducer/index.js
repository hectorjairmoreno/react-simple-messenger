import { ADD_POLL_SELECTION, CONFIRM_POLL_SELECTION } from "../../types";

const INTIAL_STATE = {
  pollSelection: {},
  selectionOneTotal: { count: 0, name: "Pizza" },
  selectionTwoTotal: { count: 0, name: "Burrito" },
};

function pollReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case ADD_POLL_SELECTION:
      return { ...state, pollSelection: action.payload };

    case CONFIRM_POLL_SELECTION:
      return {
        pollSelection: {},
        selectionOneTotal: {
          count:
            state.pollSelection.pollSelection === "selectionOne"
              ? state.selectionOneTotal.count + 1
              : state.selectionOneTotal.count,
          name: "Pizza",
        },
        selectionTwoTotal: {
          count:
            state.pollSelection.pollSelection === "selectionTwo"
              ? state.selectionTwoTotal.count + 1
              : state.selectionTwoTotal.count,
          name: "Burrito",
        },
      };

    default:
      return state;
  }
}

export default pollReducer;
