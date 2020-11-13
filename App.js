import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Heartbeat from './Heartbeat';
import heart from './heart.png';
import {getUsers, store} from './store';

const App = ({heartBeat, coordinates, users}) => {
  // useEffect(() => {}, [heartBeat]);
  const imageSize = heartBeat ? 150 : 100;
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={heart}
          style={{width: imageSize, height: imageSize}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.instructions}>Coordinates</Text>
        <Text style={styles.instructions}>
          {'Latitude      ' + coordinates?.latitude}
        </Text>
        <Text style={styles.instructions}>
          {'Longitude     ' + coordinates?.longitude}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Heartbeat.startService()}>
          <Text style={styles.instructions}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Heartbeat.stopService()}>
          <Text style={styles.instructions}>Stop</Text>
        </TouchableOpacity>
        <ScrollView>
          {users?.map(({item}) => {
            return <Text>{item.title}</Text>;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

const mapStateToProps = (store) => ({
  heartBeat: store.App.heartBeat,
  coordinates: store.App.coords,
  users: store.App.users,
});

export default connect(mapStateToProps)(App);
