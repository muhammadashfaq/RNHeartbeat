import {createStore, combineReducers} from 'redux';
import {createAction, handleActions} from 'redux-actions';

const appInitialState = {
  heartBeat: false,
};

const SET_HEART_BEAT = 'SET_HEART_BEAT';
const SET_CURRENT_COORDS = 'SET_CURRENT_COORDS';
const USERS = 'GET_USERS';
export const setHeartBeat = createAction(SET_HEART_BEAT);
export const setCurrentCoords = createAction(SET_CURRENT_COORDS);
export const getUsers = createAction(USERS);

const App = handleActions(
  {
    [SET_HEART_BEAT]: (state, {payload}) => ({
      ...state,
      heartBeat: payload,
    }),
    [SET_CURRENT_COORDS]: (state, {payload}) => ({
      ...state,
      coords: payload,
    }),
    [USERS]: (state, {payload}) => ({
      ...state,
      users: payload,
    }),
  },
  appInitialState,
);

const rootReducer = combineReducers({
  App,
});

const configureStore = () => createStore(rootReducer);
export const store = configureStore();
