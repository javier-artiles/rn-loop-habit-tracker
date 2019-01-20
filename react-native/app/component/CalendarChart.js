/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, Dimensions} from 'react-native';
import VerticalDayLabelPanel from './VerticalDayLabelPanel';

const _ = require('lodash');
const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  monthLabelsPanel: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  dayGridPanel: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginRight: 5
  },
  rowLayoutPanel: {
    flexDirection: 'row'
  },
  monthLabelText: {
    color: 'grey',
    fontSize: 12,
    paddingLeft: 3,
    paddingBottom: 2
  },
  dayCellPanel: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  dayCellText: {
    color: 'white',
    fontSize: 12
  },
  emptyDayCellPanel: {
    backgroundColor: 'transparent'
  }
});


type Props = {}

type State = {}


export default class CalendarChart extends React.Component<Props, State> {

  getDateList(currentDayOfWeek: number, maxNumCells: number): moment[] {
    const rangePadding = 6 - currentDayOfWeek;
    const rangeStart = 0 - rangePadding;
    const rangeEnd = maxNumCells - rangePadding;
    return _.range(rangeStart, rangeEnd)
      .map(index => {
        const date = moment().subtract(index, 'days');
        return index >= 0 ? date : null;
      })
      .reverse();
  }

  renderDayGrid(
    dateList: moment[],
    dayCellSize: number,
    margin: number
  ) {
    return dateList
      .map((date, index) => {
        if (date === null) {
          return this.renderEmptyDayCell(index, dayCellSize, margin);
        } else {
          const dayOfMonth = date.date();
          return this.renderDayCell(index, dayCellSize, dayOfMonth, margin);
        }
      });
  }

  renderEmptyDayCell(index: number, dayCellSize: number, margin: number) {
    const dynamicStyle = {
      width: dayCellSize,
      height: dayCellSize,
      margin
    };
    return (
      <View
        key={index}
        style={[styles.emptyDayCellPanel, dynamicStyle]}
      />
    );
  }

  renderDayCell(index: number, dayCellSize: number, dayOfMonth: number, margin: number) {
    // TODO replace this random value with actual habit data
    const wasChecked = Math.random() > 0.6;
    const dynamicStyle = {
      margin,
      width: dayCellSize,
      height: dayCellSize,
      backgroundColor: wasChecked ? 'grey' : '#d8d8d8',
    };
    return (
      <View
        key={index}
        style={[styles.dayCellPanel, dynamicStyle]}
      >
        <Text
          style={styles.dayCellText}
        >
          {dayOfMonth}
        </Text>
      </View>
    );
  }

  renderMonthLabels(dateList: moment[], dayCellSize: number, dayCellMargin: number) {
    const headerDays = dateList.filter((value, index) => index % 7 === 0).reverse();
    const labelComponents = [];
    let cellSpan = 1;
    let index;
    for (index = 0; index < headerDays.length; index++) {
      const shouldDisplayYear = headerDays[index].month() === 0 || index === headerDays.length - 1;
      const dateFormat = shouldDisplayYear ? 'MMM YYYY' : 'MMM';
      const month = headerDays[index].format(dateFormat);
      const dayOfMonth = headerDays[index].date();
      const nextDayOfMonth = index + 1 >= headerDays.length ? null : headerDays[index + 1].date();
      const dynamicWidthStyle = {width: cellSpan * (dayCellSize + dayCellMargin * 2)};
      if (nextDayOfMonth === null || dayOfMonth < nextDayOfMonth) {
        labelComponents.push(
          <Text
            key={`${index}-${dayOfMonth}`}
            style={[styles.monthLabelText, dynamicWidthStyle]}
          >
            {month}
          </Text>
        );
        cellSpan = 0;
      }
      cellSpan ++;
    }
    return labelComponents.reverse();
  }

  // This ensures that the view will be re-rendered on changes of orientation,
  // but forces one unnecessarily update upon the first rendering
  onLayout() {
    this.forceUpdate();
  }

  render() {
    // TODO move some of these magic numbers to props and defaults
    const dayCellSize = 23;
    const dayCellMargin = 1;
    const numRows = 7;
    const chartHeight = (dayCellSize * numRows) + (dayCellMargin * 2) + 20;
    const windowWidth = Dimensions.get('window').width - 60;
    const numColumns = Math.floor(windowWidth / (dayCellSize + (dayCellMargin * 2)));
    const maxNumCells = numColumns * numRows;
    const currentDayOfWeek = moment().day();
    const dateList = this.getDateList(currentDayOfWeek, maxNumCells);
    return (
      <View
        onLayout={this.onLayout.bind(this)}
        style={styles.container}
      >
        <View
          style={styles.monthLabelsPanel}
        >
          {this.renderMonthLabels(dateList, dayCellSize, dayCellMargin)}
        </View>
        <View
          style={styles.rowLayoutPanel}
        >
          <View
            style={[styles.dayGridPanel, {height: chartHeight}]}
          >
            {this.renderDayGrid(dateList, dayCellSize, dayCellMargin)}
          </View>
          <VerticalDayLabelPanel
            cellHeight={dayCellSize}
            cellMargin={dayCellMargin}
          />
        </View>
      </View>
    );
  }
}