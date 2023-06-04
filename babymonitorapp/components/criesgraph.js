import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, ActivityIndicator} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";



const Cries  = props => {

  function getTime(unixTimeStamp) {
    return new Date(unixTimeStamp).toLocaleTimeString("nl-NL", {
      hour: '2-digit',
      minute:'2-digit'
    });
  }

    return(
        <View>
  <BarChart
    data={{
      labels: [getTime(props.data.measurements[9]["lastUpdate"]),getTime(props.data.measurements[8]["lastUpdate"]),getTime(props.data.measurements[7]["lastUpdate"]), getTime(props.data.measurements[6]["lastUpdate"]),getTime(props.data.measurements[5]["lastUpdate"]),getTime(props.data.measurements[4]["lastUpdate"]), getTime(props.data.measurements[3]["lastUpdate"]), getTime(props.data.measurements[2]["lastUpdate"]), getTime(props.data.measurements[1]["lastUpdate"]), getTime(props.data.measurements[0]["lastUpdate"])],
      datasets: [
        {
          data: [
            props.data.measurements[9]["movementDetected"],
            props.data.measurements[8]["movementDetected"],
            props.data.measurements[7]["movementDetected"],
            props.data.measurements[6]["movementDetected"],
            props.data.measurements[5]["movementDetected"],
            props.data.measurements[4]["movementDetected"],
            props.data.measurements[3]["movementDetected"],
            props.data.measurements[2]["movementDetected"],
            props.data.measurements[1]["movementDetected"],
            props.data.measurements[0]["movementDetected"],
    
          ]
        }
      ]
    }}
    width={750} // from react-native
    height={220}
    withHorizontalLabels={false}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#FF6347",
      backgroundGradientFrom: "#FF6347",
      backgroundGradientTo: "#FF6347",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "1",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      borderRadius: 16,
      alignSelf:'center',
    }}
  />
</View>

    );
}

export default Cries;
