// src/reducers/index.js
const INITIAL_STATE = {
    counter: 0,
  };
  
  export default function clickReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case 'ADD_CLICK':
        return { counter: state.counter + 1 };
    case 'ON_CLICK':
        return { counter: state.counter - 1 };
    default:
      return state;
    }
  }