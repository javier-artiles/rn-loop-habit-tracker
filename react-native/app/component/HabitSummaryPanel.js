/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40
  },
  questionText: {
    fontSize: 16
  },
  alarmIcon: {
    color: '#9E9E9E',
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8
  },
  repeatIcon: {
    color: '#9E9E9E',
    fontSize: 16,
    marginRight: 8
  },
  questionPanelTimeRow: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  timeText: {
    color: '#9E9E9E'
  }
});


type Props = {
  question: string
}

type State = {}


export default class HabitSummaryPanel extends React.Component<Props, State> {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.questionText}
        >
          {this.props.question}
        </Text>
        <View
          style={styles.questionPanelTimeRow}
        >
          <MaterialIcon
            name='repeat'
            style={styles.repeatIcon}
          />
          <Text
            style={styles.timeText}
          >
            6 times in 7 days
          </Text>
          <MaterialIcon
            name='alarm'
            style={styles.alarmIcon}
          />
          <Text
            style={styles.timeText}
          >
            8:00 PM
          </Text>
        </View>
      </View>
    );
  }
}