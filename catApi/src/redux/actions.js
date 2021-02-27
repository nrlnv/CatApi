import {INC, DEC} from './types';

export const inc = () => {
  return function (dispatch) {
    dispatch({
      type: INC,
    });
  };
};

export const dec = () => {
  return function (dispatch) {
    dispatch({
      type: DEC,
    });
  };
};
