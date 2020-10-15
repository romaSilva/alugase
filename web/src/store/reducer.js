export default (state, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    case "SET_VIA_CEP_DATA":
      return {
        ...state,
        viaCepData: action.payload,
      };
    default:
      return state;
  }
};
