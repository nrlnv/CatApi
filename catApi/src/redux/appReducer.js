import {SET_LOADING_TRUE, SET_LOADING_FALSE} from './types';

const initialState = {
  isLoading: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
