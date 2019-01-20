/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import CalendarChart from './CalendarChart';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 16
  },
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  editButton: {
    marginTop: 5,
    alignItems: 'center'
  },
  editButtonText: {
    fontSize: 19,
    color: 'gray'
  }
});


type Props = {}

type State = {}


export default class HabitHistoryPanel extends React.Component<Props, State> {

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.headerPanel}>
          <Text
            style={styles.header}
          >
            History
          </Text>
        </View>
        <CalendarChart/>
        <TouchableOpacity
          style={styles.editButton}
        >
          <Text
            style={styles.editButtonText}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}