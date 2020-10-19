export default (state, action) => {
  switch (action.type) {
    case "SET_APP_MGMT":
      return {
        ...state,
        appMgmt: action.payload,
      };
    case "SET_ALL_REALTIES":
      return {
        ...state,
        allRealties: action.payload,
      };
    case "SET_FILTERED_REALTIES":
      return {
        ...state,
        filteredRealties: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_NEW_DATA":
      return {
        ...state,
        newData: action.payload,
      };
    default:
      return state;
  }
};
