import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";



const HumidityGraph = () => {

    return (
        <View>
  <LineChart
    data={{
      labels: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25"],
      datasets: [
        {
          data: [
            Math.random() * 50,
            Math.random() * 50,
            Math.random() * 50,
            Math.random() * 50,
            Math.random() * 50,
            Math.random() * 50
          ]
        }
      ]
    }}
    width={290} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="%"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#FFD700",
      backgroundGradientFrom: "#FFD700",
      backgroundGradientTo: "#FFD700",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      alignSelf:'center',
      marginLeft:5,
    }}
  />
</View>

    );
}

export default HumidityGraph;
