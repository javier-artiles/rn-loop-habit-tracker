/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingRight: 10,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  column: {
    width: 33,
    alignItems: 'center'
  },
  text: {
    color: '#9E9E9E',
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  dayName: {
    fontSize: 10
  },
  dayNumber: {
    fontSize: 12
  }
});

export default class HabitListScene extends React.Component<Props, State> {

  renderColumn(dayName: string, dayNumber: number) {
    return (
      <View
        key={dayNumber}
        style={styles.column}
      >
        <Text style={[styles.text, styles.dayName]}>
          {dayName.toUpperCase()}
        </Text>
        <Text style={[styles.text, styles.dayNumber]}>
          {dayNumber}
        </Text>
      </View>
    );
  }

  renderColumns() {
    return [
      {
        dayName: 'Wed',
        dayNumber: '2',
      },
      {
        dayName: 'Thu',
        dayNumber: '3',
      },
      {
        dayName: 'Fri',
        dayNumber: '4',
      },
      {
        dayName: 'Sat',
        dayNumber: '5',
      },
      {
        dayName: 'Sun',
        dayNumber: '6',
      }
    ].map(day => {
      const {dayName, dayNumber} = day;
      return this.renderColumn(dayName, dayNumber);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderColumns()}
      </View>
    );
  }
}