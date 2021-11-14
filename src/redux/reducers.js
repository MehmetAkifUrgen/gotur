import state from './store';
function reducers(state, action, index) {
  switch (action.type) {
    // case 'update_counter':
    //   return {...state, counter: state.counter + 1};
    case 'down_counter':
      return {
        ...state,
        arr: [...state.arr, action.newItem],
      };

    default:
      return state;
  }
}
export default reducers;
