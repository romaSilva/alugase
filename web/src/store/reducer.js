export default (state, action) => {
  switch (action.type) {
    case "SET_NEW_DATA":
      return {
        ...state,
        newData: action.payload,
      };
    default:
      return state;
  }
};
