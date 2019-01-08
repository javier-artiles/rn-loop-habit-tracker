/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';


const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
  title: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20
  },
  icon: {
    color: 'white',
    fontSize: 22,
    width: 45
  },
  leftView: {
    flexDirection: 'row'
  },
  rightView: {
    flexDirection: 'row'
  },
  arrowBackIcon: {
    fontSize: 24,
    width: 40,
    color: 'white'
  }
});

const menuOptionsStyles = {
  optionsContainer: {
    width: 180
  },
  optionWrapper: {
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12
  },
  optionText: {
    fontSize: 15,
    color: '#34495e'
  },
  optionIcon: {
    fontSize: 22,
    color: '#34495e'
  },
  headerContainer: {
    height: 45,
    justifyContent: 'center',
    padding: 12
  },
  headerText: {
    fontSize: 13,
    color: 'black'
  }
};

type State = {}
type Props = {
  title: string
}

export default class HabitListNavBar extends React.Component<Props, State> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
          >
            <MaterialIcon
              name='arrow-back'
              style={styles.arrowBackIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.rightView}>
          <Menu>
            <MenuTrigger>
              <MaterialIcon
                name='more-vert'
                style={styles.icon}
              />
            </MenuTrigger>
            <MenuOptions
              customStyles={menuOptionsStyles}
            >
              <MenuOption
                onSelect={() => alert('Export')}
              >
                <Text style={menuOptionsStyles.optionText}>Export</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    );
  }

}