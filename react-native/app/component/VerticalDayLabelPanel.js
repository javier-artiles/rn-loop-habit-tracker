/**
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const moment = require('moment');

const styles = StyleSheet.create({
  dayNameLabelPanel: {
    justifyContent: 'center',
    marginLeft: 0,
    borderBottomColor: 'gray'
  },
  dayNameLabelText: {
    fontSize: 14,
    color: 'gray'
  },
});


type Props = {
  cellHeight: number,
  cellMargin: number,
  showCellSeparator: boolean
}

type State = {}


export default class VerticalDayLabelPanel extends React.Component<Props, State> {

  renderDayLabels(height: number, margin: number, showCellSeparator: boolean) {
    return moment.weekdaysShort().map(day => {
      const dynamicStyle = {
        height,
        margin,
        borderBottomWidth: showCellSeparator ? 0.5 : 0
      };
      return (
        <View
          key={day}
          style={[styles.dayNameLabelPanel, dynamicStyle]}
        >
          <Text
            style={styles.dayNameLabelText}
          >
            {day}
          </Text>
        </View>
      );
    });
  }

  render () {
    return (
      <View>
        {this.renderDayLabels(this.props.cellHeight, this.props.cellMargin, this.props.showCellSeparator)}
      </View>
    );
  }
}