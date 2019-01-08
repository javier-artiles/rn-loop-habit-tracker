/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import HabitListNavBar from '../component/HabitListNavBar';
import HabitListHeader from '../component/HabitListHeader';
import HabitListItem from '../component/HabitListItem';

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

export default class HabitListScene extends React.Component<Props, State> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding} />
        <HabitListNavBar />
        <HabitListHeader />
        <HabitListItem />
        <HabitListItem />
        <HabitListItem />
      </View>
    );
  }

}