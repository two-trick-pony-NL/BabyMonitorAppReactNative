import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";
import moment from 'moment';

const Cries = props => {
  function getTime(unixTimeStamp) {
    const currentTime = moment().unix();
    const differenceInSeconds = currentTime - unixTimeStamp;
    return `${differenceInSeconds} s ago`;
  }

  return props.loading ? (
    <View style={{ width: '90%', height: 220, borderRadius: 20, backgroundColor: '#5FAD56', alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator
        style={{ width: 50, height: 50, alignSelf: 'center' }}
        size="large"
        color="#fff"
      />
    </View>
  ) : (
    <View>
      <BarChart
        data={{
          labels: props.data.measurements.slice(0, 10).map(measurement => getTime(measurement.lastUpdate)).reverse(),
          datasets: [
            {
              data: props.data.measurements.slice(0, 10).map(measurement => measurement.cryDetected).reverse(),
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
          backgroundColor: "#5FAD56",
          backgroundGradientFrom: "#5FAD56",
          backgroundGradientTo: "#5FAD56",
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
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

export default Cries;
