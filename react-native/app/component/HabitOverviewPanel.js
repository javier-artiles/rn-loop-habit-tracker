/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';


const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 16
  },
  detailRow: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 35
  },
  detailCell: {
    marginRight: 12,
    marginLeft: 12,
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  detailTopText: {
    fontSize: 14
  },
  detailBottomText: {
    fontSize: 14,
    color: '#9E9E9E'
  }
});


type Props = {}

type State = {}


export default class HabitOverviewPanel extends React.Component<Props, State> {

  renderDataSnippets() {
    return [
      {top: '50%', bottom: 'Score'},
      {top: '+43%', bottom: 'Month'},
      {top: '+50%', bottom: 'Year'},
      {top: '19', bottom: 'Total'}
    ].map(data => {
      return (
        <View
          key={data.bottom}
          style={styles.detailCell}
        >
          <Text
            style={styles.detailTopText}
          >
            {data.top}
          </Text>
          <Text
            style={styles.detailBottomText}
          >
            {data.bottom}
          </Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.header}
        >
          Overview
        </Text>
        <View
          style={styles.detailRow}
        >
          <ProgressCircle
            outerCircleStyle={{marginRight: 10}}
            percent={30}
            radius={20}
            borderWidth={7}
            color="black"
            shadowColor="#999"
            bgColor="#fff"
          />
          {this.renderDataSnippets()}
        </View>
      </View>
    );
  }
}