const initialState = {
  value: 0
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default addReducer;
