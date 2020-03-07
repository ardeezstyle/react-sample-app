const initialState = {
  counter: 100,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1};
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1};
    case 'ADD_COUNTER':
      return { ...state, counter: state.counter + action.payload};
    case 'DELETE_COUNTER':
      return { ...state, counter: state.counter - action.payload};
    case 'STORE_RESULTS':
      return { ...state, results: state.results.concat({id: new Date(), value: state.counter})};
    case 'DELETE_RESULT':
      const updatedArray = state.results.filter(res => res.id !== action.payload);
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
}

export default reducer;
