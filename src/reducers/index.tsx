import { combineReducers } from 'redux';
import aprovacaoReducer from './aprovacaoReducer';

export default combineReducers({
  aprovacao: aprovacaoReducer,
});
