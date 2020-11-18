import { ADD_POLL_SELECTION, CONFIRM_POLL_SELECTION } from "../../types";

export function addPollSelection(optionSelected) {
  return {
    type: ADD_POLL_SELECTION,
    payload: optionSelected,
  };
}

export function confirmPollSelection() {
  return {
    type: CONFIRM_POLL_SELECTION,
  };
}
