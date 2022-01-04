import { UPDATE_MODAL } from "../actions/modal.actions";

const initialState = {
  texts: {
    title: "",
    text: "",
    confirm: "",
  },
  visibility: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MODAL:
      return {
        ...state,
        ...action.modalState,
      };
    default:
      return state;
  }
};

export default ModalReducer;
