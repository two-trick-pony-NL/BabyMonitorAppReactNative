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



const Cries = () => {
  const [loading, setLoading] = useState(true)
  const [Movementgraph, setMovementgraph] = useState([]);

  function getTime(unixTimeStamp) {
    return new Date(unixTimeStamp).toLocaleTimeString("nl-NL", {
      hour: '2-digit',
      minute:'2-digit'
    });
  }


  useEffect(() => {
    let interval = setInterval(() => {
      fetch('https://iom7vetorqgo7rg77bo5o2mmee0vcpgy.lambda-url.eu-central-1.on.aws/list-measurements/test_baby')
        .then((response) => response.json())
        .then((responseJson) => {
        console.log('Movement graph data arrived');
        setMovementgraph(responseJson);
        setLoading(false)
        })
        .catch((error) => {
        console.error(error);
        });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

    return loading ? ( 
      <View style={{width:290, height:220, alignItems:'center', justifyContent:'center'}}>
      <ActivityIndicator
                style={{width: 50, height: 50, alignSelf:'center'}}
                size="large"
                color="#fff"
            />    
      </View>
    ):(
        <View>
  <BarChart
    data={{
      labels: [getTime(Movementgraph.measurements[9]["lastUpdate"]),getTime(Movementgraph.measurements[8]["lastUpdate"]),getTime(Movementgraph.measurements[7]["lastUpdate"]), getTime(Movementgraph.measurements[6]["lastUpdate"]),getTime(Movementgraph.measurements[5]["lastUpdate"]),getTime(Movementgraph.measurements[4]["lastUpdate"]), getTime(Movementgraph.measurements[3]["lastUpdate"]), getTime(Movementgraph.measurements[2]["lastUpdate"]), getTime(Movementgraph.measurements[1]["lastUpdate"]), getTime(Movementgraph.measurements[0]["lastUpdate"])],
      datasets: [
        {
          data: [
            Movementgraph.measurements[9]["movementDetected"],
            Movementgraph.measurements[8]["movementDetected"],
            Movementgraph.measurements[7]["movementDetected"],
            Movementgraph.measurements[6]["movementDetected"],
            Movementgraph.measurements[5]["movementDetected"],
            Movementgraph.measurements[4]["movementDetected"],
            Movementgraph.measurements[3]["movementDetected"],
            Movementgraph.measurements[2]["movementDetected"],
            Movementgraph.measurements[1]["movementDetected"],
            Movementgraph.measurements[0]["movementDetected"],
    
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
