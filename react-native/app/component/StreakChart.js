/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, Dimensions} from 'react-native';

const _ = require('lodash');
const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  streakContainer: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  streakBar: {
    marginLeft: 5,
    marginRight: 5,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  streakBarText: {
    fontSize: 12,
    color: 'white'
  },
  dateRangeText: {
    color: 'grey',
    fontSize: 12
  }
});


type Props = {}

type State = {}


export default class StreakChart extends React.Component<Props, State> {

  renderStreakRows(maxNumRows: number, maxWidth: number) {
    return _.range(0, maxNumRows)
      .map(index => {
        const streakLengthInDays = Math.random() > 0.5 ? _.random(1, 10) : 1;
        const startDate = moment().subtract(index, 'days');
        const endDate = moment().subtract((index + streakLengthInDays) - 1, 'days');
        return {
          streakLengthInDays,
          startDate,
          endDate
        };
      })
      .filter(data => data.streakLengthInDays > 0)
      .map((data, index) => {
        const {streakLengthInDays, startDate, endDate} = data;
        const dynamicStreakBarStyle = {
          backgroundColor: streakLengthInDays === 1 ? 'lightgray' : 'black',
          opacity: streakLengthInDays === 1 ? 1 : Math.min(streakLengthInDays, 10) / 10,
          width: streakLengthInDays === 1 ? 20 : streakLengthInDays * ((maxWidth - 160) / 10)
        };
        return (
          <View
            key={index}
            style={[styles.streakContainer, {width: maxWidth}]}
          >
            <Text
              style={styles.dateRangeText}
            >
              {startDate.format('MMM D, YYYY')}
            </Text>
            <View
              style={[styles.streakBar, dynamicStreakBarStyle]}
            >
              <Text
                style={styles.streakBarText}
              >
                {streakLengthInDays}
              </Text>
            </View>
            <Text
              style={styles.dateRangeText}
            >
              {endDate.format('MMM D, YYYY')}
            </Text>
          </View>
        );
      });
  }

  // This ensures that the view will be re-rendered on changes of orientation,
  // but forces one unnecessarily update upon the first rendering
  onLayout() {
    this.forceUpdate();
  }

  render() {
    const maxNumRows = 9;
    const windowWidth = Dimensions.get('window').width;
    return (
      <View
        onLayout={this.onLayout.bind(this)}
        style={styles.container}
      >
        {this.renderStreakRows(maxNumRows, windowWidth - 40)}
      </View>
    );
  }
}