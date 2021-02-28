import {GET_ALL_BREEDS, SET_LOADING_TRUE, SET_LOADING_FALSE, SET_CURRENT_BREED} from './types';

export const getAllBreedsAction = (breeds) => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_BREEDS,
      payload: breeds,
    });
  };
};

export const setCurrentBreedAction = (breed) => {
  return function (dispatch) {
    dispatch({
      type: SET_CURRENT_BREED,
      payload: breed,
    });
  };
};

export const setLoadingTrueAction = () => {
  return function (dispatch) {
    dispatch({
      type: SET_LOADING_TRUE,
    });
  };
};
export const setLoadingFalseAction = () => {
  return function (dispatch) {
    dispatch({
      type: SET_LOADING_FALSE,
    });
  };
};
