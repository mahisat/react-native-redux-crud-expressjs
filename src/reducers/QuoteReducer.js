import {SAMPLE_ACTION} from '../actions/types';
const INITIAL_STATE = {
  quotes: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return state;

    default:
      return state;
  }
};
