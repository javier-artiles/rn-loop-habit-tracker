/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ColorPicker from './ColorPicker';

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'rgba(52,52,52,0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: Dimensions.get('window').width - 30,
    borderRadius: 4,
    padding: 20,
    minHeight: 300,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20
  },
  footerButtonBar: {
    height: 40,
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  footerButton: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  footerButtonText: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Arial'
  },
  textInput: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  nameInputRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paletteIcon: {
    paddingLeft: 8,
    paddingRight: 10,
    fontSize: 22
  },
  repeatReminderRows: {
    height: 40,
    width: Dimensions.get('window').width - 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  repeatReminderText: {
    fontSize: 16,
    color: '#7f8c8d'
  },
  caretDownIcon: {
    fontSize: 16
  },
  repeatTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 160,
    height: 40
  },
  reminderTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 160,
    height: 40
  },
  repeatMenuOptionText: {
    fontSize: 16
  }
});

const repeatMenuOptionsStyles = {
  optionWrapper: {
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12
  },
};

type Props = {}

type State = {
  name: string,
  color: string,
  repeat: string,
  focus: string,
  showColorPicker: boolean
}

const repeatOptions = [
  {
    id: 'every-day',
    name: 'Every day'
  },
  {
    id: 'every-week',
    name: 'Every week'
  },
  {
    id: '2-times-per-week',
    name: '2 times per week'
  },
  {
    id: '5-times-per-week',
    name: '5 times per week'
  },
  {
    id: 'custom',
    name: 'Custom ...'
  }
];

export default class NewHabitLightbox extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      color: null,
      repeat: 'every-day',
      focus: null,
      showColorPicker: false
    };
  }

  renderTextInput(fieldName: string, placeholderText: string, width: number, textColor: string = 'black') {
    const isInFocus = this.state.focus === fieldName;
    const dynamicStyle = {
      borderBottomWidth: isInFocus ? 2 : 1,
      borderColor: isInFocus ? 'darkgreen' : 'black',
      color: textColor,
      width
    };
    return (
      <TextInput
        style={[styles.textInput, dynamicStyle]}
        placeholder={placeholderText}
        placeholderTextColor='darkgrey'
        onChangeText={(text) => {
          const newState = {};
          newState[fieldName] = text;
          this.setState(newState);
        }}
        onFocus={() => this.setState({focus: fieldName})}
        value={this.state[fieldName]}
      />
    );
  }

  renderRepeatMenu() {
    const repeatOptionName = repeatOptions.filter(opt => opt.id === this.state.repeat)[0].name;
    return (
      <Menu>
        <MenuTrigger>
          <View style={styles.repeatTrigger}>
            <Text>
              {repeatOptionName}
            </Text>
            <FontAwesomeIcon
              name={'caret-down'}
              style={styles.caretDownIcon}
            />
          </View>
        </MenuTrigger>
        <MenuOptions
          customStyles={repeatMenuOptionsStyles}
        >
          {this.renderRepeatMenuOptions()}
        </MenuOptions>
      </Menu>
    );
  }

  renderRepeatMenuOptions() {
    return repeatOptions.map(option => {
      return (
        (
          <MenuOption
            key={option.id}
            onSelect={() => this.setState({repeat: option.id})}
          >
            <Text style={styles.repeatMenuOptionText}>
              {option.name}
            </Text>
          </MenuOption>
        )
      );
    });
  }

  onSelectColor = (color: string): void => {
    console.log(color);
    this.setState({color});
  };

  onPressShadow = () => {
    this.state.showColorPicker ? this.setState({showColorPicker: false}) : Actions.pop();
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.shadow}
        onPress={this.onPressShadow}
        activeOpacity={1}
      >
        <TouchableWithoutFeedback>
          <View
            style={styles.container}
          >
            <Text style={styles.headerText}>
              Create habit
            </Text>
            <View style={styles.nameInputRow}>
              {this.renderTextInput('name', 'Name', Dimensions.get('window').width - 105, this.state.color)}
              <TouchableOpacity
                onPress={() => this.setState({showColorPicker: true})}
              >
                <MaterialIcon
                  name='palette'
                  style={styles.paletteIcon}
                />
              </TouchableOpacity>
            </View>
            {this.renderTextInput('question', 'Question (Did you ... today?)', Dimensions.get('window').width - 70)}
            <View style={styles.repeatReminderRows}>
              <Text style={styles.repeatReminderText}>
                Repeat
              </Text>
              {this.renderRepeatMenu()}
            </View>
            <View style={styles.repeatReminderRows}>
              <Text style={styles.repeatReminderText}>
                Reminder
              </Text>
              <View style={styles.reminderTrigger}>
                <Text>
                  Off
                </Text>
                <FontAwesomeIcon
                  name={'caret-down'}
                  style={styles.caretDownIcon}
                />
              </View>
            </View>
            <View style={styles.footerButtonBar}>
              <TouchableOpacity
                style={styles.footerButton}
              >
                <Text style={styles.footerButtonText}>
                  DISCARD
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.footerButton}
              >
                <Text style={styles.footerButtonText}>
                  SAVE
                </Text>
              </TouchableOpacity>
            </View>
            {this.state.showColorPicker &&
            <ColorPicker
              selectedColor={this.state.color}
              onSelectColor={this.onSelectColor}
            />
            }
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    );
  }

}