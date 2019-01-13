/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';


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
    const data = [ 0, 10, 20, 30, 40, 35, 45, 55, 50, 60, 70, 80];
    const xLabel = [ 'Dec\n2018', '31', 'Jan\n2019', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const contentInset = { top: 20, bottom: 20, left: 10, right: 10 };
    const Decorator = ({ x, y, data }) => {
      return data.map((value, index) => (
        <Circle
          key={ index }
          cx={ x(index) }
          cy={ y(value) }
          r={ 4 }
          stroke={ 'rgb(134, 65, 244)' }
          fill={ 'white' }
        />
      ));
    };

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
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
            data={ data }
            contentInset={ contentInset }
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={ 5 }
            formatLabel={ value => `${value}%` }
          />
          <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={ data }
            svg={{ stroke: 'black' }}
            numberOfTicks={ 5 }
            contentInset={ contentInset }
            yMax={100}
            yMin={0}
          >
            <Grid/>
            <Decorator />
          </LineChart>
        </View>
        <XAxis
          style={{ marginHorizontal: 30 }}
          data={ data }
          svg={{
            fill: 'black',
            fontSize: 12,
            flexWrap: 'wrap'
          }}
          formatLabel={ (value, index) => xLabel[index] }
          contentInset={{ left: 10, right: 10 }}
        />
      </View>
    );
  }
}