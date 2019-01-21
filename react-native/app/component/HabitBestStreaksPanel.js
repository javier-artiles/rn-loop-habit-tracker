/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import StreakChart from './StreakChart';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 4,
    paddingBottom: 20,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 16
  },
  headerPanel: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between'
  }
});


type Props = {}

type State = {}


export default class HabitBestStreaksPanel extends React.Component<Props, State> {

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.headerPanel}>
          <Text
            style={styles.header}
          >
            Best streaks
          </Text>
        </View>
        <StreakChart/>
      </View>
    );
  }
}