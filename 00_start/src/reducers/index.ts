import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';

export interface State {  
  memberReducer : memberState;
};

export const reducers = combineReducers<State>({
  memberReducer,
});
