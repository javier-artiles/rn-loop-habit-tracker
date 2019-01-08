/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingLeft: 10,
    marginBottom: 4,
    marginRight: 0,
    marginLeft: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    marginLeft: 10
  },
  leftView: {
    flexDirection: 'row',
  },
  rightView: {
    flexDirection: 'row'
  },
  button: {
    width: 33
  },
  icon: {
    fontSize: 16
  }
});

type Props = {

}

export default class HabitListItem extends React.Component<Props, State> {

  renderButton(checked: boolean, index: number) {
    const color = {color: checked ? 'black' : '#cacaca'};
    return (
      <TouchableOpacity
        key={index}
        style={styles.button}
      >
        <FontAwesomeIcon
          name={checked ? 'check' : 'remove'}
          style={[styles.icon, color]}
        />
      </TouchableOpacity>
    );
  }

  renderButtons() {
    return [false, false, true, true, true].map((checked, index) => this.renderButton(checked, index));
  }

  render() {
    const title = 'Avoid sugars and bread';
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => Actions.habitDetail({title})}
      >
        <View style={styles.leftView}>
          <ProgressCircle
            percent={30}
            radius={9}
            borderWidth={4}
            color="black"
            shadowColor="#999"
            bgColor="#fff"
          />
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.rightView}>
          {this.renderButtons()}
        </View>
      </TouchableOpacity>
    );
  }
}