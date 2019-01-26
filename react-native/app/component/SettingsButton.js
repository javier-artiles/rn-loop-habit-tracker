/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    paddingLeft: 20,
    paddingRight: 10,
    width: Dimensions.get('window').width,
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: '#2c3e50'
  },
  descriptionPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40
  },
  descriptionText: {
    fontSize: 18,
    color: 'grey'
  },
  checkBoxPanel: {
    alignItems: 'center'
  },
  checkBoxIcon: {
    fontSize: 30
  }
});

type State = {}
type Props = {
  title: string,
  description: ?string,
  showBottomBorder: boolean,
  checked: ?boolean
}

export default class SettingsButton extends React.Component<Props, State> {
  static defaultProps = {
    checked: undefined,
    description: undefined,
    showBottomBorder: true
  };

  render() {
    const dynamicContainerStyle = {
      borderBottomWidth: this.props.showBottomBorder ? 0.5 : 0,
    };
    const dynamicDescriptionTextStyle = {
      width: Dimensions.get('window').width - (this.props.checked !== undefined ? 80 : 40)
    };
    return (
      <TouchableOpacity style={[styles.container, dynamicContainerStyle]}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        {this.props.description !== undefined &&
        <View style={styles.descriptionPanel}>
          <Text style={[styles.descriptionText, dynamicDescriptionTextStyle]}>
            {this.props.description}
          </Text>
          {this.props.checked !== undefined &&
          <View style={styles.checkBoxPanel}>
            <MaterialIcon
              name={'check-box-outline-blank'}
              style={styles.checkBoxIcon}
            />
          </View>
          }
        </View>
        }
      </TouchableOpacity>
    );
  }

}
