/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, Dimensions} from 'react-native';
import VerticalDayLabelPanel from './VerticalDayLabelPanel';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const _ = require('lodash');
const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderTopWidth: 0.5,
    borderColor: 'gray'
  },
  monthColumnsPanel: {
    flexDirection: 'row'
  },
  monthColumnPanel: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  monthColumnLabelPanel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthColumnLabelText: {
    marginTop: 5,
    fontSize: 11,
    color: 'gray',
    textAlign: 'center'
  },
  dayCellPanel: {
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  }
});


type Props = {}

type State = {}


export default class FrequencyChart extends React.Component<Props, State> {

  renderMonthColumns(numColumns: number, cellSize: number, cellMargin: number) {
    return _.range(0, numColumns)
      .map((index: number) => moment().subtract(index, 'months'))
      .reverse()
      .map((date: moment, index: number) => {
        const showYear = date.month() === 0;
        return (
          <View
            key={`${date}-${index}`}
            style={[styles.monthColumnPanel, {width: cellSize}]}
          >
            {this.renderMonthColumn(date, cellSize, cellMargin, showYear)}
          </View>
        );
      });
  }

  renderMonthColumn(date: moment, cellSize: number, cellMargin: number, showYear: boolean) {
    const cells = moment.weekdaysShort()
      .map(weekdayShort => {
        // TODO replace this randomized values with actual user data
        const showCircle = Math.random() > 0.6;
        const randomFactor = Math.random();
        const circleSize = Math.max(8, randomFactor * 20);
        const opacity = Math.max(0.5, randomFactor);
        const dynamicPanelStyle = {
          height: cellSize,
          width: cellSize + cellMargin * 2,
          margin: cellMargin,
        };
        return (
          <View
            key={weekdayShort}
            style={[styles.dayCellPanel, dynamicPanelStyle]}
          >
            {showCircle &&
            <MaterialCommunityIcon
              name='circle'
              style={{
                fontSize: circleSize,
                opacity
              }}
            />
            }
          </View>
        );
      });

    const label = date.format(showYear ? 'MMM YYYY' : 'MMM');
    cells.push(
      <View
        key={date.format('MMM YYYY')}
        style={styles.monthColumnLabelPanel}
      >
        <Text
          style={styles.monthColumnLabelText}
        >
          {label}
        </Text>
      </View>
    );
    return cells;
  }

  // This ensures that the view will be re-rendered on changes of orientation,
  // but forces one unnecessarily update upon the first rendering
  onLayout() {
    this.forceUpdate();
  }

  render() {
    // TODO move some of these magic numbers to props and defaults
    const windowWidth = Dimensions.get('window').width;
    const panelWidth = windowWidth - 60;
    const cellSize = 27;
    const cellMargin = 1;
    const numColumns = panelWidth / (cellSize + cellMargin);
    return (
      <View
        style={styles.container}
        onLayout={this.onLayout.bind(this)}
      >
        <View
          style={styles.monthColumnsPanel}
        >
          {this.renderMonthColumns(numColumns, cellSize, cellMargin)}
        </View>
        <VerticalDayLabelPanel
          cellHeight={cellSize}
          cellMargin={cellMargin}
          showCellSeparator
        />
      </View>
    );
  }
}