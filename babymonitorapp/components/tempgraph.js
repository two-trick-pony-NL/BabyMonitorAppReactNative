import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
    LineChart,
  } from "react-native-chart-kit";



const TempGraph = props => {
  function getTime(unixTimeStamp) {
    return new Date(unixTimeStamp).toLocaleTimeString("nl-NL", {
      hour: '2-digit',
      minute:'2-digit'
    });
  }

    return (
        <View>
  <LineChart
    data={{
      labels: [getTime(props.data.measurements[9]["lastUpdate"]),getTime(props.data.measurements[8]["lastUpdate"]),getTime(props.data.measurements[7]["lastUpdate"]), getTime(props.data.measurements[6]["lastUpdate"]),getTime(props.data.measurements[5]["lastUpdate"]),getTime(props.data.measurements[4]["lastUpdate"]), getTime(props.data.measurements[3]["lastUpdate"]), getTime(props.data.measurements[2]["lastUpdate"]), getTime(props.data.measurements[1]["lastUpdate"]), getTime(props.data.measurements[0]["lastUpdate"])],
      datasets: [
        {
          data: [
            props.data.measurements[9]["temperature"],
            props.data.measurements[8]["temperature"],
            props.data.measurements[7]["temperature"],
            props.data.measurements[6]["temperature"],
            props.data.measurements[5]["temperature"],
            props.data.measurements[4]["temperature"],
            props.data.measurements[3]["temperature"],
            props.data.measurements[2]["temperature"],
            props.data.measurements[1]["temperature"],
            props.data.measurements[0]["temperature"],
    
          ]
        }
      ]
    }}
    width={750} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="°C"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#1E90FF",
      backgroundGradientFrom: "#1E90FF",
      backgroundGradientTo: "#1E90FF",
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

export default TempGraph;
