/**
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import HabitDetailNavBar from '../component/HabitDetailNavBar';
import HabitSummaryPanel from '../component/HabitSummaryPanel';
import HabitOverviewPanel from '../component/HabitOverviewPanel';
import HabitStrengthPanel from '../component/HabitStrengthPanel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  padding: {
    height: 40,
    backgroundColor: '#2c3e50'
  }
});

type Props = {
  title: string
}

export default class HabitDetailScene extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding} />
        <HabitDetailNavBar
          title={this.props.title}
        />
        <HabitSummaryPanel
          question={'Did you avoid sugars and bread today?'}
        />
        <HabitOverviewPanel/>
        <HabitStrengthPanel/>
      </View>
    );
  }
}