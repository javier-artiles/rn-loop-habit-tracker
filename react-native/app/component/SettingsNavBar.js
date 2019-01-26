/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
  title: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20
  },
  icon: {
    color: 'white',
    fontSize: 22,
    width: 45
  },
  leftView: {
    flexDirection: 'row'
  },
  arrowBackIcon: {
    fontSize: 24,
    width: 40,
    color: 'white'
  }
});

type State = {}
type Props = {}

export default class SettingsNavBar extends React.Component<Props, State> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
          >
            <MaterialIcon
              name='arrow-back'
              style={styles.arrowBackIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            Settings
          </Text>
        </View>
      </View>
    );
  }

}