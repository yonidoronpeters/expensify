import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});
const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count,
});
const resetCount = () => ({
  type: 'RESET',
});

// Reducers
// 1. Reducers are pure functions
// 2. Never set state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = action.incrementBy;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = action.decrementBy;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    case 'SET':
      return {
        count: state.count = action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
