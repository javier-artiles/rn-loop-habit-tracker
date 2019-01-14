/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LineChart from './LineChart';


const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 16
  },
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuTrigger: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

const menuOptionsStyles = {
  optionsContainer: {
    width: 100
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


type Props = {}

type State = {}


export default class HabitStrengthPanel extends React.Component<Props, State> {

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.headerPanel}>
          <Text
            style={styles.header}
          >
            Habit strength
          </Text>
          <Menu>
            <MenuTrigger>
              <View
                style={styles.menuTrigger}
              >
                <Text>
                  Day
                </Text>
                <FontAwesomeIcon
                  name={'caret-down'}
                  style={styles.caretDownIcon}
                />
              </View>
            </MenuTrigger>
            <MenuOptions
              customStyles={menuOptionsStyles}
            >
              <MenuOption
                onSelect={() => alert('Day')}
              >
                <Text style={menuOptionsStyles.optionText}>Day</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('Week')}
              >
                <Text style={menuOptionsStyles.optionText}>Week</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('Month')}
              >
                <Text style={menuOptionsStyles.optionText}>Month</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('Quarter')}
              >
                <Text style={menuOptionsStyles.optionText}>Quarter</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('Year')}
              >
                <Text style={menuOptionsStyles.optionText}>Year</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
        <View style={{marginTop: 15}}>
          <LineChart/>
        </View>
      </View>
    );
  }
}