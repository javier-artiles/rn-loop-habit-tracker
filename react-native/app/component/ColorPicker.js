/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Color = require('color');

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'rgba(52,52,52,0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
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
  colorButtonPanel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    padding: 15
  },
  buttonOuterCircle: {
    fontSize: 60,
    margin: 1
  },
  buttonInnerCircle: {
    position: 'absolute',
    fontSize: 40,
    top: 11.5,
    left: 11.5
  }
});

type Props = {
  selectedColor: string,
  onSelectColor: (color: string) => void
}

export default class ColorPicker extends React.Component<Props, State> {
  static defaultProps = {
    selectedColor: '#D32F2F'
  };

  // TODO getSelectedColor -> either state or prop
  // TODO props.onSelectColor

  renderButtons() {
    return [
      '#D32F2F',
      '#E64A19',
      '#F9A825',
      '#AFB42B',
      '#049BE5',
      '#00ACC1',
      '#01897B',
      '#388E3C',
      '#5E34B1',
      '#8E24AA',
      '#D81A60',
      '#424242',
      '#9E9E9E'
    ].map(color => {
      return (
        <TouchableWithoutFeedback
          key={color}
          onPress={() => this.props.onSelectColor(color)}
        >
          <View>
            <MaterialCommunityIcon
              name='circle'
              style={[styles.buttonOuterCircle, {color}]}
            />
            {this.props.selectedColor === color &&
            <MaterialCommunityIcon
              name='circle'
              style={[styles.buttonInnerCircle, {color: Color(color).darken(0.2)}]}
            />
            }
          </View>
        </TouchableWithoutFeedback>
      );
    });
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.shadow}
        onPress={() => Actions.pop()}
        activeOpacity={1}
      >
        <TouchableWithoutFeedback>
          <View
            style={styles.container}
          >
            <Text style={styles.headerText}>
              Change color
            </Text>
            <View
              style={styles.colorButtonPanel}
            >
              {this.renderButtons()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    );
  }
}

