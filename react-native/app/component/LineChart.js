/**
 * @flow
 */

import Svg,{
  G,
  Text,
  Polyline,
  Line,
  Circle
} from 'react-native-svg';

import React from 'react';
import { Dimensions } from 'react-native';


type Props = {}

type State = {}


export default class LineChart extends React.Component<Props, State> {

  renderHorizontalLines(width: number) {
    return [0, 20, 40, 60, 80, 100].map(height => {
      const scaledHeight = height * 2;
      return (
        <Line
          key={height}
          x1="0"
          y1={scaledHeight}
          x2={width}
          y2={scaledHeight}
          stroke="darkgrey"
        />
      );
    });
  }

  renderYAxisLabels() {
    return [0, 20, 40, 60, 80].map(height => {
      const scaledHeight = height * 2;
      return (
        <Text
          key={height}
          fill="darkgrey"
          stroke="transparent"
          fontSize="10"
          fontWeight="normal"
          x={6}
          y={scaledHeight + 12}
          textAnchor="right"
        >
          {`${100 - height}%`}
        </Text>
      );
    });
  }

  renderXAxisLabels(width: number) {
    const xLabels = [
      {
        topText: 'Dec',
        bottomText: '2018'
      },
      {
        topText: '31'
      },
      {
        topText: 'Jan',
        bottomText: '2019'
      },
      {
        topText: '2',
      },
      {
        topText: '3',
      },
      {
        topText: '4',
      },
      {
        topText: '5',
      },
      {
        topText: '6',
      },
      {
        topText: '7',
      },
      {
        topText: '8',
      },
      {
        topText: '9',
      },
      {
        topText: '10',
      },
      {
        topText: '11',
      },
      {
        topText: '12',
      },
      {
        topText: '13',
      },
    ];
    const y = 112;
    const xPadding = 6;
    const xStepSize = width / xLabels.length;
    return xLabels.map((labelData, index) => {
      const {topText, bottomText} = labelData;
      const scaledY = y * 2;
      const x = index * xStepSize + xPadding;
      return (
        <G
          key={x}
        >
          {this.renderXAxisLabel(topText, x, scaledY)}
          {!!bottomText && this.renderXAxisLabel(bottomText, x, scaledY + 12)}
        </G>
      );
    });
  }

  renderXAxisLabel(text, x, y) {
    return (
      <Text
        fill="darkgrey"
        stroke="transparent"
        fontSize="10"
        fontWeight="normal"
        x={x}
        y={y}
        textAnchor="right"
      >
        {text}
      </Text>
    );
  }

  asPoints(width: number, yValues: number[]) {
    const yPadding = 10;
    const scale = 2;
    const startX = width - 14;
    const xStepSize = (width - 10) / yValues.length;
    return yValues.map((yValue, index) => {
      return {x: (startX - (index * xStepSize)), y: (100 - yValue) * scale + yPadding};
    });
  }

  renderLine(width: number, yValues: number[]) {
    // From newest to oldest
    const points = this.asPoints(width, yValues).map(point => `${point.x},${point.y}`).join(' ');
    return (
      <Polyline
        points={points}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
    );
  }

  renderPoints(width: number, yValues: number[]) {
    const radius = 5;
    return this.asPoints(width, yValues).map(point => {
      const {x, y} = point;
      return (
        <Circle
          key={x}
          cx={x}
          cy={y}
          r={radius}
          fill="black"
          stroke="white"
          strokeWidth="2"
        />
      );
    });
  }

  render() {
    const height = 240;
    const width = Dimensions.get('window').width - 30;
    const yValues = [46, 49, 46, 43, 40, 37, 34, 31, 28, 31, 28, 25, 22, 19, 16, 13, 10];
    return (
      <Svg
        height={height}
        width={width}
      >
        <G
          y={10}
        >
          {this.renderHorizontalLines(width)}
        </G>
        <G
          y={10}
        >
          {this.renderYAxisLabels()}
        </G>
        <G
          y={0}
        >
          {this.renderXAxisLabels(width)}
        </G>
        <G
          y={0}
        >
          {this.renderLine(width, yValues)}
        </G>
        <G
          y={0}
        >
          {this.renderPoints(width, yValues)}
        </G>
      </Svg>
    );
  }
}