import { combineReducers } from 'redux';
import users from './users';
import quiz from './quiz-reducer';

const reducers = combineReducers({
  users,
  quiz
})

export default reducers;
