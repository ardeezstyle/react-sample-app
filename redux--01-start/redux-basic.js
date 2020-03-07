const redux = require("redux");

const createStore = redux.createStore;
const initialState = {
  count: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  // if(action.type === 'INC_COUNTER') {
  //   return { ...state, count: state.count + 1 };
  // }
  //
  // if(action.type === 'DEC_COUNTER') {
  //   return { ...state, count: state.count - 1 };
  // }
  //
  // if(action.type === 'ADD_COUNTER') {
  //   return { ...state, count: state.count + action.value };
  // }
  //
  // if(action.type === 'DELETE_COUNTER') {
  //   return { ...state, count: state.count - action.value };
  // }


  switch(action.type) { //IMMUTATABLE
    case 'INC_COUNTER':
      return { ...state, count: state.count + 1 };
    case 'DEC_COUNTER':
      return { ...state, count: state.count - 1 };
    case 'ADD_COUNTER':
      return { ...state, count: state.count + action.value };
    case 'DELETE_COUNTER':
      return { ...state, count: state.count - action.value };
  }
}

// Store
const store = createStore(rootReducer);
// console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription 1]', store.getState());
});

store.subscribe(() => {
  console.log('[Subscription 2]', store.getState());
});



// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});

store.dispatch({type: 'INC_COUNTER'});

store.dispatch({type: 'DEC_COUNTER'});

store.dispatch({type: 'ADD_COUNTER', value: 10});

store.dispatch({type: 'DELETE_COUNTER', value: 10});
