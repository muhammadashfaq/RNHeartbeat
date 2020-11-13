import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {setHeartBeat, store, setCurrentCoords} from './store';
import Geolocation from '@react-native-community/geolocation';

const MyHeadlessTask = async () => {
  console.log('Receiving HeartBeat!');
  store.dispatch(setHeartBeat(true));
  Geolocation.getCurrentPosition((info) => makeApiCall(info.coords));
  setTimeout(async () => {
    store.dispatch(setHeartBeat(false));
  }, 10000);
};

const makeApiCall = async (coords) => {
  console.log('[coords]', coords);
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await response.json();
    console.log('[res]', res);
    if (res) {
    }
    //   store.dispatch(getUsers(res));
  } catch (err) {
    console.log(err);
  }
};

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerHeadlessTask('Heartbeat', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => RNRedux);
