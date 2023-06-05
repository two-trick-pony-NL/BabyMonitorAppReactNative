import React from 'react';
import { Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import moment from 'moment';

const HumidityGraph = props => {

  function getTime(unixTimeStamp) {
    const currentTime = moment().unix();
    const differenceInSeconds = currentTime - unixTimeStamp;
    return `${differenceInSeconds} s ago`;
  }

  return props.loading ? ( 
    <View style={{width:'90%', height:220, borderRadius:20, backgroundColor:'tomato', alignItems:'center', justifyContent:'center'}}>
      <ActivityIndicator
        style={{width: 50, height: 50, alignSelf:'center'}}
        size="large"
        color="#fff"
      />    
    </View>
  ) : (
    <View>
      <LineChart
        data={{
          labels: props.data.measurements.slice(0, 10).map(measurement => getTime(measurement.lastUpdate)),
          datasets: [
            {
              data: props.data.measurements.slice(0, 10).map(measurement => measurement.humidity),
            }
          ]
        }}
        width={750} // from react-native
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
