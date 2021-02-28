import {GET_ALL_BREEDS, SET_CURRENT_BREED} from './types';

const initialState = {
  breeds: null,
  currentBreed: null,
};

export default function breedsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BREEDS:
      return {...state, breeds: action.payload};
    case SET_CURRENT_BREED:
      return {
        ...state,
        currentBreed: action.payload,
      };
    default:
      return state;
  }
}
