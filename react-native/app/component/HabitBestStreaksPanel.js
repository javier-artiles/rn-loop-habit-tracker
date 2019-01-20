/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

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
      </View>
    );
  }
}