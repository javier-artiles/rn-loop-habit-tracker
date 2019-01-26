/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 20
  },
  title: {
    color: '#2980b9',
    fontSize: 18
  }
});

type State = {}
type Props = {
  title: string
}

export default class SettingsSectionHeader extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
