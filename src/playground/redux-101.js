import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    case 'SET':
      return {
        count: state.count = action.setTo
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => console.log(store.getState()));

const increment = {
  type: 'INCREMENT',
  incrementBy: 5
};
const decrement = {
  type: 'DECREMENT',
  decrementBy: 10
};
const reset = {
  type: 'RESET'
};
const set = {
  type: 'SET',
  setTo: 101
};
store.dispatch(increment);

store.dispatch(increment);

store.dispatch(reset);

store.dispatch(decrement);

store.dispatch(set);
