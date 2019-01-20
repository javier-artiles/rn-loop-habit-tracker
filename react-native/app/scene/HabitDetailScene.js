/**
 * @flow
 */

import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HabitDetailNavBar from '../component/HabitDetailNavBar';
import HabitSummaryPanel from '../component/HabitSummaryPanel';
import HabitOverviewPanel from '../component/HabitOverviewPanel';
import HabitStrengthPanel from '../component/HabitStrengthPanel';
import HabitHistoryPanel from '../component/HabitHistoryPanel';
import HabitBestStreaksPanel from '../component/HabitBestStreaksPanel';
import HabitFrequencyPanel from '../component/HabitFrequencyPanel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 40
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
      <ScrollView style={styles.container}>
        <View style={styles.padding} />
        <HabitDetailNavBar
          title={this.props.title}
        />
        <HabitSummaryPanel
          question={'Did you avoid sugars and bread today?'}
        />
        <HabitOverviewPanel/>
        <HabitStrengthPanel/>
        <HabitHistoryPanel/>
        <HabitBestStreaksPanel/>
        <HabitFrequencyPanel/>
      </ScrollView>
    );
  }
}