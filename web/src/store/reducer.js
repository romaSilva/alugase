export default (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        newData: action.payload,
      };
    default:
      return state;
  }
};
