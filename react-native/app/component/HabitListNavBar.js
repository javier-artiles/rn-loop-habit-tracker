/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
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
  buttonView: {
    flexDirection: 'row'
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

type State = {
  sortMenuOpen: boolean
}

export default class HabitListNavBar extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      sortMenuOpen: false
    };
  }

  openSortMenu = () => {
    this.setState({sortMenuOpen: true});
  };

  closeSortMenu = () => {
    this.setState({sortMenuOpen: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Habits
        </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => Actions.newHabit()}
          >
            <MaterialIcon
              name='add'
              style={styles.icon}
            />
          </TouchableOpacity>
          <Menu>
            <MenuTrigger>
              <MaterialIcon
                name='filter-list'
                style={styles.icon}
              />
            </MenuTrigger>
            <MenuOptions
              customStyles={menuOptionsStyles}
            >
              <MenuOption
                onSelect={() => alert('Hide archived')}
              >
                <Text style={menuOptionsStyles.optionText}>Hide archived</Text>
                <MaterialIcon
                  name={'check-box'}
                  style={menuOptionsStyles.optionIcon}
                />
              </MenuOption>
              <MenuOption
                onSelect={() => alert('Hide completed')}
              >
                <Text style={menuOptionsStyles.optionText}>Hide completed</Text>
                <MaterialIcon
                  name={'check-box-outline-blank'}
                  style={menuOptionsStyles.optionIcon}
                />
              </MenuOption>
              <MenuOption
                onSelect={this.openSortMenu}
              >
                <Text style={menuOptionsStyles.optionText}>Sort</Text>
                <FontAwesomeIcon
                  name={'caret-right'}
                  style={[menuOptionsStyles.optionIcon, {fontSize: 16, marginRight: 7}]}
                />
              </MenuOption>
            </MenuOptions>
          </Menu>
          <Menu
            opened={this.state.sortMenuOpen}
            onBackdropPress={this.closeSortMenu}
          >
            <MenuTrigger />
            <MenuOptions
              customStyles={menuOptionsStyles}
            >
              <View style={menuOptionsStyles.headerContainer}>
                <Text style={menuOptionsStyles.headerText}>
                  Sort
                </Text>
              </View>
              <MenuOption
                onSelect={() => alert('Manually')}
              >
                <Text style={menuOptionsStyles.optionText}>Manually</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('By name')}
              >
                <Text style={menuOptionsStyles.optionText}>By name</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('By color')}
              >
                <Text style={menuOptionsStyles.optionText}>By color</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('By score')}
              >
                <Text style={menuOptionsStyles.optionText}>By score</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
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
                onSelect={() => alert('Night Mode')}
              >
                <Text style={menuOptionsStyles.optionText}>Night Mode</Text>
                <MaterialIcon
                  name={'check-box-outline-blank'}
                  style={menuOptionsStyles.optionIcon}
                />
              </MenuOption>
              <MenuOption
                onSelect={() => Actions.settings()}
              >
                <Text style={menuOptionsStyles.optionText}>Settings</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('Help & FAQ')}
              >
                <Text style={menuOptionsStyles.optionText}>Help & FAQ</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert('About')}
              >
                <Text style={menuOptionsStyles.optionText}>About</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    );
  }

}