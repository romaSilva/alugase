export default (state, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};
