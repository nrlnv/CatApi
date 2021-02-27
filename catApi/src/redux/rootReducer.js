import {combineReducers} from 'redux';
import breedsReducer from './breedsReducer';
import appReducer from './appReducer';

export const rootReducer = combineReducers({
  breeds: breedsReducer,
  app: appReducer,
});
